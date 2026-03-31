import { Link } from 'react-router-dom';
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title fade-in-up">
          Blaze <span className="gradient-text">Burn</span>
        </h1>
        <p
          className="hero-subtitle fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Ignite the Flames. Taste the World.
        </p>
        <p
          className="hero-description fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Ahmedabad’s Premium All-Vegetarian, Multi-Zone Food & Dining Destination
        </p>
        <div
          className="hero-buttons fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
          <Link to="/menu" className="btn btn-outline">
            Explore Menu
          </Link>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
