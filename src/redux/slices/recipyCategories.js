import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchRecipyCategories } from '../../api'

export const getAllRecipyCategories = createAsyncThunk(
    'recipyCategories/getAllRecipyCategories',
    async () => {
        const response = await fetchRecipyCategories()
        return response.data
    }
)


export const recipyCategoriesSlice = createSlice({
    name: 'recipyCategories',
    initialState: {
        recipyCategories: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(getAllRecipyCategories.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllRecipyCategories.fulfilled, (state, action) => {
                state.loading = false
                state.recipyCategories = action.payload
            })
            .addCase(getAllRecipyCategories.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default recipyCategoriesSlice.reducer