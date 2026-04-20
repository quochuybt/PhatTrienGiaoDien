import "./Navbar.css";

const NAV_LINKS = ["What to cook", "Recipes", "Ingredients", "Occasions", "About Us"];

export default function Navbar({ onLoginClick }) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#" className="navbar__logo">
        <span className="navbar__logo-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 3C8.48 3 4 7.48 4 13c0 3.54 1.84 6.65 4.6 8.47V23a1 1 0 001 1h8.8a1 1 0 001-1v-1.53A10 10 0 0024 13c0-5.52-4.48-10-10-10z" fill="#F44B87"/>
            <circle cx="11" cy="11" r="2" fill="#fff"/>
            <circle cx="17" cy="11" r="2" fill="#fff"/>
            <path d="M10 15.5s1 2 4 2 4-2 4-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
        <span className="navbar__logo-text">Chefify</span>
      </a>

      {/* Search bar */}
      <div className="navbar__search">
        <svg className="navbar__search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5" stroke="#9095A0" strokeWidth="1.5"/>
          <path d="M11 11l3 3" stroke="#9095A0" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <input
          type="text"
          className="navbar__search-input"
          placeholder="What will you like to cook?"
        />
      </div>

      {/* Nav links */}
      <ul className="navbar__links">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href="#" className="navbar__link">{link}</a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="navbar__actions">
        <button
          className="navbar__btn-login"
          onClick={onLoginClick}
          id="navbar-login-btn"
        >
          Login
        </button>
        <a href="#" className="navbar__btn-subscribe">Subscribe</a>
      </div>
    </nav>
  );
}
