import Header from "./components/Header";

import "./App.css";
import React, { useState } from 'react';
import HomePage from "./components/HomePage";
import WelcomePage from "./components/WelcomePage";

const App = () => {
  const [welcomeVisible, setWelcomeVisible] = useState(true);

  const handleAnimationEnd = () => {
    setWelcomeVisible(false);
  };
  return (
    <div className="App">
      
      <div className="Header">
        <Header/>
      </div>
      <div className="Home">
        <HomePage/>
      </div>
      

      <div className="footer">
        <footer>
          <p>&copy; 2023 Carlos Monteiro. All rights reserved.</p>
        </footer>
      </div>
    </div>

  );
}

export default App;
//{welcomeVisible && <WelcomePage onAnimationEnd={handleAnimationEnd} />}
//adicionar futuramente e fazer alteraçoes
