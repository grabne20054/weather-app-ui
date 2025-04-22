"use client";
import { Minus } from "lucide-react";
interface CarouselProps {
  cards: React.ReactElement[];
}

export function Carousel({ cards }: CarouselProps) {
  return (
    <div
      className="carousel slide"
      id="carouselWeatherCards"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {cards.map((_, index) => (
          <button
            type="button"
            data-bs-target="#carouselWeatherCards"
            data-bs-slide-to={index}
            className={`${index === 0 ? "active" : ""} bg-black`}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
            key={index}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {cards.map((card, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
            data-bs-interval="5000"
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}
