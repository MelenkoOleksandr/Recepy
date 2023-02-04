import Filters from "../../components/Filters/Filters";
import RecipyCard from "../../components/RecipyCard/RecipyCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Filters />
      <div className="recipes">
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
        <RecipyCard />
      </div>
    </div>
  );
};

export default Home;
