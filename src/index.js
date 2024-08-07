import React from 'react';
import ReactDOM from 'react-dom/client'; // Importez ReactDOM depuis 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Quiz from './pages/Quiz'; // Assurez-vous que le chemin est correct
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import './index.css';

// Utilisez createRoot au lieu de ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz />} /> {/* Utiliser le composant Quiz */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
