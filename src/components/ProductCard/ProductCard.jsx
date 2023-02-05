import vegetablesIcon from "../../assets/vegetablesIcon.png";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
 
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img className="product-img" src={product.img} alt="" />
        <img className="category-icon" src={vegetablesIcon} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <h5 className="product-quantity">200 g</h5>
      </div>
    </div>
  );
};

export default ProductCard;
