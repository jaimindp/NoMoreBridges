import React, { useEffect } from 'react';
import { bridge, swap } from './jqueryUITransformer';

export const TabButton = (tabDiv) => {
    let buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.alignItems = 'center';
    buttonContainer.style.paddingTop = '8px';

    let selectContainer = document.createElement('div');
    selectContainer.style.display = 'flex';
    selectContainer.style.justifyContent = 'space-between';

    let chainFrom = document.createElement('select');
    let chainOption1 = document.createElement('option');
    chainOption1.value = 'Eth';
    chainOption1.text = 'Eth';
    chainFrom.appendChild(chainOption1);
    let chainOption2 = document.createElement('option');
    chainOption2.value = 'Arb';
    chainOption2.text = 'Arb';
    chainFrom.appendChild(chainOption2);

    let chainOption3 = document.createElement('option');
    chainOption3.value = 'Base';
    chainOption3.text = 'Base';
    chainFrom.appendChild(chainOption3);

    let tokenFrom = document.createElement('select');
    let option1 = document.createElement('option');
    option1.value = 'USDC';
    option1.text = 'USDC';
    tokenFrom.appendChild(option1);
    let option2 = document.createElement('option');
    option2.value = 'WETH';
    option2.text = 'WETH';
    tokenFrom.appendChild(option2);
    let option3From = document.createElement('option');
    option3From.value = 'USDT';
    option3From.text = 'USDT';
    tokenFrom.appendChild(option3From);

    let chainTo = document.createElement('select');
    let chainOption1To = document.createElement('option');
    chainOption1To.value = 'Eth';
    chainOption1To.text = 'Eth';
    chainTo.appendChild(chainOption1To);
    let chainOption2To = document.createElement('option');
    chainOption2To.value = 'Arb';
    chainOption2To.text = 'Arb';
    chainTo.appendChild(chainOption2To);
    let chainOption3To = document.createElement('option');
    chainOption3To.value = 'Base';
    chainOption3To.text = 'Base';
    chainTo.appendChild(chainOption3To);

    selectContainer.appendChild(tokenFrom);
    selectContainer.appendChild(chainFrom);
    selectContainer.appendChild(chainTo);

    buttonContainer.appendChild(selectContainer);

    let amountFrom = document.createElement('input');
    amountFrom.type = 'text';
    amountFrom.placeholder = 'Enter amount';
    buttonContainer.appendChild(amountFrom);

    let newLineDiv_ = document.createElement('div');
    newLineDiv_.innerHTML = '<br/>';
    buttonContainer.appendChild(newLineDiv_);

    let clickMeButton = document.createElement('button');
    clickMeButton.innerHTML = '🌉 Bridge 🌉';
    clickMeButton.style.fontSize = '15px';
    clickMeButton.style.padding = '5px 10px';
    clickMeButton.style.backgroundColor = 'white';
    clickMeButton.style.color = 'black';
    clickMeButton.style.border = 'none';
    clickMeButton.style.borderRadius = '5px';
    clickMeButton.onclick = async function () {
        await bridge(
            tokenFrom.value,
            chainFrom.value,
            chainTo.value,
            amountFrom.value
        );
    };
    buttonContainer.appendChild(clickMeButton);

    let newLineDiv__ = document.createElement('div');
    newLineDiv__.innerHTML = '<br/>';
    buttonContainer.appendChild(newLineDiv__);

    let newLineDiv = document.createElement('div');
    newLineDiv.innerHTML = '<br/>';
    buttonContainer.appendChild(newLineDiv);
    let newLineDiv1 = document.createElement('div');
    newLineDiv1.innerHTML = '<br/><br/><br/>';
    buttonContainer.appendChild(newLineDiv1);

    let selectContainerFromChain = document.createElement('div');
    selectContainerFromChain.style.display = 'flex';
    selectContainerFromChain.style.flexDirection = 'row';

    let fromChain = document.createElement('select');
    let chainOption1FromChain = document.createElement('option');
    chainOption1FromChain.value = 'Eth';
    chainOption1FromChain.text = 'Eth';
    fromChain.appendChild(chainOption1FromChain);
    let chainOption2FromChain = document.createElement('option');
    chainOption2FromChain.value = 'Arb';
    chainOption2FromChain.text = 'Arb';
    fromChain.appendChild(chainOption2FromChain);
    let chainOption3FromChain = document.createElement('option');
    chainOption3FromChain.value = 'Base';
    chainOption3FromChain.text = 'Base';
    fromChain.appendChild(chainOption3FromChain);
    selectContainerFromChain.appendChild(fromChain);

    let fromToken = document.createElement('select');
    let option1FromToken = document.createElement('option');
    option1FromToken.value = 'USDC';
    option1FromToken.text = 'USDC';
    fromToken.appendChild(option1FromToken);
    let option2FromToken = document.createElement('option');
    option2FromToken.value = 'WETH';
    option2FromToken.text = 'WETH';
    fromToken.appendChild(option2FromToken);
    let option3FromToken = document.createElement('option');
    option3FromToken.value = 'USDT';
    option3FromToken.text = 'USDT';
    fromToken.appendChild(option3FromToken);
    selectContainerFromChain.appendChild(fromToken);

    buttonContainer.appendChild(selectContainerFromChain);

    let amountFromChain = document.createElement('input');
    amountFromChain.type = 'text';
    amountFromChain.placeholder = 'Enter amount';
    buttonContainer.appendChild(amountFromChain);

    let swapButton = document.createElement('button');
    swapButton.innerHTML = '🔄 Swap 🔄';
    swapButton.style.fontSize = '15px';
    swapButton.style.padding = '5px 10px';
    swapButton.style.backgroundColor = 'white';
    swapButton.style.color = 'black';
    swapButton.style.border = 'none';
    swapButton.style.borderRadius = '5px';
    swapButton.onclick = async function () {
        await swap(
            fromChain.value,
            fromToken.value,
            toToken.value,
            amountFromChain.value
        );
    };
    let newLineDiv___ = document.createElement('div');
    newLineDiv___.innerHTML = '<br/>';
    buttonContainer.appendChild(newLineDiv___);
    buttonContainer.appendChild(swapButton);

    let toToken = document.createElement('select');
    let option1ToToken = document.createElement('option');
    option1ToToken.value = 'USDC';
    option1ToToken.text = 'USDC';
    toToken.appendChild(option1ToToken);
    let option2ToToken = document.createElement('option');
    option2ToToken.value = 'WETH';
    option2ToToken.text = 'WETH';
    toToken.appendChild(option2ToToken);
    let option3ToToken = document.createElement('option');
    option3ToToken.value = 'USDT';
    option3ToToken.text = 'USDT';
    toToken.appendChild(option3ToToken);
    selectContainerFromChain.appendChild(toToken);

    tabDiv.appendChild(buttonContainer);
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
                onClick={() =>
                    bridge(
                        tokenFrom.value,
                        chainFrom.value,
                        chainTo.value,
                        amountFrom.value
                    )
                }
            ></button>
            &nbsp;
            <button
                style={{
                    fontSize: '20px',
                    padding: '10px 20px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                }}
                onClick={() =>
                    swap(
                        fromChain.value,
                        fromToken.value,
                        toToken.value,
                        amountFromChain.value
                    )
                }
            ></button>
        </div>
    );
};
