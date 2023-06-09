import React from 'react'
import { HomePageStyle, MainButton } from '../utils/styles';

import { FaPlusCircle, FaDiscord } from "react-icons/fa";

import logo from "../icons/logo.png";

export const HomePage = () => {

  function redirectToInvite() {
    window.location.href = "/invite";
  };

  function redirectToSupport() {
    window.location.href = "/support";
  };

  return (
    <HomePageStyle>
        <div>
          <div style={{ display: 'flex', width: '100px' }}>
              <img src={logo} height={80} width={80} alt="Core Logo"/>
              <h1>Core</h1>
          </div>
          <p>
            Create Custom Commands for your server with ease.
          </p>
        </div>
        <div style={{ flexDirection: 'row' }}>
        <hr></hr>
            <MainButton onClick={redirectToInvite}>
                <FaPlusCircle size={45} />
                <p style={{ fontSize: '18px' }}>Invite</p>
            </MainButton>
            <MainButton onClick={redirectToSupport}>
                <FaDiscord size={45} color="#5865F2" />
                <p style={{ fontSize: '18px' }}>Support</p>
            </MainButton>
            <hr></hr>
        </div>
        <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between' }}>
            <a href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms of Service</a>
        </div>
    </HomePageStyle>
  );
};