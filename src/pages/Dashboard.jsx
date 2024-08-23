// src/pages/Dashboard.jsx
import React from 'react';
import Board from '../components/Board';
import styles from './Dashboard.module.css';

const Dashboard = () => (
  <div className={styles.dashboardPage}>
    <Board />
  </div>
);

export default Dashboard;
