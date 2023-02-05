import { useState } from "react";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import "./RecipyCard.css";
import { Link } from "react-router-dom";
import Complexity from "../Complexity/Complexity";
import { parseTime } from "../../utils/parseTime";

const RecipyCard = ({ recipy, chef }) => {
  const [saved, setSaved] = useState(false);

  return (
    <Link to={`/recipy/${recipy.id}`} className="recipy">
      {!saved ? (
        <BsBookmarkStar className="saved" />
      ) : (
        <BsBookmarkStarFill className="saved" />
      )}
      <div className="recipy-image">
        <img src={recipy.img} alt="recipy" />
      </div>
      <div className="recipy-info">
        <div className="recipy-info-left">
          <h4 className="recipy-title">{recipy.title}</h4>
          <h5 className="recipy-chef">
            <span>By</span> {chef.username}
          </h5>
          <h5 className="recipy-time">
            <BiTimeFive className="time-icon" />
            <span className="time">{parseTime(recipy.cooking_time)} </span>
          </h5>
        </div>
        <div className="recipy-info-right">
          <h5 className="recipy-rating">
            <AiOutlineStar className="rating-icon" />
            <span className="rating">4.5</span>
          </h5>
          <Complexity complexity={recipy.complexity} />
        </div>
      </div>
    </Link>
  );
};
export default RecipyCard;
