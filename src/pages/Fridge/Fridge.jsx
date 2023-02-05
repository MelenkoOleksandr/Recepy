import ProductCard from "../../components/ProductCard/ProductCard";
import "./Fridge.css";
import { useEffect, useState } from "react";

const Fridge = () => {
  let filteredProducts = [];
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:8080/products");
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  if (category !== "All") {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  } else {
    filteredProducts = products;
  }

  return (
    <div className="fridge">
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
      <button className="add-btn">Add Product</button>
      <div className="products">
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default Fridge;
