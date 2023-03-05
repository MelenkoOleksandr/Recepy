import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './slices/auth';
import recipiesReducer from './slices/recipies';
import recipyReducer from './slices/recipy';
import fridgeReducer from './slices/fridge';
import productsReducer from './slices/products';
import productCategoriesReducer from './slices/productCategories';
import recipyCategoriesReducer from './slices/recipyCategories';

const rootReducer = combineReducers({
    auth: authReducer,
    recipies: recipiesReducer,
    recipy: recipyReducer,
    fridge: fridgeReducer,
    products: productsReducer,
    productCategories: productCategoriesReducer,
    recipyCategories: recipyCategoriesReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;