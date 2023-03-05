import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProductCategories } from '../../api'

export const getAllProductCategories = createAsyncThunk(
    'productCategories/getAllProductCategories',
    async () => {
        const response = await fetchProductCategories()
        return response.data
    }
)


export const productCategoriesSlice = createSlice({
    name: 'productCategories',
    initialState: {
        productCategories: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(getAllProductCategories.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllProductCategories.fulfilled, (state, action) => {
                state.loading = false
                state.productCategories = action.payload
            })
            .addCase(getAllProductCategories.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default productCategoriesSlice.reducer