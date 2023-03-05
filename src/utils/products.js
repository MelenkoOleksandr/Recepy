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

export const isEnoughProductInFridge = (fridge, productRecipe) => {
    const productFridge = findProductInFridge(fridge, productRecipe);

    if (productFridge) {
        return productFridge.quantity >= productRecipe.quantity
    }

    return false;
}

export const getRecipiesThatUserCanPrepare = (recipies, fridge) => {
    return recipies.filter((recipy) => {
        const products = recipy.ingredients;

        return products.every((product) => isEnoughProductInFridge(fridge, product));
    });
}