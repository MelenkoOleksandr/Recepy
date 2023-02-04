// Page with products that user has
import ProductCard from "../../components/ProductCard/ProductCard";
// It must contain the list of products and the quantity
// Possibility to add a product
// Possibility to delete a product
// Possibility to edit a product
// Possibility to view products by categories
import "./Fridge.css"

const Fridge = () => {
  return (
    <div className="fridge">
      <h1 className="fridge-title">Fridge</h1>
      <select name="category" id="category">
        <option value="all">All</option>
        <option value="meat">Meat</option>
        <option value="vegetables">Vegetables</option>
        <option value="fruits">Fruits</option>
        <option value="dairy">Dairy</option>
      </select>
      <button className="add-btn">Add Product</button>
      <div className="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Fridge;
