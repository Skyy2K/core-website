import React from 'react'
import { HomePageStyle, MainButton } from '../utils/styles';

import { FaPlusCircle, FaDiscord, FaUserAlt, FaServer } from "react-icons/fa";

import logo from "../icons/logo.png";

export const HomePage = () => {

  function redirectToInvite() {
    window.location.href = "/invite";
  };

  function redirectToSupport() {
    window.location.href = "/support";
  };

  const [botData, setBotData] = React.useState({ users: 0, guilds: 0 });

  const fetchBotData = () => {
    fetch("http://2.223.144.35:3284/api/bot-stats")
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      setBotData(data);
    });
  };
  
  React.useEffect(() => {
    fetchBotData();
  });

  function roundThing(number: number) {
    const numberStr = `${number}`;
    const lengthWithoutFirst = numberStr.length - 1;
    console.log(numberStr)
    return parseInt(numberStr.charAt(0) + "0".repeat(lengthWithoutFirst).toLocaleString()).toLocaleString();
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
            Serving {botData.guilds} servers.
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
        
        <div>
          <h1>Serving...</h1>
          <hr></hr>
          <MainButton style={{ cursor: 'default' }}>
            <FaUserAlt size={45} />
            <p style={{ fontSize: '18px' }}><strong>+{roundThing(botData.users)}</strong> users</p>
          </MainButton>
          <MainButton style={{ cursor: 'default' }}>
            <FaServer size={45} />
            <p style={{ fontSize: '18px' }}><strong>+{roundThing(botData.guilds)}</strong> servers</p>
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