import ProductCard from "../../components/ProductCard/ProductCard";
import "./Fridge.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFridge, removeProduct } from "../../redux/slices/fridge";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import ProductModal from "../../components/ProductModal/ProductModal";
import { deleteProductFromFridge } from "../../api";

const Fridge = () => {
  let filteredProducts = [];
  const [category, setCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.fridge);
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    navigate("/");
  }

  useEffect(() => {
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
    deleteProductFromFridge(id);
    dispatch(removeProduct(id));
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
        <option value="Meat">Meat</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
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
              />
            );
          })}
      </div>
    </div>
  );
};

export default Fridge;
