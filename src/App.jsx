import React from "react";
import Navbar from "./components/Navbar"; // Assurez-vous d'avoir ce composant
import Carousel from "./components/Carousel"; // Idem pour celui-ci
import Footer from "./components/Footer"; // Et celui-ci
import "./styles.css"; // Import des styles globaux
import AnimatedTitle from "./components/AnimatedTitle";

function App() {
  return (
    <div>
      <Navbar />
      <header>
        {/* Titre principal avec l'animation */}
        <AnimatedTitle />
      </header>
      <main className="main-content">
        <Carousel />
        <section id="introduction">
          <h2>Introduction</h2>
          <p>Bienvenue sur mon portfolio futuriste !</p>
        </section>
        <section id="projects">
          <h2>Projets</h2>
          <p>Voici une sélection de mes projets les plus intéressants.</p>
        </section>
        <section id="skills">
          <h2>Compétences</h2>
          <p>Voici les technologies et outils que je maîtrise.</p>
        </section>
        <section id="about">
          <h2>À propos</h2>
          <p>Quelques mots sur mon parcours et mes passions.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Vous pouvez me joindre via ce formulaire ou mes réseaux sociaux.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;