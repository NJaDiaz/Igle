import { useEffect, useState } from "react";

export default function Animation() {
  const [gsap, setGsap] = useState(null);

  useEffect(() => {
    import("gsap").then((module) => {
      setGsap(module.default);
    });
  }, []);

  useEffect(() => {
    if (gsap) {
      import("gsap/ScrollTrigger").then((module) => {
        gsap.registerPlugin(module.default);

        // Animación para el h2
        gsap.from(".hero-content h2", {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Animación para el h1
        gsap.from(".hero-content h1", {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Animación para el párrafo
        gsap.from(".hero-content p", {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Animación para los enlaces de redes sociales
        gsap.from(".redes-sociales a", {
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".redes-sociales",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }
  }, [gsap]);

  return null;
}
