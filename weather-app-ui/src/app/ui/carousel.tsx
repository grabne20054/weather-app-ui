'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface CarouselProps {
    cards: React.ReactElement[];
}

export function Carousel({ cards }: CarouselProps) {

  return (
    <div className="carousel slide" id="carouselWeatherCards">
        <div className="carousel-inner">
            {cards.map((card, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                {card}
            </div>
            ))}
        </div>
        <button
        className="carousel-control-prev d-flex align-items-center justify-content-center"
        type="button"
        data-bs-target="#carouselWeatherCards"
        data-bs-slide="prev"
      >
        <ChevronLeft size={32} color="black" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next d-flex align-items-center justify-content-center"
        type="button"
        data-bs-target="#carouselWeatherCards"
        data-bs-slide="next"
      >
        <ChevronRight size={32} color="black" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}