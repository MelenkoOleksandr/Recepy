import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  fetchRecipy } from '../../api';

export const getRecipy = createAsyncThunk('recipy/getRecipy', async (recipyId) => {
    const response = await fetchRecipy(recipyId);
    return response.data;
});

export const recipySlice = createSlice({
    name: 'recipy',
    initialState: {
        recipy: null,
        loading: false,
        error: ""
    },
    extraReducers: (builder) => {
        builder.addCase(getRecipy.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRecipy.fulfilled, (state, action) => {
            state.recipy = action.payload;
            state.loading = false;
        });
        builder.addCase(getRecipy.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default recipySlice.reducer;