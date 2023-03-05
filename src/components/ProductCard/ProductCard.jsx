import { useState } from "react";
import { updateProductQuantity } from "../../api";
import "./ProductCard.css";

const ProductCard = ({ product, handleRemove }) => {
  const [isChanging, setIsChanging] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (e) => {
    if (e.target.value > 0) {
      setQuantity(e.target.value);
    }
  };

  const handleEdit = () => {
    setIsChanging(false);
    updateProductQuantity(product._id, quantity);
  };
  
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img className="product-img" src={product.img} alt="" />
        <button className="remove-btn" onClick={handleRemove}>
          X
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {isChanging ? (
          <input
            className="product-quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            onBlur={handleEdit}
          />
        ) : (
          <h5
            className="product-quantity"
            onDoubleClick={() => setIsChanging(true)}
          >
            {quantity} g
          </h5>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
