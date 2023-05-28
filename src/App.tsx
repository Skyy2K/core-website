import React from 'react';

import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicesPage } from './pages/TermsOfServicesPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> }></Route>

      <Route path="/privacy" element={ <PrivacyPolicyPage /> }></Route>
      <Route path="/terms" element={ <TermsOfServicesPage /> }></Route>
    </Routes>
  );
};

export default App;