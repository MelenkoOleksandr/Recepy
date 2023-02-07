import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './slices/auth';
import recipiesReducer from './slices/recipies';
import recipyReducer from './slices/recipy';
import fridgeReducer from './slices/fridge';
import productsReducer from './slices/products';

const rootReducer = combineReducers({
    auth: authReducer,
    recipies: recipiesReducer,
    recipy: recipyReducer,
    fridge: fridgeReducer,
    products: productsReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;