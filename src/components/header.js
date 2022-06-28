import * as React from 'react';
import Wallet from './wallet';
import '../styles/Header.css';
import logo from '../assets/imgs/logo.svg';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

export default function Header() {
    return (
        <div className="css-m7wkyr">
            <div className="css-1kj7ifn">
                <div className="css-1j66gwz">
                    <div className="chakra-stack css-1i0wgq1">
                        <div className="chakra-stack css-oft45e">
                            <a href="/">
                                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
                                    <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained">
                                        <img src={logo} className="logo"></img>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="chakra-stack css-n4g6ml">
                        <a className="chakra-link css-r7163r" href="/app/staking" aria-current="page" style={{ display: 'inline-block', opacity: 1, borderBottom: '3px solid' }}>Stake</a>
                    </div>
                    <div className="chakra-stack css-1u6kme8">
                        <WalletModalProvider>
                            <WalletMultiButton />
                        </WalletModalProvider>
                    </div>
                    <div className="chakra-stack css-1buqvcx"></div>
                </div>
            </div>
        </div>
    );
}