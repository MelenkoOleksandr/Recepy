import RecipyCard from "./../../components/RecipyCard/RecipyCard";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-info">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
          className="profile-img"
        />
        <div className="profile-details">
          <h3 className="profile-name">John Doe</h3>
          <h5 className="profile-recipies">5 recipies</h5>
        </div>
      </div>
      <div className="profile-recipies-list">
        <h3 className="list-title">Recipies</h3>
        <div className="list">
          <RecipyCard />
          <RecipyCard />
          <RecipyCard />
          <RecipyCard />
          <RecipyCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
