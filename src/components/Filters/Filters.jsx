import "./Filters.css";

const Filters = ({ filters, setFilters, recipyCategories, isAuth }) => {
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
          {recipyCategories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
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
        {isAuth && (
          <div className="filter">
            <label htmlFor="ingredients">Have all products</label>
            <input
              type="checkbox"
              onChange={handleIngredientsChange}
              checked={filters.ingredients}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
