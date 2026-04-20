import heroBg from "../assets/hero_bg.png";
import saladImg from "../assets/salad_card.png";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Dark gradient overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content">
        {/* Floating recipe card */}
        <div className="hero__card">
          <span className="hero__card-badge">Recipes</span>
          <img
            src={saladImg}
            alt="Classic Italian Salad Caprese"
            className="hero__card-img"
          />
          <div className="hero__card-body">
            <h3 className="hero__card-title">Salad Caprese</h3>
            <p className="hero__card-desc">
              Classic Italian Salad Caprese with fresh mozzarella, herbs, olive
              oil to create a refreshing dish.
            </p>
            <button className="hero__card-btn">View recipe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
