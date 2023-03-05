import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFridge } from '../../api';

export const getFridge = createAsyncThunk('fridge/fetchFridge', async () => {
    const response = await fetchFridge();
    return response.data;
});

export const fridgeSlice = createSlice({
    name: 'fridge',
    initialState: {
        products: [],
        loading: false,
        error: ""
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            console.log(action.payload);
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        updateProductQuantity: (state, action) => {
            const product = state.products.find((product) => product.id === action.payload.id);
            product.quantity = action.payload.quantity;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFridge.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFridge.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getFridge.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { addProduct, removeProduct, updateProductQuantity } = fridgeSlice.actions;

export default fridgeSlice.reducer;
