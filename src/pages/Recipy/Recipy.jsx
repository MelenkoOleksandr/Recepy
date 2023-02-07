import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { parseTime } from "./../../utils/parseTime";
import Complexity from "../../components/Complexity/Complexity";
import { useDispatch, useSelector } from "react-redux";
import { getRecipy } from "../../redux/slices/recipy";
import "./Recipy.css";
import { getFridge } from "../../redux/slices/fridge";
import Ingredient from "../../components/Ingredient/Ingredient";
import { findProductInFridge } from "./../../utils/products";

const Recipy = () => {
  const dispatch = useDispatch();
  const { recipy, loading } = useSelector((state) => state.recipy);
  const { products } = useSelector((state) => state.fridge);
  const { recipyId } = useParams();

  useEffect(() => {
    dispatch(getFridge());
    dispatch(getRecipy(recipyId));
  }, [recipyId]);

  if (loading || !recipy) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="recipy-page">
      <section className="recipy-info-wrapper">
        <div className="recipy-img-wrapper">
          <img className="recipy-img" src={recipy.img} alt="" />
        </div>
        <div className="recipy-page-info">
          <h2 className="recipy-title">{recipy.title}</h2>
          <div className="recipy-info-item">
            <span className="recipy-field">Chef</span>
            <span className="recipy-value">{recipy.user.username}</span>
          </div>
          <div className="recipy-info-item">
            <span className="recipy-field">Cooking Time</span>
            <span className="recipy-value">
              {parseTime(recipy.cookingTime)}
            </span>
          </div>
          <div className="recipy-info-item">
            <span className="recipy-field">Difficulty</span>
            <Complexity complexity={recipy.complexity} />
          </div>
        </div>
      </section>
      <section className="ingredients">
        <h2 className="ingredients-title">Ingredients</h2>
        <div className="ingredients-list">
          {recipy.ingredients.map((ingredient) => (
            <Ingredient
              ingredient={ingredient}
              ingredientInFridge={findProductInFridge(products, ingredient)}
              key={ingredient._id}
            />
          ))}
        </div>
      </section>
      <section className="steps">
        <h3 className="steps-title">Steps</h3>
        {recipy.instructions.map((instruction, index) => (
          <div className="step" key={instruction._id}>
            <div className="step-info">
              <div className="step-number">Step {index + 1}</div>
              <p className="step-desc">{instruction.description}</p>
            </div>
            {instruction.img && (
              <img
                src="https://images.unsplash.com/photo-1619957666015-50503839e961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="step-img"
              />
            )}
          </div>
        ))}
      </section>
      <section className="comments">
        <h2 className="comments-title">Comments</h2>
        <div className="comments-wrapper">
          <div className="comment">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <div className="comment-info">
              <div className="comment-user">Alex</div>
              <div className="comment-date">12/12/2021</div>
            </div>
            <div className="comment-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptate, quod, voluptates quibusdam voluptas quidem
              voluptatum quos quia quas quod. Quisquam quae, voluptate, quod,
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipy;
