// Sort by the complexity of recipes
// Filter by the selected ingredients
// Filter by the time to prepare
// If user is logged in, filter by the products in the fridge
import { AiOutlineSearch } from "react-icons/ai";
import "./Filters.css";

const Filters = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    setFilters({ ...filters, input: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleComplexityChange = (e) => {
    setFilters({ ...filters, complexity: e.target.checked });
  };

  const handleTimeChange = (e) => {
    setFilters({ ...filters, time: e.target.checked });
  };

  const handleIngredientsChange = (e) => {
    setFilters({ ...filters, ingredients: e.target.checked });
  };

  return (
    <div className="recipy-filters">
      <div className="search">
        <input
          onChange={handleInputChange}
          value={filters.input}
          type="text"
          placeholder="Enter your recipy name, ingredients, etc..."
        />
        {/* <AiOutlineSearch /> */}
      </div>
      <div className="category-wrapper">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          onChange={handleCategoryChange}
          value={filters.category}
        >
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
        </select>
      </div>
      <div className="filters">
        <div className="filter">
          <label htmlFor="complexity">Sort by complexity</label>
          <input
            type="checkbox"
            onChange={handleComplexityChange}
            checked={filters.complexity}
          />
        </div>
        <div className="filter">
          <label htmlFor="time">Sort by time</label>
          <input
            type="checkbox"
            onChange={handleTimeChange}
            checked={filters.time}
          />
        </div>
        <div className="filter">
          <label htmlFor="ingredients">Have all products</label>
          <input
            type="checkbox"
            onChange={handleIngredientsChange}
            checked={filters.ingredients}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
