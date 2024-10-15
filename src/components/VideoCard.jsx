import React, { useEffect } from "react";
import Swiper from "swiper";
import 'swiper/css'; // Estilos básicos
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

const VideoSlider = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 3, 
      spaceBetween: 20, 
      navigation: true, 
      loop: true, 
      breakpoints: {
        1024: {
          slidesPerView: 3, // Pantallas grandes, 3 por fila
        },
        768: {
          slidesPerView: 2, // Pantallas medianas, 2 por fila
        },
        480: {
          slidesPerView: 1, // Pantallas pequeñas, 1 por fila
        },
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* Primer video */}
        <div className="swiper-slide video-card">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/pGL1aeRBbvI?si=7CvJvUo_8mkK1ZN_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 className="text-lg font-semibold">Domingo 1 octubre</h3>
        </div>

        {/* Segundo video */}
        <div className="swiper-slide video-card">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/pGL1aeRBbvI?si=7CvJvUo_8mkK1ZN_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 className="text-lg font-semibold">Domingo 13 octubre</h3>
        </div>

        {/* Tercer video */}
        <div className="swiper-slide video-card">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/pGL1aeRBbvI?si=7CvJvUo_8mkK1ZN_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 className="text-lg font-semibold">Domingo 13 octubre</h3>
        </div>

        {/* Cuarto video */}
        <div className="swiper-slide video-card">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/pGL1aeRBbvI?si=7CvJvUo_8mkK1ZN_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 className="text-lg font-semibold">Domingo 13 octubre</h3>
        </div>

        {/* Más videos... */}
      </div>

      {/* Botones de navegación */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default VideoSlider;
