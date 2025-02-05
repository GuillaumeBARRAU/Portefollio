import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import data from "./data.json";
import "../styles.css";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Mélange aléatoire des actualités et projets
    const shuffledSlides = [...data].sort(() => Math.random() - 0.5);
    setSlides(shuffledSlides);
  }, []);

  return (
    <div className="carousel-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0px" }}> {/* Ajout de marginTop pour monter le carrousel */}
    <div className="carousel-container" style={{ maxWidth: "300px", height: "400px", margin: "auto", border: "1px solid #00ffff", borderRadius: "10px", boxShadow: "0 0 15px #00ffff", position: "relative", overflow: "hidden" }}> 
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]} 
        spaceBetween={10}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="slide" 
                style={{ 
                  position: "relative", 
                  width: "100%", 
                  height: "100%",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <img 
                  src={require(`../assets/images/${slide.image}`)} 
                  alt={slide.title} 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    maxHeight: "280px",
                    borderRadius: "10px 10px 0 0", 
                    position: "absolute", 
                    top: 0, 
                    left: 0,
                    zIndex: 1
                  }}
                />
                {activeIndex === index && (
                  <div className="overlay" style={{ 
                    position: "absolute", 
                    backgroundColor: "rgba(0, 0, 0, 0.6)", 
                    marginTop: "190px",
                    padding: "10px", 
                    textAlign: "center", 
                    width: "100%", 
                    zIndex: 2,
                    height: "50px"
                  }}>
                    <h2 style={{ color: "#00ffff", margin: "5px 0" }}>{slide.title}</h2>
                    <p style={{ color: "#ffffff", fontSize: "14px" }}>{slide.description}</p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="custom-pagination" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}></div>
    </div>
  );
};

export default Carousel;
