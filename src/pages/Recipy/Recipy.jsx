// Page for the recipy
// It must contain the list of ingredients and the steps to follow
// Need to show insufficient products depending on the fridge
import "./Recipy.css"

const Recipy = () => {
  return (
    <div className="recipy-page">
      <section className="recipy-info-wrapper">
        <div className="recipy-img-wrapper">
          <img
            className="recipy-img"
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
            alt=""
          />
        </div>
        <div className="recipy-page-info">
          <h2 className="recipy-title">Pizza</h2>
          <h3 className="recipy-info-item">
            <span className="recipy-field">Chef</span>
            <span className="recipy-value">Alex</span>
          </h3>
          <h3 className="recipy-info-item">
            <span className="recipy-field">Cooking Time</span>
            <span className="recipy-value">15m</span>
          </h3>
          <h3 className="recipy-info-item">
            <span className="recipy-field">Difficulty</span>
            <span className="recipy-value">Easy</span>
          </h3>
        </div>
      </section>
      <section className="ingredients">
        <h2 className="ingredients-title">Ingredients</h2>
        <div className="show-possible">
          <input type="checkbox" id="show-possible" />
          <label htmlFor="show-possible">Show possible ingredients</label>
        </div>
        <div className="ingredients-list">
          <div className="ingredient not-available">
            <div className="ingredient-name">Tomato</div>
            <div className="ingredient-quantity">200g</div>
          </div>
          <div className="ingredient">
            <div className="ingredient-name">Tomato</div>
            <div className="ingredient-quantity">200g</div>
          </div>
          <div className="ingredient">
            <div className="ingredient-name">Tomato</div>
            <div className="ingredient-quantity">200g</div>
          </div>
          <div className="ingredient">
            <div className="ingredient-name">Tomato</div>
            <div className="ingredient-quantity">200g</div>
          </div>
        </div>
      </section>
      <section className="steps">
        <h3 className="steps-title">Steps</h3>
        <div className="step">
          <div className="step-info">
            <div className="step-number">Step 1</div>
            <p className="step-desc">
              Lorem ipsum dolor sit amet consectetur. Pretium nisi congue eget
              viverra in gravida. Aenean sodales lacus tellus quis sed gravida
              id. Mauris cursus nisi neque egestas eget. Lectus imperdiet
              scelerisque mauris mauris aliquam a scelerisque imperdiet.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1619957666015-50503839e961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="step-img"
          />
        </div>
        <div className="step">
          <div className="step-info">
            <div className="step-number">Step 2</div>
            <p className="step-desc">
              Lorem ipsum dolor sit amet consectetur. Pretium nisi congue eget
              viverra in gravida. Aenean sodales lacus tellus quis sed gravida
              id. Mauris cursus nisi neque egestas eget. Lectus imperdiet
              scelerisque mauris mauris aliquam a scelerisque imperdiet.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1619957666015-50503839e961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="step-img"
          />
        </div>
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
