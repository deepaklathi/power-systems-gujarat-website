
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sitemap from "../components/Sitemap";

const SitemapPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Sitemap />
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
