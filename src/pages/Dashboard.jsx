import React from 'react';
import styles from './Dashboard.module.css';
import Board from '../components/Board'; // Assurez-vous d'avoir créé un composant Board

const Dashboard = () => (
  <div className={styles.dashboardPage}>
    <div className={styles.backgroundImage}></div>
    <Board />
  </div>
);

export default Dashboard;
