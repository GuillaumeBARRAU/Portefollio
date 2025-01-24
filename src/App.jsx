
import Navbar from "./components/Navbar"; // Assurez-vous d'avoir ce composant
import Carousel from "./components/Carousel"; // Idem pour celui-ci
import Footer from "./components/Footer"; // Et celui-ci
import "./styles.css"; // Import des styles globaux
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
    <div className="container">
      {/* Colonne gauche : Menu */}
      <div className="left-column">
        <h1 className="title">Bienvenue sur mon Portfolio</h1>
        <p>Introduction</p>
        <p>Projets</p>
        <p>Compétences</p>
        <p>À propos</p>
        <p>Contact</p>
      </div>

      {/* Colonne centrale : Avatar */}
      <div className="center-column">
      <div className="neon-container">
      <div className="neon-box">
      <h1 className="neon-text red">ARTISTE</h1>
      <h1 className="neon-text blue">BANG</h1>
      </div>
                <img src={avatar} alt="Avatar futuriste" className="avatar-image" />
      </div>
    </div>

      {/* Colonne droite : Carrousel */}
      <div className="right-column">
        <h2>Projets et Actualités</h2>
        <div className="carousel-container">
          <div className="card">Projet 1</div>
          <div className="card">Projet 2</div>
          <div className="card">Projet 3</div>
        </div>
      </div>
    {/* Reflet */}
    <div className="reflection">
          {/* Reflet du menu */}
          <div className="left-column">
            <h1 className="title">Bienvenue sur mon Portfolio</h1>
            <p>Introduction</p>
            <p>Projets</p>
            <p>Compétences</p>
            <p>À propos</p>
            <p>Contact</p>
          </div>

          {/* Reflet de l'Avatar et du Texte */}
          <div className="center-column">
            <div className="neon-container">
              <div className="neon-box">
                <h1 className="neon-text red">ARTISTE</h1>
                <h1 className="neon-text blue">BANG</h1>
              </div>
              <img src={avatar} alt="Avatar futuriste" className="avatar-image" />
            </div>
          </div>

          {/* Reflet du carrousel */}
          <div className="right-column">
            <h2>Projets et Actualités</h2>
            <div className="carousel-container">
              <div className="card">Projet 1</div>
              <div className="card">Projet 2</div>
              <div className="card">Projet 3</div>
            </div>
          </div>
        </div>
      </div>


    
  );
}

export default App;