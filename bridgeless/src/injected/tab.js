import React, { useEffect } from 'react';
import { bridge, swap } from './jqueryUITransformer';

export const TabButton = (tabDiv) => {
    let clickMeButton = document.createElement('button');
    clickMeButton.innerHTML = '🌉 Bridge 🌉';

    clickMeButton.style.fontSize = '15px';
    clickMeButton.style.padding = '5px 10px';
    clickMeButton.style.backgroundColor = 'white';
    clickMeButton.style.color = 'black';
    clickMeButton.style.border = 'none';
    clickMeButton.style.borderRadius = '5px';
    clickMeButton.onclick = async function () {
        await bridge();
    };
    tabDiv.appendChild(clickMeButton);

    let swapButton = document.createElement('button');
    swapButton.innerHTML = 'Swap';

    swapButton.style.fontSize = '15px';
    swapButton.style.padding = '5px 10px';
    swapButton.style.backgroundColor = 'white';
    swapButton.style.color = 'black';
    swapButton.style.border = 'none';
    swapButton.style.borderRadius = '5px';
    swapButton.onclick = async function () {
        await swap();
    };
    tabDiv.appendChild(swapButton);

    // const ethereum = window.ethereum;
    // console.log('ethereum', ethereum);

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
                onClick={bridge}
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
                onClick={swap}
            ></button>
        </div>
    );
};
