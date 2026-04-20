import { useState } from "react";
import WelcomeModal from "./components/WelcomeModal";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="app">
      {/* Background page — always rendered */}
      <Navbar />
      <main>
        <HeroSection />
      </main>

      {/* Welcome modal overlays on top */}
      {showModal && (
        <WelcomeModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
