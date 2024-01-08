import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from "./Home";
import Services from './Services';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/bizcom" element={<App />} />
        <Route path="/bizcom" element={<Home />} />
        <Route path="/bizcom/about" element={<About />} />
        <Route path="/bizcom/services" element={<Services />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


