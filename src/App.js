import "./App.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div className="Profile"></div>
      
      <div className="Header">
      <div className="navbar">
        <nav className="menu">
          <ul className="menu-list">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">EXPERIENCE</a>
            </li>
          </ul>
        </nav>
      </div>
      </div>

      <footer>
        <p>&copy; 2023 Carlos Monteiro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
