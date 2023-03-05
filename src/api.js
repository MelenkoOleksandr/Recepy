import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


export const apiLogin = async (data) => {
    const response = await api.post("/auth/login", data);
    return response;
}

export const fetchRecipies = async () => {
    const response = await api.get("/recipies");
    return response;
}

export const fetchRecipy = async (id) => {
    const response = await api.get(`/recipies/${id}`);
    return response;
}

export const fetchFridge = async () => {
    const response = await api.get("/products/fridge");
    return response;
}

export const fetchProducts = async () => {
    const response = await api.get("/products");
    return response;
}

export const addProductToFridge = async (data) => {
    const response = await api.post("/products/fridge", data);
    return response;
} 

export const deleteProductFromFridge = async (id) => {
    const response = await api.delete(`/products/fridge/${id}`);
    return response;
}

export const updateProductQuantity = async (id, quantity) => {
    const response = await api.put(`/products/fridge/${id}`, {quantity});
    return response;
}

export const fetchProductCategories = async () => {
    const response = await api.get("/productCategories");
    return response;
}

export const fetchRecipyCategories = async () => {
    const response = await api.get("/recipyCategories");
    return response;
}