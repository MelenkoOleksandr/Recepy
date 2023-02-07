export const findProductInFridge = (fridge, productRecipe) => {
    const productFridge = fridge.find((product) => product.name === productRecipe.name);

    if (productFridge) {
        return productFridge
    } 

    return null;
}

export const isProductInFridge = (fridge, productRecipe) => {
    const productFridge = findProductInFridge(fridge, productRecipe);

    if (productFridge) {
        return true
    } 

    return false;
}