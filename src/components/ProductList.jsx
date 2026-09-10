import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { Link } from "react-router-dom";
import products from "./products";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="products-page">
      <nav className="navbar">
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/cart">
          Cart (
          {cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          )}
          )
        </Link>
      </nav>

      <header className="products-header">
        <h1>Paradise Nursery Plants</h1>

        <p>
          Explore our collection of beautiful and healthy
          houseplants.
        </p>
      </header>

      <main className="products-container">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          return (
            <section
              className="product-category"
              key={category}
            >
              <h2>{category}</h2>

              <div className="products-grid">
                {categoryProducts.map((product) => (
                  <article
                    className="product-card"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <h3>{product.name}</h3>

                    <p>${product.price}</p>

                    <button
                      onClick={() =>
                        dispatch(addToCart(product))
                      }
                      disabled={isInCart(product.id)}
                    >
                      {isInCart(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;