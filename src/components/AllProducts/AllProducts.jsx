import "./AllProducts.css";
import Product from "../Product/Product";
import products from "../../data/products.json";

const AllProducts = () => {
  return (
    <div className="products-container">
      {products.map((p) => (
        <Product product={p} />
      ))}
    </div>
  );
};

export default AllProducts;
