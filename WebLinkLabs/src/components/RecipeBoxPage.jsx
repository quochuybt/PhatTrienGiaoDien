import { useState } from "react";
import SearchNavbar from "./SearchNavbar";
import Footer from "./Footer";
import imgTomato from "../assets/recipe_tomato_salad.png";
import imgSpaghetti from "../assets/recipe_shrimp_spaghetti.png";
import imgLotus from "../assets/recipe_lotus_salad.png";
import imgSnack from "../assets/recipe_snack_cakes.png";
import imgCabbage from "../assets/recipe_cabbage_shrimp.png";
import imgBean from "../assets/recipe_bean_potato.png";
import imgEggs from "../assets/recipe_fried_eggs.png";
import "./RecipeBoxPage.css";

const RECIPES = [
  { id: 1, title: "Italian-style tomato salad",    time: "15 minutes", img: imgTomato },
  { id: 2, title: "Vegetable and shrimp spaghetti", time: "35 minutes", img: imgSpaghetti },
  { id: 3, title: "Lotus delight salad",            time: "30 minutes", img: imgLotus },
  { id: 4, title: "Snack cakes",                    time: "35 minutes", img: imgSnack },
  { id: 5, title: "Salad with cabbage and shrimp",  time: "52 minutes", img: imgCabbage },
  { id: 6, title: "Bean, shrimp, and potato salad", time: "22 minutes", img: imgBean },
  { id: 7, title: "Sunny-side up fried eggs",       time: "32 minutes", img: imgEggs },
  { id: 8, title: "Lotus delight salad",            time: "52 minutes", img: imgLotus },
];

const TABS = ["Saved Recipes", "Folders", "Recipes by Genevieve"];
const PAGES = [1, 2, 3, 4, "...", 10, 11];

function BookmarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 2h8a1 1 0 011 1v10l-5-2.5L3 13V3a1 1 0 011-1z"
        stroke="#F44B87" strokeWidth="1.4" fill="none"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="12" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="12" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="3"  cy="8"  r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M4.5 7.1l6-3M4.5 8.9l6 3" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}

export default function RecipeBoxPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("Saved Recipes");
  const [activePage, setActivePage] = useState(1);
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState({});

  return (
    <div className="rbp">
      <SearchNavbar
        query={query}
        onQueryChange={setQuery}
        onRecipeBoxClick={() => {}}
        activeRecipeBox
      />

      <div className="rbp__inner">
        {/* Breadcrumb */}
        <nav className="rbp__breadcrumb" aria-label="Breadcrumb">
          <a href="#" className="rbp__bc-link" onClick={() => onNavigate?.("search")}>Home</a>
          <span className="rbp__bc-sep">›</span>
          <span className="rbp__bc-current">Your Recipe Box</span>
        </nav>

        {/* Profile header */}
        <div className="rbp__profile">
          {/* Avatar */}
          <div className="rbp__avatar">
            <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
              <circle cx="40" cy="40" r="40" fill="#fddce8"/>
              <circle cx="40" cy="30" r="14" fill="#f44b87"/>
              <ellipse cx="40" cy="66" rx="22" ry="16" fill="#f44b87"/>
            </svg>
          </div>

          {/* Info */}
          <div className="rbp__profile-info">
            <h1 className="rbp__name">Emma Gonzalez's Recipe Box</h1>
            <p className="rbp__bio">
              Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former
              cooking editor at The Los Angeles Times. She is also an accomplished author,
              contributing to numerous cookbooks and food publications. Originally from East
              Los Angeles, Emma now resides in New York City, where she explores a wide range
              of culinary delights.
            </p>
            <div className="rbp__meta">
              <a href="#" className="rbp__subscribers">6.5k Subscribers</a>
              <button className="rbp__share-btn" id="share-recipe-box-btn">
                <ShareIcon /> Share
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="rbp__tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`rbp__tab${activeTab === tab ? " rbp__tab--active" : ""}`}
              onClick={() => setActiveTab(tab)}
              id={`tab-${tab.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Recipe grid */}
        <div className="rbp__grid">
          {RECIPES.map((recipe) => (
            <div key={recipe.id} className="rbp__card" id={`recipe-card-${recipe.id}`}>
              <div className="rbp__card-img-wrap">
                <img
                  src={recipe.img}
                  alt={recipe.title}
                  className="rbp__card-img"
                />
                <button
                  className={`rbp__bookmark${saved[recipe.id] ? " rbp__bookmark--saved" : ""}`}
                  onClick={() => setSaved((p) => ({ ...p, [recipe.id]: !p[recipe.id] }))}
                  aria-label="Bookmark"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 2h8a1 1 0 011 1v10l-5-2.5L3 13V3a1 1 0 011-1z"
                      stroke="#F44B87"
                      strokeWidth="1.4"
                      fill={saved[recipe.id] ? "#F44B87" : "none"}
                    />
                  </svg>
                </button>
              </div>
              <div className="rbp__card-body">
                <h3 className="rbp__card-title">{recipe.title}</h3>
                <p className="rbp__card-time">{recipe.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="rbp__pagination">
          <button className="rbp__page-btn rbp__page-btn--nav" aria-label="Previous page">‹</button>
          {PAGES.map((p, i) => (
            <button
              key={i}
              className={`rbp__page-btn${p === activePage ? " rbp__page-btn--active" : ""}${p === "..." ? " rbp__page-btn--dots" : ""}`}
              onClick={() => typeof p === "number" && setActivePage(p)}
              disabled={p === "..."}
            >
              {p}
            </button>
          ))}
          <button className="rbp__page-btn rbp__page-btn--nav" aria-label="Next page">›</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
