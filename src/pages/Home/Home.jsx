import { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import RecipyCard from "../../components/RecipyCard/RecipyCard";
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);

  const [filters, setFilters] = useState({
    input: "",
    category: "All",
    complexity: false,
    time: false,
    ingredients: false,
  });

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch("http://localhost:8080/recipies");
      const data = await response.json();
      setRecipes(data);
    };

    const getUsers = async () => {
      const response = await fetch("http://localhost:8080/users");
      const data = await response.json();
      setUsers(data);
    };

    getUsers();
    getRecipes();
  }, []);

  let filteredRecipes = recipes;

  if (recipes.length > 0) {
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
      filteredRecipes = filteredRecipes.sort((a, b) => a.cooking_time - b.cooking_time);
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
              chef={users.find((user) => recipy.user_id === user.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
