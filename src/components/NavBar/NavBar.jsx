import { useStoreCart } from "../../store/useStoreCart";
import { useNavigate } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  const cart = useStoreCart((state) => state.cart);
  let navigate = useNavigate();

  return (
    <nav className="nav-container">
      <button
        className="shop-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        shop
      </button>
      <button
        className="cart-btn"
        onClick={() => {
          navigate("/cart");
        }}
      >
        cart <div className="cart-count">{cart.length}</div>
      </button>
    </nav>
  );
};

export default NavBar;
