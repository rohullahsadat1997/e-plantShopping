import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart (0)</Link>
        </nav>

        <main className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>
            You have not added any plants to your cart yet.
          </p>

          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="cart-page">
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

      <main className="cart-container">
        <h1>Your Shopping Cart</h1>

        <section className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">
                <h2>{item.name}</h2>

                <p>
                  Unit Price: ${item.price}
                </p>

                <p>
                  Total: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="cart-summary">
          <h2>
            Total Amount: ${totalAmount.toFixed(2)}
          </h2>

          <button
            className="checkout-button"
            onClick={() =>
              alert("Coming Soon")
            }
          >
            Checkout
          </button>

          <Link to="/plants">
            <button className="continue-button">
              Continue Shopping
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default CartItem;