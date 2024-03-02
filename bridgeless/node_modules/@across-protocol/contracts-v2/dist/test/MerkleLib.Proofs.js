"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MerkleLib_Fixture_1 = require("./fixtures/MerkleLib.Fixture");
const MerkleTree_1 = require("../utils/MerkleTree");
const utils_1 = require("../utils/utils");
let merkleLibTest;
describe("MerkleLib Proofs", async function () {
    before(async function () {
        ({ merkleLibTest } = await (0, MerkleLib_Fixture_1.merkleLibFixture)());
    });
    it("Empty tree", async function () {
        const paramType = await (0, utils_1.getParamType)("MerkleLibTest", "verifyPoolRebalance", "rebalance");
        const hashFn = (input) => (0, utils_1.keccak256)(utils_1.defaultAbiCoder.encode([paramType], [input]));
        // Can construct empty tree without error.
        const merkleTree = new MerkleTree_1.MerkleTree([], hashFn);
        // Returns hardcoded root for empty tree.
        (0, utils_1.expect)(merkleTree.getHexRoot()).to.equal(MerkleTree_1.EMPTY_MERKLE_ROOT);
    });
    it("PoolRebalanceLeaf Proof", async function () {
        const poolRebalanceLeaves = [];
        const numRebalances = 101;
        for (let i = 0; i < numRebalances; i++) {
            const numTokens = 10;
            const l1Tokens = [];
            const bundleLpFees = [];
            const netSendAmounts = [];
            const runningBalances = [];
            for (let j = 0; j < numTokens; j++) {
                l1Tokens.push((0, utils_1.randomAddress)());
                bundleLpFees.push((0, utils_1.randomBigNumber)());
                netSendAmounts.push((0, utils_1.randomBigNumber)(undefined, true));
                runningBalances.push((0, utils_1.randomBigNumber)(undefined, true));
            }
            poolRebalanceLeaves.push({
                leafId: utils_1.BigNumber.from(i),
                chainId: (0, utils_1.randomBigNumber)(),
                l1Tokens,
                bundleLpFees,
                netSendAmounts,
                runningBalances,
                groupIndex: utils_1.BigNumber.from(0),
            });
        }
        // Remove the last element.
        const invalidPoolRebalanceLeaf = poolRebalanceLeaves.pop();
        const paramType = await (0, utils_1.getParamType)("MerkleLibTest", "verifyPoolRebalance", "rebalance");
        const hashFn = (input) => (0, utils_1.keccak256)(utils_1.defaultAbiCoder.encode([paramType], [input]));
        const merkleTree = new MerkleTree_1.MerkleTree(poolRebalanceLeaves, hashFn);
        const root = merkleTree.getHexRoot();
        const proof = merkleTree.getHexProof(poolRebalanceLeaves[34]);
        (0, utils_1.expect)(await merkleLibTest.verifyPoolRebalance(root, poolRebalanceLeaves[34], proof)).to.equal(true);
        // Verify that the excluded element fails to generate a proof and fails verification using the proof generated above.
        (0, utils_1.expect)(() => merkleTree.getHexProof(invalidPoolRebalanceLeaf)).to.throw();
        (0, utils_1.expect)(await merkleLibTest.verifyPoolRebalance(root, invalidPoolRebalanceLeaf, proof)).to.equal(false);
    });
    it("RelayerRefundLeafProof", async function () {
        const relayerRefundLeaves = [];
        const numDistributions = 101; // Create 101 and remove the last to use as the "invalid" one.
        for (let i = 0; i < numDistributions; i++) {
            const numAddresses = 10;
            const refundAddresses = [];
            const refundAmounts = [];
            for (let j = 0; j < numAddresses; j++) {
                refundAddresses.push((0, utils_1.randomAddress)());
                refundAmounts.push((0, utils_1.randomBigNumber)());
            }
            relayerRefundLeaves.push({
                leafId: utils_1.BigNumber.from(i),
                chainId: (0, utils_1.randomBigNumber)(2),
                amountToReturn: (0, utils_1.randomBigNumber)(),
                l2TokenAddress: (0, utils_1.randomAddress)(),
                refundAddresses,
                refundAmounts,
            });
        }
        // Remove the last element.
        const invalidRelayerRefundLeaf = relayerRefundLeaves.pop();
        const paramType = await (0, utils_1.getParamType)("MerkleLibTest", "verifyRelayerRefund", "refund");
        const hashFn = (input) => (0, utils_1.keccak256)(utils_1.defaultAbiCoder.encode([paramType], [input]));
        const merkleTree = new MerkleTree_1.MerkleTree(relayerRefundLeaves, hashFn);
        const root = merkleTree.getHexRoot();
        const proof = merkleTree.getHexProof(relayerRefundLeaves[14]);
        (0, utils_1.expect)(await merkleLibTest.verifyRelayerRefund(root, relayerRefundLeaves[14], proof)).to.equal(true);
        // Verify that the excluded element fails to generate a proof and fails verification using the proof generated above.
        (0, utils_1.expect)(() => merkleTree.getHexProof(invalidRelayerRefundLeaf)).to.throw();
        (0, utils_1.expect)(await merkleLibTest.verifyRelayerRefund(root, invalidRelayerRefundLeaf, proof)).to.equal(false);
    });
    it("V3SlowFillProof", async function () {
        const slowFillLeaves = [];
        const numDistributions = 101; // Create 101 and remove the last to use as the "invalid" one.
        for (let i = 0; i < numDistributions; i++) {
            const relayData = {
                depositor: (0, utils_1.randomAddress)(),
                recipient: (0, utils_1.randomAddress)(),
                exclusiveRelayer: (0, utils_1.randomAddress)(),
                inputToken: (0, utils_1.randomAddress)(),
                outputToken: (0, utils_1.randomAddress)(),
                inputAmount: (0, utils_1.randomBigNumber)(),
                outputAmount: (0, utils_1.randomBigNumber)(),
                originChainId: (0, utils_1.randomBigNumber)(2).toNumber(),
                depositId: utils_1.BigNumber.from(i).toNumber(),
                fillDeadline: (0, utils_1.randomBigNumber)(2).toNumber(),
                exclusivityDeadline: (0, utils_1.randomBigNumber)(2).toNumber(),
                message: utils_1.ethers.utils.hexlify(utils_1.ethers.utils.randomBytes(1024)),
            };
            slowFillLeaves.push({
                relayData,
                chainId: (0, utils_1.randomBigNumber)(2).toNumber(),
                updatedOutputAmount: relayData.outputAmount,
            });
        }
        // Remove the last element.
        const invalidLeaf = slowFillLeaves.pop();
        const paramType = await (0, utils_1.getParamType)("MerkleLibTest", "verifyV3SlowRelayFulfillment", "slowFill");
        const hashFn = (input) => (0, utils_1.keccak256)(utils_1.defaultAbiCoder.encode([paramType], [input]));
        const merkleTree = new MerkleTree_1.MerkleTree(slowFillLeaves, hashFn);
        const root = merkleTree.getHexRoot();
        const proof = merkleTree.getHexProof(slowFillLeaves[14]);
        (0, utils_1.expect)(await merkleLibTest.verifyV3SlowRelayFulfillment(root, slowFillLeaves[14], proof)).to.equal(true);
        // Verify that the excluded element fails to generate a proof and fails verification using the proof generated above.
        (0, utils_1.expect)(() => merkleTree.getHexProof(invalidLeaf)).to.throw();
        (0, utils_1.expect)(await merkleLibTest.verifyV3SlowRelayFulfillment(root, invalidLeaf, proof)).to.equal(false);
    });
});
