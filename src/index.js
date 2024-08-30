// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import MentionsLegales from './pages/MentionsLegales'; // Importez le composant

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz />} /> 
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="support" element={<Support />} />
          <Route path="mentions-legales" element={<MentionsLegales />} /> {/* Ajoutez la route */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
