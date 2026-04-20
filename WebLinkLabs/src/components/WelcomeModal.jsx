import { useState } from "react";
import foodHero from "../assets/chefify_food_hero.png";
import "./WelcomeModal.css";

const SLIDES = [
  {
    title: "Discover Chefify",
    subtitle:
      "Easy and delicious cooking instructions right here. Start exploring now!",
    image: foodHero,
  },
  {
    title: "Cook Like a Pro",
    subtitle:
      "Step-by-step recipes crafted by top chefs. Your kitchen, your rules.",
    image: foodHero,
  },
  {
    title: "Find Ingredients",
    subtitle:
      "Browse hundreds of ingredients and discover amazing combinations.",
    image: foodHero,
  },
];

export default function WelcomeModal({ onClose }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < SLIDES.length - 1) {
      setCurrent((p) => p + 1);
    } else {
      onClose?.();
    }
  };

  const handleSkip = () => {
    onClose?.();
  };

  const slide = SLIDES[current];

  return (
    <div className="wm-overlay" onClick={handleSkip}>
      <div
        className="wm-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="wm-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Heading */}
        <h1 className="wm-title">{slide.title}</h1>

        {/* Subtitle */}
        <p className="wm-subtitle">{slide.subtitle}</p>

        {/* Hero image */}
        <img
          src={slide.image}
          alt="Chefify hero"
          className="wm-image"
        />

        {/* Dot indicators */}
        <div className="wm-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`wm-dot${i === current ? " wm-dot--active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button className="wm-btn-next" onClick={handleNext}>
          {current < SLIDES.length - 1 ? "Next" : "Get Started"}
        </button>

        {/* Skip button */}
        <button className="wm-btn-skip" onClick={handleSkip}>
          Skip
        </button>
      </div>
    </div>
  );
}
