import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* About Us */}
        <div className="footer__col footer__col--about">
          <h4 className="footer__heading">About Us</h4>
          <p className="footer__about-text">
            Welcome to our website, a wonderful place to explore and learn how to
            cook like a pro.
          </p>
          <form className="footer__subscribe" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__email-input"
              id="footer-email"
            />
            <button type="submit" className="footer__send-btn">Send</button>
          </form>
        </div>

        {/* Learn More */}
        <div className="footer__col">
          <h4 className="footer__heading">Learn More</h4>
          <ul className="footer__links">
            {["Our Cooks", "See Our Features", "FAQ"].map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>

          <h4 className="footer__heading footer__heading--mt">Shop</h4>
          <ul className="footer__links">
            {["Gift Subscription", "Send Us Feedback"].map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Recipes */}
        <div className="footer__col">
          <h4 className="footer__heading">Recipes</h4>
          <ul className="footer__links">
            {[
              "What to Cook This Week",
              "Pasta",
              "Dinner",
              "Healthy",
              "Vegetarian",
              "Vegan",
              "Christmas",
            ].map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-logo">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
            <path d="M14 3C8.48 3 4 7.48 4 13c0 3.54 1.84 6.65 4.6 8.47V23a1 1 0 001 1h8.8a1 1 0 001-1v-1.53A10 10 0 0024 13c0-5.52-4.48-10-10-10z" fill="#F44B87"/>
            <circle cx="11" cy="11" r="2" fill="#fff"/>
            <circle cx="17" cy="11" r="2" fill="#fff"/>
            <path d="M10 15.5s1 2 4 2 4-2 4-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="footer__bottom-brand">Chefify</span>
        </div>
        <span className="footer__copy">2023 Chefify Company</span>
        <div className="footer__legal">
          <a href="#" className="footer__legal-link">Terms of Service</a>
          <span className="footer__legal-sep">|</span>
          <a href="#" className="footer__legal-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
