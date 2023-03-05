const Ingredient = ({ ingredient, ingredientInFridge }) => {
  const isEnough =
    ingredientInFridge && ingredientInFridge.quantity >= ingredient.quantity;

  return (
    <div className="ingredient" key={ingredient.id}>
      <div className="ingredient-name">{ingredient.name}</div>
      <div className={`ingredient-quantity ${!isEnough && "not-available"}`}>
        {ingredientInFridge && `${ingredientInFridge.quantity}/`}
        {ingredient.quantity}g
      </div>
    </div>
  );
};

export default Ingredient;
