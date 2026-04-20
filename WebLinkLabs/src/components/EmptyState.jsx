import "./EmptyState.css";

const SUGGESTIONS = ["Sweet Cake", "Black Cake", "Pozole Verde", "Healthy food"];

export default function EmptyState({ query }) {
  return (
    <div className="es">
      {/* Heading */}
      <h2 className="es__heading">
        Sorry, no results were found for{" "}
        <span className="es__query">"{query}"</span>
      </h2>

      {/* Illustration */}
      <div className="es__illustration" aria-hidden="true">
        {/* Box */}
        <svg width="220" height="160" viewBox="0 0 220 160" fill="none">
          {/* Box body */}
          <rect x="55" y="80" width="110" height="70" rx="6" fill="#FDDCE8"/>
          {/* Box flap left */}
          <path d="M55 80 L110 100 L110 80 Z" fill="#F9A8C9"/>
          {/* Box flap right */}
          <path d="M165 80 L110 100 L110 80 Z" fill="#F9A8C9"/>
          {/* Box bottom lines */}
          <line x1="75" y1="130" x2="75" y2="150" stroke="#F44B87" strokeWidth="1.5"/>
          <line x1="145" y1="130" x2="145" y2="150" stroke="#F44B87" strokeWidth="1.5"/>

          {/* Magnifying glass circle */}
          <circle cx="120" cy="55" r="38" fill="#FDDCE8" stroke="#F44B87" strokeWidth="3"/>
          <circle cx="120" cy="55" r="26" fill="#fff" stroke="#F44B87" strokeWidth="2.5"/>

          {/* X inside magnifier */}
          <path d="M110 45 L130 65 M130 45 L110 65"
            stroke="#F44B87" strokeWidth="3.5" strokeLinecap="round"/>

          {/* Handle */}
          <line x1="142" y1="77" x2="162" y2="97"
            stroke="#F44B87" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Sub-text */}
      <p className="es__subtext">
        We have all your Independence Day sweets covered.
      </p>

      {/* Suggestion pills */}
      <div className="es__suggestions">
        {SUGGESTIONS.map((s) => (
          <button key={s} className="es__pill">{s}</button>
        ))}
      </div>
    </div>
  );
}
