"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployMockSpokePoolCaller = exports.getUpdatedV3DepositSignature = exports.modifyRelayHelper = exports.getExecuteSlowRelayParams = exports.getFillRelayUpdatedFeeParams = exports.getFillRelayParams = exports.getDepositParams = exports.getV3RelayHash = exports.getRelayHash = exports.fillRelay = exports.depositV2 = exports.enableRoutes = exports.deploySpokePool = exports.spokePoolFixture = void 0;
const utils_hre_1 = require("../../utils/utils.hre");
const utils_1 = require("../../utils/utils");
const consts = __importStar(require("../constants"));
exports.spokePoolFixture = utils_hre_1.hre.deployments.createFixture(async ({ ethers }) => {
    return await deploySpokePool(ethers);
});
// Have a separate function that deploys the contract and returns the contract addresses. This is called by the fixture
// to have standard fixture features. It is also exported as a function to enable non-snapshoted deployments.
async function deploySpokePool(ethers, spokePoolName = "MockSpokePool") {
    const [deployerWallet, crossChainAdmin, hubPool] = await ethers.getSigners();
    // Create tokens:
    const weth = await (await (0, utils_1.getContractFactory)("WETH9", deployerWallet)).deploy();
    const erc20 = await (await (0, utils_1.getContractFactory)("ExpandedERC20", deployerWallet)).deploy("USD Coin", "USDC", 18);
    await erc20.addMember(consts.TokenRolesEnum.MINTER, deployerWallet.address);
    const unwhitelistedErc20 = await (await (0, utils_1.getContractFactory)("ExpandedERC20", deployerWallet)).deploy("Unwhitelisted", "UNWHITELISTED", 18);
    await unwhitelistedErc20.addMember(consts.TokenRolesEnum.MINTER, deployerWallet.address);
    const destErc20 = await (await (0, utils_1.getContractFactory)("ExpandedERC20", deployerWallet)).deploy("L2 USD Coin", "L2 USDC", 18);
    await destErc20.addMember(consts.TokenRolesEnum.MINTER, deployerWallet.address);
    // Deploy the pool
    const spokePool = await utils_hre_1.hre.upgrades.deployProxy(await (0, utils_1.getContractFactory)(spokePoolName, deployerWallet), [0, crossChainAdmin.address, hubPool.address], { kind: "uups", unsafeAllow: ["delegatecall"], constructorArgs: [weth.address] });
    await spokePool.setChainId(consts.destinationChainId);
    // ERC1271
    const erc1271 = await (await (0, utils_1.getContractFactory)("MockERC1271", deployerWallet)).deploy(deployerWallet.address);
    return {
        weth,
        erc20,
        spokePool,
        unwhitelistedErc20,
        destErc20,
        erc1271,
    };
}
exports.deploySpokePool = deploySpokePool;
async function enableRoutes(spokePool, routes) {
    for (const route of routes) {
        await spokePool.setEnableRoute(route.originToken, route.destinationChainId ?? consts.destinationChainId, route.enabled ?? true);
    }
}
exports.enableRoutes = enableRoutes;
async function depositV2(spokePool, token, recipient, depositor, destinationChainId = consts.destinationChainId, amount = consts.amountToDeposit, relayerFeePct = consts.depositRelayerFeePct, quoteTimestamp, message) {
    await spokePool.connect(depositor).depositV2(...getDepositParams({
        recipient: recipient.address,
        originToken: token.address,
        amount,
        destinationChainId,
        relayerFeePct,
        quoteTimestamp: quoteTimestamp ?? (await spokePool.getCurrentTime()).toNumber(),
        message,
    }));
    const [events, originChainId] = await Promise.all([
        spokePool.queryFilter(spokePool.filters.FundsDeposited()),
        spokePool.chainId(),
    ]);
    const lastEvent = events[events.length - 1];
    return lastEvent.args === undefined
        ? null
        : {
            amount: lastEvent.args.amount,
            originChainId: Number(originChainId),
            destinationChainId: Number(lastEvent.args.destinationChainId),
            relayerFeePct: lastEvent.args.relayerFeePct,
            depositId: lastEvent.args.depositId,
            quoteTimestamp: lastEvent.args.quoteTimestamp,
            originToken: lastEvent.args.originToken,
            recipient: lastEvent.args.recipient,
            depositor: lastEvent.args.depositor,
            message: lastEvent.args.message,
        };
}
exports.depositV2 = depositV2;
async function fillRelay(spokePool, destErc20, recipient, depositor, relayer, depositId = consts.firstDepositId, originChainId = consts.originChainId, depositAmount = consts.amountToDeposit, amountToRelay = consts.amountToRelay, realizedLpFeePct = consts.realizedLpFeePct, relayerFeePct = consts.depositRelayerFeePct) {
    await spokePool
        .connect(relayer)
        .fillRelay(...getFillRelayParams(getRelayHash(depositor.address, recipient.address, depositId, originChainId, consts.destinationChainId, destErc20.address ?? destErc20, depositAmount, realizedLpFeePct, relayerFeePct).relayData, amountToRelay, consts.repaymentChainId));
    const [events, destinationChainId] = await Promise.all([
        spokePool.queryFilter(spokePool.filters.FilledRelay()),
        spokePool.chainId(),
    ]);
    const lastEvent = events[events.length - 1];
    if (lastEvent.args)
        return {
            amount: lastEvent.args.amount,
            totalFilledAmount: lastEvent.args.totalFilledAmount,
            fillAmount: lastEvent.args.fillAmount,
            repaymentChainId: Number(lastEvent.args.repaymentChainId),
            originChainId: Number(lastEvent.args.originChainId),
            relayerFeePct: lastEvent.args.relayerFeePct,
            appliedRelayerFeePct: lastEvent.args.appliedRelayerFeePct,
            realizedLpFeePct: lastEvent.args.realizedLpFeePct,
            depositId: lastEvent.args.depositId,
            destinationToken: lastEvent.args.destinationToken,
            relayer: lastEvent.args.relayer,
            depositor: lastEvent.args.depositor,
            recipient: lastEvent.args.recipient,
            isSlowRelay: lastEvent.args.isSlowRelay,
            destinationChainId: Number(destinationChainId),
        };
    else
        return null;
}
exports.fillRelay = fillRelay;
function getRelayHash(_depositor, _recipient, _depositId, _originChainId, _destinationChainId, _destinationToken, _amount, _realizedLpFeePct, _relayerFeePct, _message) {
    const relayData = {
        depositor: _depositor,
        recipient: _recipient,
        destinationToken: _destinationToken,
        amount: _amount || consts.amountToDeposit,
        originChainId: _originChainId.toString(),
        destinationChainId: _destinationChainId.toString(),
        realizedLpFeePct: _realizedLpFeePct || consts.realizedLpFeePct,
        relayerFeePct: _relayerFeePct || consts.depositRelayerFeePct,
        depositId: _depositId.toString(),
        message: _message || "0x",
    };
    const relayHash = utils_1.ethers.utils.keccak256(utils_1.defaultAbiCoder.encode([
        "tuple(address depositor, address recipient, address destinationToken, uint256 amount, uint256 originChainId, uint256 destinationChainId, int64 realizedLpFeePct, int64 relayerFeePct, uint32 depositId, bytes message)",
    ], [relayData]));
    return { relayHash, relayData };
}
exports.getRelayHash = getRelayHash;
function getV3RelayHash(relayData, destinationChainId) {
    return utils_1.ethers.utils.keccak256(utils_1.defaultAbiCoder.encode([
        "tuple(address depositor, address recipient, address exclusiveRelayer, address inputToken, address outputToken, uint256 inputAmount, uint256 outputAmount, uint256 originChainId, uint32 depositId, uint32 fillDeadline, uint32 exclusivityDeadline, bytes message)",
        "uint256 destinationChainId",
    ], [relayData, destinationChainId]));
}
exports.getV3RelayHash = getV3RelayHash;
function getDepositParams(args) {
    return [
        args.recipient ?? (0, utils_1.randomAddress)(),
        args.originToken,
        args.amount.toString(),
        args.destinationChainId.toString(),
        args.relayerFeePct.toString(),
        args.quoteTimestamp.toString(),
        args.message ?? "0x",
        args?.maxCount?.toString() ?? consts.maxUint256.toString(),
    ];
}
exports.getDepositParams = getDepositParams;
function getFillRelayParams(_relayData, _maxTokensToSend, _repaymentChain, _maxCount) {
    return [
        _relayData.depositor,
        _relayData.recipient,
        _relayData.destinationToken,
        _relayData.amount.toString(),
        _maxTokensToSend.toString(),
        _repaymentChain ? _repaymentChain.toString() : consts.repaymentChainId.toString(),
        _relayData.originChainId,
        _relayData.realizedLpFeePct.toString(),
        _relayData.relayerFeePct.toString(),
        _relayData.depositId,
        _relayData.message || "0x",
        _maxCount ? _maxCount.toString() : consts.maxUint256.toString(),
    ];
}
exports.getFillRelayParams = getFillRelayParams;
function getFillRelayUpdatedFeeParams(_relayData, _maxTokensToSend, _updatedFee, _signature, _repaymentChain, _updatedRecipient, _updatedMessage, _maxCount) {
    return [
        _relayData.depositor,
        _relayData.recipient,
        _updatedRecipient || _relayData.recipient,
        _relayData.destinationToken,
        _relayData.amount.toString(),
        _maxTokensToSend.toString(),
        _repaymentChain ? _repaymentChain.toString() : consts.repaymentChainId.toString(),
        _relayData.originChainId,
        _relayData.realizedLpFeePct.toString(),
        _relayData.relayerFeePct.toString(),
        _updatedFee.toString(),
        _relayData.depositId,
        _relayData.message,
        _updatedMessage || _relayData.message,
        _signature,
        _maxCount ? _maxCount.toString() : consts.maxUint256.toString(),
    ];
}
exports.getFillRelayUpdatedFeeParams = getFillRelayUpdatedFeeParams;
function getExecuteSlowRelayParams(_depositor, _recipient, _destToken, _amount, _originChainId, _realizedLpFeePct, _relayerFeePct, _depositId, _relayerRefundId, _message, _payoutAdjustment, _proof) {
    return [
        _depositor,
        _recipient,
        _destToken,
        _amount.toString(),
        _originChainId.toString(),
        _realizedLpFeePct.toString(),
        _relayerFeePct.toString(),
        _depositId.toString(),
        _relayerRefundId.toString(),
        _message,
        _payoutAdjustment.toString(),
        _proof,
    ];
}
exports.getExecuteSlowRelayParams = getExecuteSlowRelayParams;
async function modifyRelayHelper(modifiedRelayerFeePct, depositId, originChainId, depositor, updatedRecipient, updatedMessage) {
    const typedData = {
        types: {
            UpdateDepositDetails: [
                { name: "depositId", type: "uint32" },
                { name: "originChainId", type: "uint256" },
                { name: "updatedRelayerFeePct", type: "int64" },
                { name: "updatedRecipient", type: "address" },
                { name: "updatedMessage", type: "bytes" },
            ],
        },
        domain: {
            name: "ACROSS-V2",
            version: "1.0.0",
            chainId: Number(originChainId),
        },
        message: {
            depositId,
            originChainId,
            updatedRelayerFeePct: modifiedRelayerFeePct,
            updatedRecipient,
            updatedMessage,
        },
    };
    const signature = await depositor._signTypedData(typedData.domain, typedData.types, typedData.message);
    return {
        signature,
    };
}
exports.modifyRelayHelper = modifyRelayHelper;
async function getUpdatedV3DepositSignature(depositor, depositId, originChainId, updatedOutputAmount, updatedRecipient, updatedMessage) {
    const typedData = {
        types: {
            UpdateDepositDetails: [
                { name: "depositId", type: "uint32" },
                { name: "originChainId", type: "uint256" },
                { name: "updatedOutputAmount", type: "uint256" },
                { name: "updatedRecipient", type: "address" },
                { name: "updatedMessage", type: "bytes" },
            ],
        },
        domain: {
            name: "ACROSS-V2",
            version: "1.0.0",
            chainId: originChainId,
        },
        message: {
            depositId,
            originChainId,
            updatedOutputAmount,
            updatedRecipient,
            updatedMessage,
        },
    };
    return await depositor._signTypedData(typedData.domain, typedData.types, typedData.message);
}
exports.getUpdatedV3DepositSignature = getUpdatedV3DepositSignature;
async function deployMockSpokePoolCaller(spokePool, rootBundleId, leaf, proof) {
    return await (await (0, utils_1.getContractFactory)("MockCaller", (await utils_1.ethers.getSigners())[0])).deploy(spokePool.address, rootBundleId, leaf, proof);
}
exports.deployMockSpokePoolCaller = deployMockSpokePoolCaller;
