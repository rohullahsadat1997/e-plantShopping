import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import CartItem from "./components/CartItem";

function Home() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <main className="app">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO</p>

          <h1>Paradise Nursery</h1>

          <p className="hero-description">
            Bringing nature closer to your home.
          </p>

          <p className="hero-text">
            Discover beautiful and healthy houseplants to create
            a greener, happier space.
          </p>

          <button
            className="get-started"
            onClick={() => setShowProducts(true)}
          >
            Get Started
          </button>
        </div>
      </section>

      {showProducts && <ProductList />}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;