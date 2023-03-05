import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipyCategories } from "./../../redux/slices/recipyCategories";
import { getProducts } from "./../../redux/slices/products";
import "./NewRecipy.css";

const NewRecipy = () => {
  const dispatch = useDispatch();
  const { recipyCategories } = useSelector((state) => state.recipyCategories);
  const { products } = useSelector((state) => state.products);
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [fields, setFields] = useState({
    img: "",
    categoryId: "",
    title: "",
    description: "",
    cookingTime: 0,
    complexity: 1,
    ingredients: [],
    instructions: [],
  });
  const [product, setProduct] = useState(products[0]?._id);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllRecipyCategories());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleStep = () => {
    setFields({
      ...fields,
      instructions: [
        ...fields.instructions,
        {
          description: "",
          img: "",
        },
      ],
    });
  };

  const handleStepChange = (e, index) => {
    const { name, value } = e.target;
    const newInstructions = [...fields.instructions];
    newInstructions[index][name] = value;
    setFields({ ...fields, instructions: newInstructions });
  };

  const handleIngredientMode = () => {
    setIsIngredientsOpen(true);
  };

  const handleAddIngredient = () => {
    setFields({
      ...fields,
      ingredients: [
        ...fields.ingredients,
        {
          productId: product,
          quantity: 0,
        },
      ],
    });
    setIsIngredientsOpen(false);
  };

  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target;
    const newIngredients = [...fields.ingredients];
    newIngredients[index][name] = value;
    setFields({ ...fields, ingredients: newIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  }

  return (
    <form className="new-recipy" onSubmit={handleSubmit}>
      <h1 className="new-recipy-title">New Recipy</h1>
      <div className="form-control">
        <label htmlFor="img">Image URL</label>
        <input
          name="img"
          type="text"
          id="img"
          value={fields.img}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          id="title"
          value={fields.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          type="text"
          id="description"
          value={fields.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="categoryId">Category</label>
        <select
          name="categoryId"
          id="categoryId"
          value={fields.categoryId}
          onChange={handleChange}
        >
          {recipyCategories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="complexity">Complexity</label>
        <select
          name="complexity"
          id="complexity"
          value={fields.complexity}
          onChange={handleChange}
        >
          <option value="1">Easy</option>
          <option value="2">Medium</option>
          <option value="3">Hard</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="cookingTime">Cooking Time</label>
        <input
          type="number"
          id="cookingTime"
          value={fields.cookingTime}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div className="ingredients">
        <h3>Ingredients</h3>
        <button type="button" onClick={handleIngredientMode}>
          Add Ingredient
        </button>
        {isIngredientsOpen && (
          <div className="form-control">
            <select
              name="productId"
              id="productId"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              {products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </select>

            <button type="button" onClick={handleAddIngredient}>
              Add
            </button>
          </div>
        )}
        {fields.ingredients.map((ingredient, index) => {
          const product = products.find(
            (product) => product._id === ingredient.productId
          );

          return (
            <div className="ingredient" key={index}>
              <h6 className="ingredient-title">{product.name}</h6>
              <div className="form-control">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="instructions">
        <h3>Instructions</h3>
        <button type="button" onClick={handleStep}>
          Add Step
        </button>
        <div className="steps">
          {fields.instructions.map((step, index) => (
            <div key={index} className="step">
              <h6 className="step-title">Step {index + 1}</h6>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={step.description}
                  onChange={(e) => handleStepChange(e, index)}
                />
              </div>
              <div className="form-control">
                <label htmlFor="img">Image URL</label>
                <input
                  type="text"
                  id="img"
                  value={step.img}
                  name="img"
                  onChange={(e) => handleStepChange(e, index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewRecipy;
