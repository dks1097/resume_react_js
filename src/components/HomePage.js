import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import avatarImage from "../img/AvatarPIC-removebg-preview.png";

const HomePage = () => {
  const gmailAddress = "carlos.d.t.m19@gmail.com";
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollPosition === 0 && isScrolled) {
      setIsScrolled(false);
    }
  }, [scrollPosition, isScrolled]);

  return (
    <div className={`HomePage ${isScrolled ? "scrolled" : ""}`}>
      <div className="LeftSideScreen">
        <div className="Name">
          <img
            className={`image ${isScrolled ? "avatar" : "hidden"}`}
            src={avatarImage}
            alt="Your Image"
          />
          <h3 className="FirstName">Carlos</h3>
          <h1 className="SecondName">Monteiro</h1>
          <h3 className="JobRole">Software Developer</h3>
        </div>
        <div className="ShowButtons">
          <button className="Resume">Resume</button>
          <button
            className={`Portefolio ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnhover}
          >
            Portefolio
          </button>
        </div>
        <div className="SocialButtons">
          <button className="social-link">
            <a href={`mailto:${gmailAddress}`}>
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </button>
          <button className={`social-link ${isScrolled ? "scrolled" : ""}`}>
            <a
              href="https://www.linkedin.com/in/carlos-monteiro-77b315222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
          </button>
          <button className="social-link">
            <a
              href="https://github.com/dks1097"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </button>
        </div>
      </div>
      <div className="INFO">
        <div className="Description">
          <p>
            Lorem ipsum dolor sit amet, sit ea laudem aperiri abhorreant, at
            nullam quodsi duo. Id vim nostrum intellegam. Eius magna legimus ad
            ius, nec labitur admodum intellegat ut. Ea unum convenire cum,
            doming dicunt nominati ea sea. Cu has quaeque accusamus, an eum
            prompta adipisci reprimique. Noluisse pericula cu usu, in amet
            copiosae quo. Movet putant eripuit per et, ne nam possit mentitum
            persecuti. Adhuc deterruisset ut est. Usu ex solum dicunt
            intellegebat, has in solum ullum. Mea in vocent prompta oporteat.
            Nec primis iisque vivendo te, dicam qualisque ex mea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
