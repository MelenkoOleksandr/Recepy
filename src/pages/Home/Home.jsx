import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters";
import RecipyCard from "../../components/RecipyCard/RecipyCard";
import { getRecipies } from "../../redux/slices/recipies";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { recipies } = useSelector((state) => state.recipies);

  const [filters, setFilters] = useState({
    input: "",
    category: "All",
    complexity: false,
    time: false,
    ingredients: false,
  });

  useEffect(() => {
    dispatch(getRecipies());
  }, []);

  let filteredRecipes = recipies;

  if (recipies.length > 0) {
    if (filters.input) {
      filteredRecipes = filteredRecipes.filter((recipy) =>
        recipy.title.toLowerCase().includes(filters.input.toLowerCase())
      );
    }

    if (filters.category !== "All") {
      filteredRecipes = filteredRecipes.filter(
        (recipy) => recipy.category === filters.category
      );
    }

    if (filters.complexity) {
      filteredRecipes = filteredRecipes.sort(
        (a, b) => a.complexity - b.complexity
      );
    }

    if (filters.time) {
      filteredRecipes = filteredRecipes.sort(
        (a, b) => a.cooking_time - b.cooking_time
      );
    }
  }
  return (
    <div className="home">
      <Filters filters={filters} setFilters={setFilters} />
      <div className="recipes">
        {filteredRecipes.length > 0 &&
          filteredRecipes.map((recipy) => (
            <RecipyCard
              key={recipy.id}
              recipy={recipy}
              chef={recipy.user}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
