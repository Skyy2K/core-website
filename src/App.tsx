import React from 'react';

import { Routes, Route } from "react-router-dom";

import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicesPage } from './pages/TermsOfServicesPage';
import { Page } from './utils/styles';

const inviteURL = "https://discord.com/api/oauth2/authorize?client_id=1110246479668465734&permissions=277025737728&scope=bot%20applications.commands";
const supportURL = "https://discord.gg/4egEWgfGBp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> }></Route>

      <Route path="/privacy" element={ <PrivacyPolicyPage /> }></Route>
      <Route path="/terms" element={ <TermsOfServicesPage /> }></Route>

      <Route path="/invite" element={ <Redirect url={inviteURL} /> }></Route>
      <Route path="/support" element={ <Redirect url={supportURL} /> }></Route>
    </Routes>
  );
};

export const Redirect = ({ url = "" }) => {
  React.useEffect(() => {
    window.location.href = url;
  }, [url]);

  return (
    <Page>
      <h1>You are being redirected...</h1>
      <p>You should take a screenshot of this before it disappears!</p>
    </Page>
  );
};

export default App;