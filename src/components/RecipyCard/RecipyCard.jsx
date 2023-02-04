import { useState } from "react";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import "./RecipyCard.css";
import { Link } from "react-router-dom";

const RecipyCard = () => {
  const [saved, setSaved] = useState(false);

  return (
    <Link to={'/recipy/test'} className="recipy">
      {!saved ? (
        <BsBookmarkStar className="saved" />
      ) : (
        <BsBookmarkStarFill className="saved" />
      )}
      <div className="recipy-image">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
          alt="recipy"
        />
      </div>
      <div className="recipy-info">
        <div className="recipy-info-left">
          <h4 className="recipy-title">Pizza</h4>
          <h5 className="recipy-chef">
            <span>By</span> Chef Alex
          </h5>
          <h5 className="recipy-time">
            <BiTimeFive className="time-icon" />
            <span className="time">30 min </span>
          </h5>
        </div>
        <div className="recipy-info-right">
          <h5 className="recipy-rating">
            <AiOutlineStar className="rating-icon" />
            <span className="rating">4.5</span>
          </h5>
          <h5 className="recipy-complexity">Easy</h5>
        </div>
      </div>
    </Link>
  );
};
export default RecipyCard;
