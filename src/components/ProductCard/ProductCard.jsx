import vegetablesIcon from "../../assets/vegetablesIcon.png";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img
          className="product-img"
          src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          alt=""
        />
        <img className="category-icon" src={vegetablesIcon} />
      </div>

      <div className="product-info">
        <h3 className="product-name">Tomatoes</h3>
        <h5 className="product-quantity">200 g</h5>
      </div>
    </div>
  );
};

export default ProductCard;
