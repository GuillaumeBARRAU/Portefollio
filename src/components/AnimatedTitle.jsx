import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles.css"; // Import global pour les styles si nécessaire

function AnimatedTitle() {
  useEffect(() => {
    console.log("GSAP animation applied!");
    gsap.to(".title", {
      duration: 1.5,
      textShadow: "0 0 20px #00ffcc, 0 0 40px #00ffcc",
      repeat: -1,
      yoyo: true,
    });
  }, []);
  ; // Tableau vide pour exécuter l'effet uniquement au montage

  return (
    <h1 className="title">Bienvenue sur mon Portfolio</h1>
  );
}

export default AnimatedTitle;
