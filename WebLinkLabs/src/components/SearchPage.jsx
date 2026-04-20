import { useState } from "react";
import SearchNavbar from "./SearchNavbar";
import FilterSidebar from "./FilterSidebar";
import EmptyState from "./EmptyState";
import Footer from "./Footer";
import "./SearchPage.css";

export default function SearchPage() {
  const [query, setQuery] = useState("cakescascsa");

  return (
    <div className="sp">
      <SearchNavbar query={query} onQueryChange={setQuery} />

      <div className="sp__body">
        {/* Sidebar */}
        <FilterSidebar />

        {/* Main content */}
        <main className="sp__main">
          <EmptyState query={query} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
