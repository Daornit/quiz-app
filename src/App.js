import React from 'react';
import StartPage from './containers/StartPage';
import QuezController from './containers/QuezController';
import ParticlesBg from "particles-bg";
import styles from './App.module.scss';
function App() {
  return (
    <div>
      <div className={styles.centered}>
        <StartPage></StartPage>
        <QuezController></QuezController>
      </div>
      <ParticlesBg type="Cobweb" bg={true} color="#0B51D3"/>
    </div>
  );
}

export default App;
