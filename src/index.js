import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
