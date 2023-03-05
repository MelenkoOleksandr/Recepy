import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await fetchProducts();
    return response.data;
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productsSlice.reducer;
