import { useState } from "react";
import WelcomeModal from "./components/WelcomeModal";
import LoginModal from "./components/LoginModal";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchPage from "./components/SearchPage";
import "./App.css";

// Simple page-based routing — no React Router needed
// pages: 'home' | 'search'

export default function App() {
  const [page, setPage] = useState("home");
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginOpen = () => {
    setShowWelcome(false);
    setShowLogin(true);
  };

  const handleContinue = () => {
    setShowLogin(false);
    setPage("search");
  };

  // ── Search / Results page ──
  if (page === "search") {
    return <SearchPage />;
  }

  // ── Home page ──
  return (
    <div className="app">
      <Navbar onLoginClick={handleLoginOpen} />
      <main>
        <HeroSection />
      </main>

      {showWelcome && (
        <WelcomeModal onClose={() => setShowWelcome(false)} />
      )}

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
