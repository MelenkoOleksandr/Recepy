import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters";
import RecipyCard from "../../components/RecipyCard/RecipyCard";
import { getRecipies } from "../../redux/slices/recipies";
import { getAllRecipyCategories } from "../../redux/slices/recipyCategories";
import { getRecipiesThatUserCanPrepare } from "../../utils/products";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { recipies } = useSelector((state) => state.recipies);
  const { recipyCategories } = useSelector((state) => state.recipyCategories);
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.fridge);

  const [filters, setFilters] = useState({
    input: "",
    category: "All",
    complexity: false,
    time: false,
    ingredients: false,
  });

  useEffect(() => {
    dispatch(getAllRecipyCategories());
    dispatch(getRecipies());
  }, []);

  useEffect(() => {
  }, [filters]);

  let filteredRecipes = [...recipies];

  if (recipies.length > 0) {
    if (filters.input) {
      filteredRecipes = filteredRecipes.filter((recipy) =>
        recipy.title.toLowerCase().includes(filters.input.toLowerCase())
      );
    }

    if (filters.category !== "All") {
      filteredRecipes = filteredRecipes.filter(
        (recipy) => recipy.categoryId === filters.category
      );
    }

    if (filters.complexity) {
      filteredRecipes = filteredRecipes.sort(
        (a, b) => a.complexity - b.complexity
      );
    }

    if (filters.time) {
     
      filteredRecipes = filteredRecipes.sort(
        (a, b) => a.cookingTime - b.cookingTime
      )
    }

    if (filters.ingredients) {
      filteredRecipes = getRecipiesThatUserCanPrepare(recipies, products);
    }
  }
  return (
    <div className="home">
      <Filters
        recipyCategories={recipyCategories}
        filters={filters}
        setFilters={setFilters}
        isAuth={!!user}
      />
      <div className="recipes">
        {filteredRecipes.length > 0 &&
          filteredRecipes.map((recipy) => (
            <RecipyCard key={recipy._id} recipy={recipy} chef={recipy.user} />
          ))}
      </div>
    </div>
  );
};

export default Home;
