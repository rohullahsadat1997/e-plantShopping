import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import CartItem from "./components/CartItem";

function Home() {
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

          <Link to="/plants">
            <button className="get-started">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;