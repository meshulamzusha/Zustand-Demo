import "./Product.css";
import { useStoreCart } from "../../store/useStoreCart";

const Product = ({ product }) => {
  const addToCart = useStoreCart((state) => state.addToCart);
  const removeFromCart = useStoreCart((state) => state.removeFromCart);
  const cart = useStoreCart((state) => state.cart);
  const inCart = cart.some((p) => p.id === product.id);

  return (
    <section className="product">
      <div className="product-img">{product.image}</div>
      <span className="product-category">{product.category}</span>
      <span className="product-name">{product.name}</span>
      <p className="product-description">{product.description}</p>
      <span className="product-price">${" " + product.price}</span>
      <div className="status">{inCart ? "In cart" : "Not in cart"}</div>
      <button
        className="add-to-cart-btn"
        style={{
          background: inCart ? "#f2ede2" : "#000",
          color: inCart ? "#000" : "#ffff",
        }}
        onClick={() => {
          inCart ? removeFromCart(product.id) : addToCart(product);
        }}
      >
        {inCart ? "Remove from cart" : "Add to cart"}
      </button>
    </section>
  );
};

export default Product;
