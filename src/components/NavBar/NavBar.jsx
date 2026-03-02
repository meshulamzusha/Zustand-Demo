import { useStoreCart } from "../../store/useStoreCart";
import "./NavBar.css";

const NavBar = () => {
  const cart = useStoreCart((state) => state.cart);

  return (
    <nav className="nav-container">
      <button className="shop-btn">shop</button>
      <button className="cart-btn">
        cart <div className="cart-count">{cart.length}</div>
      </button>
    </nav>
  );
};

export default NavBar;
