import "./SearchNavbar.css";

export default function SearchNavbar({ query, onQueryChange, onRecipeBoxClick, activeRecipeBox }) {
  return (
    <nav className="snav">
      {/* Logo */}
      <a href="#" className="snav__logo">
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
          <path d="M14 3C8.48 3 4 7.48 4 13c0 3.54 1.84 6.65 4.6 8.47V23a1 1 0 001 1h8.8a1 1 0 001-1v-1.53A10 10 0 0024 13c0-5.52-4.48-10-10-10z" fill="#F44B87"/>
          <circle cx="11" cy="11" r="2" fill="#fff"/>
          <circle cx="17" cy="11" r="2" fill="#fff"/>
          <path d="M10 15.5s1 2 4 2 4-2 4-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="snav__logo-text">Chefify</span>
      </a>

      {/* Search bar */}
      <div className="snav__search">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5" stroke="#9095A0" strokeWidth="1.5"/>
          <path d="M11 11l3 3" stroke="#9095A0" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <input
          type="text"
          className="snav__search-input"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search recipes..."
          id="search-input-nav"
        />
      </div>

      {/* Nav links */}
      <ul className="snav__links">
        {["What to cook", "Recipes", "Ingredients", "Occasions", "About Us"].map((l) => (
          <li key={l}><a href="#" className="snav__link">{l}</a></li>
        ))}
      </ul>

      {/* Actions — logged-in state */}
      <div className="snav__actions">
        <button
          className={`snav__recipe-box${activeRecipeBox ? " snav__recipe-box--active" : ""}`}
          id="your-recipe-box-btn"
          onClick={onRecipeBoxClick}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#F44B87" strokeWidth="1.4"/>
            <path d="M5 3V2a2 2 0 014 0v1" stroke="#F44B87" strokeWidth="1.4"/>
            <path d="M8 7v3M6.5 8.5h3" stroke="#F44B87" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          Your Recipe Box
        </button>
        {/* Avatar */}
        <div className="snav__avatar" id="user-avatar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="7" r="3.5" fill="#fff"/>
            <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </nav>
  );
}
