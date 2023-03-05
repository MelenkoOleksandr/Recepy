import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/products";
import { addProduct } from "../../redux/slices/fridge";
import { addProductToFridge } from "../../api";
import "./ProductModal.css";
import { isProductInFridge } from "../../utils/products";

const ProductModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { products: fridge } = useSelector((state) => state.fridge);
  const { products } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleAdd = () => {
    if (selectedProduct && quantity > 0) {
      const product = {
        ...selectedProduct,
        quantity: quantity,
      };
      dispatch(addProduct(product));
      addProductToFridge({
        productId: product._id,
        quantity: product.quantity,
      });
      closeModal();
    }
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className="product-modal">
      <h1 className="modal-title">Select Product</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="search"
      />
      <div className="form-control">
        <label htmlFor="quantity">Quantity(g)</label>
        <input
          type="number"
          placeholder="quantity"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </div>
      <div className="buttons">
        <button className="add-btn" onClick={handleAdd}>
          Add Product
        </button>
        <button className="cancel-btn" onClick={handleClose}>
          Cancel
        </button>
      </div>
      <div className="products">
        {products.filter(product => !isProductInFridge(fridge, product)).map((product) => {
          const selectedClass = selectedProduct?._id === product._id;
          return (
            <div
              className={`product-card ${selectedClass && "selected"}`}
              onClick={() => handleSelect(product)}
            >
              {product.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductModal;
