import React from 'react';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';
import WhoContent from './components/WhoContent';
import WhoEnd from './components/WhoEnd';
import SkillsContent from './components/SkillsContent';
import Footer from './components/Footer';
import MainIsland from './components/MainIsland';
import MainOrder from './components/MainOrder';
import MainOurWorks from './components/MainOurWorks';
import './styles/global.css';

const App = () => {
  return (
    <div className="App">
      <MainIsland />
      <main id="main">
        <MainHeader />
        <div className="container">
          <div className="black-box"></div>
          <MainContent />
        </div>
      </main>

      <canvas id="who-canvas"></canvas>
      <div id="who">
        <div className="container" id="who-content">
          <WhoContent />
        </div>
        <div id="who-end">
          <WhoEnd />
        </div>
        <div id="skills">
          <SkillsContent />
        </div>
        <div id="our-works">
          <MainOurWorks />
        </div>
        <div id="order">
          <div id="three-container">
            <div className="black-box2"></div>
          </div>
          <MainOrder />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
