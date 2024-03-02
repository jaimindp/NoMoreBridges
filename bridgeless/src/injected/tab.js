import React from 'react';
import { Wormhole, Signer } from '@wormhole-foundation/connect-sdk';
import { EvmPlatform } from '@wormhole-foundation/connect-sdk-evm';
import '@wormhole-foundation/connect-sdk-evm-tokenbridge';

export const TabButton = (tabDiv) => {
    const senderAddress = '0x89d9Dd2e85ecC305E276f51BB21fd4C708Be9487';
    const network = 'Mainnet'; // Or "Testnet"
    const wh = new Wormhole(network, [EvmPlatform]);
    const srcChain = wh.getChain('Ethereum');
    const getBalance = async () => {
        const balance = await srcChain.getBalance(senderAddress, 'native'); // => BigInt
        console.log(`Balance is: ${balance}`);
    };
    getBalance();
    const getTokenBridgeAndRpc = async () => {
        await srcChain.getTokenBridge(); // => TokenBridge<'Evm'>
        // util to grab an RPC client, cached after the first call
        srcChain.getRpc(); // => RpcConnection<'Evm'>
    };
    getTokenBridgeAndRpc();

    let clickMeButton = document.createElement('button');
    clickMeButton.innerHTML = 'Click me';
    clickMeButton.style.fontSize = '15px';
    clickMeButton.style.padding = '5px 10px';
    clickMeButton.style.backgroundColor = 'white';
    clickMeButton.style.color = 'black';
    clickMeButton.style.border = 'none';
    clickMeButton.style.borderRadius = '5px';
    clickMeButton.onclick = function () {
        console.log('clicked');
    };
    tabDiv.appendChild(clickMeButton);

    // Get the chain context for the source and destination chains
    // This is useful to grab direct clients for the protocols
    const dstChain = wh.getChain('Arbitrum');
    // const dstChain = wh.getChain("Base");
    // const dstChain = wh.getChain(receiverAddress.chain);

    const getTokenBridgeAndRpcClient = async () => {
        const tb = await srcChain.getTokenBridge(); // => TokenBridge<'Evm'>
        srcChain.getRpcClient(); // => RpcClient<'Evm'>
    };
    // getTokenBridgeAndRpcClient();

    // Returns a TokenId
    // const sourceToken = Wormhole.tokenId('Ethereum', senderAddress);
    const sourceToken = Wormhole.tokenId(
        'Ethereum',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' // USDC
    );

    // Whereas the ChainAddress is limited to valid addresses, a TokenId may
    // have the string literal 'native' to consistently denote the native
    // gas token of the chain
    const gasToken = Wormhole.tokenId('Ethereum', 'native');

    const getTokenBridgeAndSignSendWait = async () => {
        const tb = await srcChain.getTokenBridge(); // => TokenBridge<'Evm'>
        const token = '0xdeadbeef...';
        const txGenerator = tb.createAttestation(token); // => AsyncGenerator<UnsignedTransaction, ...>
        const txids = await signSendWait(srcChain, txGenerator, src.signer);
    };
    // getTokenBridgeAndSignSendWait();

    // const amt = 100; // amount in base units
    // // const senderAddress = senderAddress; // Sender address on source chain
    // const recipientAddress = senderAddress; // Recipient address on destination chain
    // const automatic = true; // Automatic transfer
    // const provider = new _ethers.providers.Web3Provider(window.ethereum);

    return (
        <div>
            <button
                style={{
                    fontSize: '20px',
                    padding: '10px 20px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                }}
            >
                Click me
            </button>
        </div>
    );
};
