import React from 'react';
import MobileHeader from './components/MobileHeader'; 
import MobileMain from './components/MobileMain';
import './styles/globalMobile.css'; 

const App = () => {
  return (
    <div className="App">
      <MobileHeader />
      <MobileMain />
      <footer></footer>
    </div>
  );
};

export default App;
