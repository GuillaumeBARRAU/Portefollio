import Navbar from "./components/Navbar"; 
import Carousel from "./components/Carousel"; 
import Footer from "./components/Footer"; 
import "./styles.css"; 
import AnimatedTitle from "./components/AnimatedTitle";
import avatar from "./assets/avatar.png";

import React, { useEffect } from "react";
import { gsap } from "gsap";

function App() {
  useEffect(() => {
    gsap.to(".title", {
      duration: 1.5,
      textShadow: "0 0 20px #00ffcc, 0 0 40px #00ffcc",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="page-container">
      <div className="container">
        <div className="left-column">
          <h1 className="title">Bienvenue sur mon Portfolio</h1>
          <p>Introduction</p>
          <p>Projets</p>
          <p>Compétences</p>
          <p>À propos</p>
          <p>Contact</p>
        </div>

        <div className="center-column">
          <div className="neon-container">
            <div className="neon-box">
              <h1 className="neon-text red">ARTISTE</h1>
              <h1 className="neon-text blue">BANG</h1>
            </div>
            <img src={avatar} alt="Avatar futuriste" className="avatar-image" />
          </div>
        </div>

        {/* Colonne droite : Carrousel dynamique */}
        <div className="right-column">
          <h2>Projets et Actualités</h2>
          <div className="carousel-container">
            <Carousel />
          </div>
        </div>
      </div>

      {/* Effet miroir */}
      <div className="reflection">
        <div className="container">
          <div className="left-column">
            <h1 className="title">Bienvenue sur mon Portfolio</h1>
            <p>Introduction</p>
            <p>Projets</p>
            <p>Compétences</p>
            <p>À propos</p>
            <p>Contact</p>
          </div>

          <div className="center-column">
            <div className="neon-container">
              <div className="neon-box">
                <h1 className="neon-text red">ARTISTE</h1>
                <h1 className="neon-text blue">BANG</h1>
              </div>
              <img src={avatar} alt="Avatar futuriste" className="avatar-image" />
            </div>
          </div>

          <div className="right-column">
            <h2>Projets et Actualités</h2>
            <div className="carousel-container">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
