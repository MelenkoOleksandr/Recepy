// Sort by the complexity of recipes
// Filter by the selected ingredients
// Filter by the time to prepare
// If user is logged in, filter by the products in the fridge
import { AiOutlineSearch } from "react-icons/ai";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="recipy-filters">
      <div className="search">
        <input
          type="text"
          placeholder="Enter your recipy name, ingredients, etc..."
        />
        <AiOutlineSearch />
      </div>
      <div className="category-wrapper">
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="all">All</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
          <option value="snack">Snack</option>
        </select>
      </div>
      <div className="filters">
        <div className="filter">
          <label htmlFor="complexity">Sort by complexity</label>
          <input type="checkbox" />
        </div>
        <div className="filter">
          <label htmlFor="time">Sort by time</label>
          <input type="checkbox" />
        </div>
        <div className="filter">
          <label htmlFor="ingredients">Have all products</label>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
