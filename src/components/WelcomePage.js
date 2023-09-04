import React, { useState, useEffect } from 'react';
import "../styles/WelcomePage.css"

const WelcomePage = ({ onAnimationEnd }) => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Hide the content after 5 seconds
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 3000);

    // Clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showContent) {
      onAnimationEnd(); // Call the parent component's callback
    }
  }, [showContent, onAnimationEnd]);

  return (
    <div className={`welcome-page ${showContent ? 'show-content' : ''}`}>
      <div className="background"></div>
      <div className="content">
        <p>
          Hi,
          {'\n'}
          Welcome to my website
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
