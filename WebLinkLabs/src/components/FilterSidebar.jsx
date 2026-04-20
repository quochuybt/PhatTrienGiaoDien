import { useState } from "react";
import "./FilterSidebar.css";

const TYPES = [
  "Pan-fried", "Stir-fried",
  "Grilled",   "Roasted",
  "Sautéed",   "Baked",
  "Steamed",   "Stewed",
];

function StarIcon({ filled }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.5l1.854 3.756 4.146.602-3 2.924.708 4.127L8 10.75l-3.708 1.96.708-4.127-3-2.924 4.146-.602L8 1.5z"
        fill={filled ? "#F44B87" : "#E0E2E7"}
        stroke={filled ? "#F44B87" : "#E0E2E7"}
        strokeWidth="0.5"
      />
    </svg>
  );
}

function StarRow({ count }) {
  return (
    <div className="fs-stars">
      {[1,2,3,4,5].map((i) => (
        <StarIcon key={i} filled={i <= count} />
      ))}
    </div>
  );
}

export default function FilterSidebar() {
  const [types, setTypes] = useState({ Grilled: true, Roasted: true });
  const [ratings, setRatings] = useState({ 3: true, 2: true, 1: true });
  const [timeRange, setTimeRange] = useState([50, 50]);

  const toggleType = (t) =>
    setTypes((prev) => ({ ...prev, [t]: !prev[t] }));

  const toggleRating = (r) =>
    setRatings((prev) => ({ ...prev, [r]: !prev[r] }));

  return (
    <aside className="fs">
      <div className="fs-header">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M4 8h8M6 12h4" stroke="#171A1F" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="fs-header__text">FILTERS</span>
      </div>

      {/* TYPE */}
      <div className="fs-section">
        <div className="fs-section__head">
          <span className="fs-section__title">Type</span>
          <button className="fs-section__toggle" aria-label="Collapse type">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10 9L7 6l-3 3" stroke="#565D6D" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="fs-types">
          {TYPES.map((t) => (
            <label key={t} className="fs-checkbox">
              <input
                type="checkbox"
                checked={!!types[t]}
                onChange={() => toggleType(t)}
              />
              <span className="fs-checkbox__box" />
              <span className="fs-checkbox__label">{t}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="fs-divider" />

      {/* TIME */}
      <div className="fs-section">
        <div className="fs-section__head">
          <span className="fs-section__title">Time</span>
          <button className="fs-section__toggle" aria-label="Collapse time">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10 9L7 6l-3 3" stroke="#565D6D" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="fs-time">
          <div className="fs-time__labels">
            <span>{timeRange[0]} minutes</span>
            <span>{timeRange[1]} minutes</span>
          </div>
          <div className="fs-range-wrap">
            <div className="fs-range-track">
              <div className="fs-range-fill" />
            </div>
            <input
              type="range" min="0" max="120"
              value={timeRange[0]}
              onChange={(e) => setTimeRange([+e.target.value, timeRange[1]])}
              className="fs-range"
              id="time-range-min"
            />
            <input
              type="range" min="0" max="120"
              value={timeRange[1]}
              onChange={(e) => setTimeRange([timeRange[0], +e.target.value])}
              className="fs-range"
              id="time-range-max"
            />
          </div>
        </div>
      </div>

      <div className="fs-divider" />

      {/* RATING */}
      <div className="fs-section">
        <div className="fs-section__head">
          <span className="fs-section__title">Rating</span>
          <button className="fs-section__toggle" aria-label="Collapse rating">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10 9L7 6l-3 3" stroke="#565D6D" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="fs-ratings">
          {[5,4,3,2,1].map((r) => (
            <label key={r} className="fs-checkbox">
              <input
                type="checkbox"
                checked={!!ratings[r]}
                onChange={() => toggleRating(r)}
              />
              <span className="fs-checkbox__box" />
              <StarRow count={r} />
            </label>
          ))}
        </div>
      </div>

      <div className="fs-divider" />

      {/* APPLY */}
      <button className="fs-apply" id="filter-apply-btn">Apply</button>
    </aside>
  );
}
