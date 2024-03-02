import { ethers } from 'ethers';
import {
    addFlintUILayer,
    getFromCurrency,
    getFromInput,
    setNativeTokenNameAndLogo,
} from './jqueryUITransformer';
import { interceptRequests } from './requestInterceptor';
import {
    setWalletAddress,
    buttonClick,
    handleTokenChange,
} from './flintButtonState';

import axios from 'axios';

import { TabButton } from './tab';

// Create a new div element for the tab
let tabDiv = document.createElement('div');
tabDiv.style.all = 'unset';
tabDiv.style.width = '180px';
tabDiv.style.height = '290px';
tabDiv.style.backgroundColor = '#333';
tabDiv.style.color = 'white';
tabDiv.style.position = 'fixed';
tabDiv.style.top = '50px';
tabDiv.style.left = '0px';
tabDiv.style.zIndex = '1000';
tabDiv.style.padding = '5px';
tabDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
tabDiv.style.cursor = 'move';
// tabDiv.contentEditable = 'true';
tabDiv.style.zIndex = '9999';
tabDiv.style.fontFamily = 'Arial, sans-serif';
tabDiv.style.borderRadius = '10px';
// Drag and Drop functionality
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

tabDiv.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - tabDiv.getBoundingClientRect().left;
    offsetY = e.clientY - tabDiv.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        tabDiv.style.left = e.clientX - offsetX + 'px';
        tabDiv.style.top = e.clientY - offsetY + 'px';
    }
});

document.addEventListener('mouseup', function () {
    isDragging = false;
});

let tabButton = TabButton(tabDiv);
if (tabButton instanceof HTMLElement) {
    tabDiv.appendChild(tabButton());
} else {
    console.error('TabButton did not return a valid HTMLElement');
}

// Append the new div to the body of the document
if (document.body) {
    document.body.appendChild(tabDiv);
} else {
    console.error('Unable to append tabDiv to the body of the document');
}
axios.interceptors.request.use(
    function (config) {
        // check if the URL contains a specific string
        if (config.url.includes('ngrok')) {
            // add default header to the request
            config.headers['ngrok-skip-browser-warning'] = '1';
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

import { setCurrentNetwork } from './store/store';
import { getGasFee } from '../utils/FlintGasless';

let contractGasPrice;

export const getGasPrice = () => {
    return contractGasPrice;
};

export const setResponseJson = (newJson) => {
    responseJson = newJson;
};

let signer = null,
    walletAddress;

const initiateConnectWallet = async () => {
    console.log('ETH', window.ethereum);
    if (window.ethereum === null) {
        // If MetaMask is not installed, we use the default provider,
        // which is backed by a variety of third-party services (such
        // as INFURA). They do not have private keys installed so are
        // only have read-only access
        console.log('MetaMask not installed; using read-only defaults');
        // provider = ethers.getDefaultProvider();
    } else {
        console.log('ch 1');
        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log('ch 2', provider);
        signer = await provider.getSigner();
        console.log('ch 3', signer);
        console.log(signer.address, 'Sginerfer');
        const currentWalletAddress = signer.address;
        walletAddress = currentWalletAddress;
        setWalletAddress(walletAddress);
        console.log(currentWalletAddress, 'wallet address');
        window.ethereum.on('chainChanged', handleChainChange);
        console.log('On chain change');
        handleChainChange(); //first time
    }
};

async function getChainId() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    let network = await provider.getNetwork();
    return parseInt(network.chainId);
}

// Note this function
const handleChainChange = async () => {
    let chainId = await getChainId();
    setCurrentNetwork(chainId);
    setNativeTokenNameAndLogo();
    handleTokenChange(
        getFromCurrency(),
        getFromInput() ? getFromInput().val() : 0
    );
};

const getEth = async () => {
    console.log('called');
    // Initiate wallet connect
    await initiateConnectWallet();
};

const getGasPriceFromContract = async () => {
    contractGasPrice = await getGasFee();
    console.log('CONTRACT GAS PRICE', contractGasPrice);
};

const attachUI = (i) => {
    console.log('INSIDE ATTACH UI');
    if (i <= 100) {
        console.log('THIS IS I - ', i);
        setTimeout(() => {
            const len = addFlintUILayer(buttonClick);
            if (len === 0) {
                attachUI(i + 1);
            } else {
                getEth();
            }
        }, 50);
    }
};

// getEth();
attachUI(0);
interceptRequests();
setTimeout(() => {
    getGasPriceFromContract();
}, 1000);
