import Filters from "../components/Filters";
import RecepyCard from "./../components/RecepyCard";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Popular recepies</h1>
        <div>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <RecepyCard key={i} />
            ))}
        </div>
      </div>
      <div>
        <Filters />
        <div>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <RecepyCard key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
