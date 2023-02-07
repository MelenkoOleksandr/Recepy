import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipies } from '../../api';

export const getRecipies = createAsyncThunk('recipies/getRecipies', async () => {
    const response = await fetchRecipies();
    return response.data;
});

export const recipiesSlice = createSlice({
    name: 'recipies',
    initialState: {
        recipies: [],
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder.addCase(getRecipies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRecipies.fulfilled, (state, action) => {
            state.recipies = action.payload;
            state.loading = false;
        });
        builder.addCase(getRecipies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default recipiesSlice.reducer;