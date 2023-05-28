import React from 'react'
import { HomePageStyle, MainButton } from '../utils/styles';

import { FaPlusCircle, FaDiscord } from "react-icons/fa";

import logo from "../icons/logo.png";

const supportURL = "https://discord.gg/4egEWgfGBp";

export function redirectToSupport() {
    window.location.href = supportURL;
};

export const HomePage = () => {
  const inviteURL = "https://discord.com/api/oauth2/authorize?client_id=1110246479668465734&permissions=277025475584&scope=bot%20applications.commands";

  function redirectToInvite() {
    window.location.href = inviteURL;
  };

  return (
    <HomePageStyle>
        <div>
            <div style={{ display: 'flex', width: '100px', justifyContent: 'space-between' }}>
                <img src={logo} height={80} width={80} alt="Core Logo"/>
                <h1>Core</h1>
            </div>
            <p>Create Custom Commands for your server with ease.</p>
        </div>
        <div>
            <MainButton onClick={redirectToInvite}>
                <FaPlusCircle size={45} />
                <p style={{ fontSize: '18px' }}>Invite</p>
            </MainButton>
            <MainButton onClick={redirectToSupport}>
                <FaDiscord size={45} color="#5865F2" />
                <p style={{ fontSize: '18px' }}>Support</p>
            </MainButton>
        </div>
        <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between' }}>
            <a href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms of Service</a>
        </div>
    </HomePageStyle>
  );
};