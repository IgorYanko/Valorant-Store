import { useCarouselSkins } from "../hooks";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Carousel = () => {
  const { carouselSkins, loading } = useCarouselSkins();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const length = carouselSkins.length;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [length]);

  useEffect(() => {
    if (loading || length === 0 || isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, 3000);

    return () => clearInterval(interval);
  }, [length, loading, isHovering]);

  if (loading) {
    return <div className="carousel">Carregando...</div>;
  }

  if (!length) return null;

  const skin = carouselSkins[currentIndex];

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="carousel-inner">
        <button
          className="carousel-btn"
          onClick={goPrevious}
          aria-label="Anterior"
        >
          <ArrowLeft />
        </button>

        <div className={`carousel-item`} key={skin.uuid}>
          <img src={skin.displayIcon} alt={skin.displayName} />
          <h1>{skin.displayName}</h1>
        </div>

        <button className="carousel-btn" onClick={goNext} aria-label="Próximo">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
