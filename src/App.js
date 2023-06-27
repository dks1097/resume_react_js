import "./App.css";
import * as React from "react";


function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="navbar">
          <nav className="menu">
            <ul className="menu-list">
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fas fa-home"></i>
                  </span>
                  <span className="text">Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fas fa-puzzle-piece"></i>
                  </span>
                  <span className="text">Skills</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fas fa-folder"></i>
                  </span>
                  <span className="text">Projects</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fas fa-briefcase"></i>
                  </span>
                  <span className="text">Experience</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
    </div>
  );
}

export default App;
