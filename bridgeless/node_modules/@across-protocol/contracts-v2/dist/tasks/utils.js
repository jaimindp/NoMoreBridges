"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askYesNoQuestion = exports.minimalSpokePoolInterface = exports.zeroAddress = void 0;
const ethers_1 = require("ethers");
const readline_1 = __importDefault(require("readline"));
exports.zeroAddress = ethers_1.ethers.constants.AddressZero;
exports.minimalSpokePoolInterface = [
    {
        inputs: [
            { internalType: "address", name: "l2Token", type: "address" },
            { internalType: "address", name: "l1Token", type: "address" },
        ],
        name: "whitelistToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "l2Token", type: "address" },
            { internalType: "address", name: "tokenBridge", type: "address" },
        ],
        name: "setTokenBridge",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
async function askQuestion(query) {
    const rl = readline_1.default.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => rl.question(query, (ans) => {
        rl.close();
        resolve(ans);
    }));
}
async function askYesNoQuestion(query) {
    const ans = (await askQuestion(`${query} (y/n) `));
    if (ans.toLowerCase() === "y")
        return true;
    if (ans.toLowerCase() === "n")
        return false;
    return askYesNoQuestion(query);
}
exports.askYesNoQuestion = askYesNoQuestion;
