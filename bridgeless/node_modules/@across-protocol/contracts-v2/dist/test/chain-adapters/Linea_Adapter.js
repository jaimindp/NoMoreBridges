"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const utils_1 = require("../../utils/utils");
const HubPool_Fixture_1 = require("../fixtures/HubPool.Fixture");
const MerkleLib_utils_1 = require("../MerkleLib.utils");
const smock_1 = require("@defi-wonderland/smock");
let hubPool, lineaAdapter, weth, dai, usdc, timer, mockSpoke;
let l2Weth, l2Dai, l2Usdc;
let owner, dataWorker, liquidityProvider;
let lineaMessageService, lineaTokenBridge, lineaUsdcBridge;
const lineaChainId = 59144;
const lineaMessageServiceAbi = [
    {
        inputs: [
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_fee", type: "uint256" },
            { internalType: "bytes", name: "_calldata", type: "bytes" },
        ],
        name: "sendMessage",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const lineaTokenBridgeAbi = [
    {
        inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "address", name: "_recipient", type: "address" },
        ],
        name: "bridgeToken",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const lineaUsdcBridgeAbi = [
    {
        inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
        ],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "usdc",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
describe("Linea Chain Adapter", function () {
    beforeEach(async function () {
        [owner, dataWorker, liquidityProvider] = await utils_1.ethers.getSigners();
        ({ weth, dai, usdc, l2Weth, l2Dai, l2Usdc, hubPool, mockSpoke, timer } = await (0, HubPool_Fixture_1.hubPoolFixture)());
        await (0, utils_1.seedWallet)(dataWorker, [dai, usdc], weth, constants_1.amountToLp);
        await (0, utils_1.seedWallet)(liquidityProvider, [dai, usdc], weth, constants_1.amountToLp.mul(10));
        await (0, HubPool_Fixture_1.enableTokensForLP)(owner, hubPool, weth, [weth, dai, usdc]);
        await weth.connect(liquidityProvider).approve(hubPool.address, constants_1.amountToLp);
        await hubPool.connect(liquidityProvider).addLiquidity(weth.address, constants_1.amountToLp);
        await weth.connect(dataWorker).approve(hubPool.address, constants_1.bondAmount.mul(10));
        await dai.connect(liquidityProvider).approve(hubPool.address, constants_1.amountToLp);
        await hubPool.connect(liquidityProvider).addLiquidity(dai.address, constants_1.amountToLp);
        await dai.connect(dataWorker).approve(hubPool.address, constants_1.bondAmount.mul(10));
        await usdc.connect(liquidityProvider).approve(hubPool.address, constants_1.amountToLp);
        await hubPool.connect(liquidityProvider).addLiquidity(usdc.address, constants_1.amountToLp);
        await usdc.connect(dataWorker).approve(hubPool.address, constants_1.bondAmount.mul(10));
        lineaMessageService = await smock_1.smock.fake(lineaMessageServiceAbi, {
            address: "0xd19d4B5d358258f05D7B411E21A1460D11B0876F",
        });
        lineaTokenBridge = await smock_1.smock.fake(lineaTokenBridgeAbi, { address: "0x051F1D88f0aF5763fB888eC4378b4D8B29ea3319" });
        lineaUsdcBridge = await smock_1.smock.fake(lineaUsdcBridgeAbi, {
            address: "0x504a330327a089d8364c4ab3811ee26976d388ce",
        });
        lineaUsdcBridge.usdc.returns(usdc.address);
        lineaAdapter = await (await (0, utils_1.getContractFactory)("Linea_Adapter", owner)).deploy(weth.address, lineaMessageService.address, lineaTokenBridge.address, lineaUsdcBridge.address);
        // Seed the HubPool some funds so it can send L1->L2 messages.
        await hubPool.connect(liquidityProvider).loadEthForL2Calls({ value: (0, utils_1.toWei)("100000") });
        await hubPool.setCrossChainContracts(lineaChainId, lineaAdapter.address, mockSpoke.address);
        await hubPool.setPoolRebalanceRoute(lineaChainId, weth.address, l2Weth);
        await hubPool.setPoolRebalanceRoute(lineaChainId, dai.address, l2Dai);
        await hubPool.setPoolRebalanceRoute(lineaChainId, usdc.address, l2Usdc);
    });
    it("relayMessage calls spoke pool functions", async function () {
        const newAdmin = (0, utils_1.randomAddress)();
        const functionCallData = mockSpoke.interface.encodeFunctionData("setCrossDomainAdmin", [newAdmin]);
        (0, utils_1.expect)(await hubPool.relaySpokePoolAdminFunction(lineaChainId, functionCallData))
            .to.emit(lineaAdapter.attach(hubPool.address), "MessageRelayed")
            .withArgs(mockSpoke.address, functionCallData);
        (0, utils_1.expect)(lineaMessageService.sendMessage).to.have.been.calledWith(mockSpoke.address, 0, functionCallData);
        (0, utils_1.expect)(lineaMessageService.sendMessage).to.have.been.calledWithValue(utils_1.BigNumber.from(0));
    });
    it("Correctly calls appropriate bridge functions when making ERC20 cross chain calls", async function () {
        // Create an action that will send an L1->L2 tokens transfer and bundle. For this, create a relayer repayment bundle
        // and check that at it's finalization the L2 bridge contracts are called as expected.
        const { leaves, tree, tokensSendToL2 } = await (0, MerkleLib_utils_1.constructSingleChainTree)(dai.address, 1, lineaChainId);
        await hubPool.connect(dataWorker).proposeRootBundle([3117], 1, tree.getHexRoot(), constants_1.mockTreeRoot, constants_1.mockTreeRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + constants_1.refundProposalLiveness + 1);
        await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // The correct functions should have been called on the optimism contracts.
        const expectedErc20L1ToL2BridgeParams = [dai.address, tokensSendToL2, mockSpoke.address];
        (0, utils_1.expect)(lineaTokenBridge.bridgeToken).to.have.been.calledWith(...expectedErc20L1ToL2BridgeParams);
    });
    it("Correctly calls appropriate bridge functions when making USDC cross chain calls", async function () {
        // Create an action that will send an L1->L2 tokens transfer and bundle. For this, create a relayer repayment bundle
        // and check that at it's finalization the L2 bridge contracts are called as expected.
        const { leaves, tree, tokensSendToL2 } = await (0, MerkleLib_utils_1.constructSingleChainTree)(usdc.address, 1, lineaChainId);
        await hubPool.connect(dataWorker).proposeRootBundle([3117], 1, tree.getHexRoot(), constants_1.mockTreeRoot, constants_1.mockTreeRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + constants_1.refundProposalLiveness + 1);
        await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // The correct functions should have been called on the optimism contracts.
        const expectedErc20L1ToL2BridgeParams = [tokensSendToL2, mockSpoke.address];
        (0, utils_1.expect)(lineaUsdcBridge.depositTo).to.have.been.calledWith(...expectedErc20L1ToL2BridgeParams);
    });
    it("Correctly unwraps WETH and bridges ETH", async function () {
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleChainTree)(weth.address, 1, lineaChainId);
        await hubPool.connect(dataWorker).proposeRootBundle([3117], 1, tree.getHexRoot(), constants_1.mockTreeRoot, constants_1.mockTreeRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + constants_1.refundProposalLiveness + 1);
        // Since WETH is used as proposal bond, the bond plus the WETH are debited from the HubPool's balance.
        // The WETH used in the Linea_Adapter is withdrawn to ETH and then paid to the Linea MessageService.
        const proposalBond = await hubPool.bondAmount();
        await (0, utils_1.expect)(() => hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]))).to.changeTokenBalance(weth, hubPool, leaves[0].netSendAmounts[0].add(proposalBond).mul(-1));
        (0, utils_1.expect)(lineaMessageService.sendMessage).to.have.been.calledWith(mockSpoke.address, 0, "0x");
        (0, utils_1.expect)(lineaMessageService.sendMessage).to.have.been.calledWithValue(leaves[0].netSendAmounts[0]);
    });
});
