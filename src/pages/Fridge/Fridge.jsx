import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFridge,
  removeProduct,
  updateProductQuantity,
} from "../../redux/slices/fridge";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import ProductModal from "../../components/ProductModal/ProductModal";
import { deleteProductFromFridge } from "../../api";
import "./Fridge.css";
import { getAllProductCategories } from "../../redux/slices/productCategories";


const Fridge = () => {
  let filteredProducts = [];

  const [category, setCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.fridge);
  const { user } = useSelector((state) => state.auth);
  const { productCategories } = useSelector((state) => state.productCategories);

  if (!user) {
    navigate("/");
  }

  useEffect(() => {
    dispatch(getAllProductCategories());
    dispatch(getFridge());
  }, []);

  if (category !== "All") {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  } else {
    filteredProducts = products;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
    deleteProductFromFridge(id);
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateProductQuantity(id, quantity));
  };

  return (
    <div className="fridge">
      {isModalOpen &&
        createPortal(
          <ProductModal closeModal={() => setIsModalOpen(false)} />,
          document.body
        )}
      <h1 className="fridge-title">Fridge</h1>
      <select
        name="category"
        id="category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="All">All</option>
        {productCategories.map((category) => (
          <option key={category._id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button className="add-btn" onClick={handleOpenModal}>
        Add Product
      </button>
      <div className="products">
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => {
            return (
              <ProductCard
                handleRemove={() => handleRemove(product._id)}
                product={product}
                key={product._id}
                updateQuantity={(quantity) =>
                  handleUpdateQuantity(product._id, quantity)
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default Fridge;
