import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLogin } from '../../api';

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await apiLogin(data);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: ""
    },
    reducers: {
        loadData: (state) => {
            const user = localStorage.getItem('user');
            if (user) {
                state.user = JSON.parse(user);
            }
        },
        logout: (state) => {
            localStorage.removeItem('token');
            state.user = null;
            state.loading = false;
            state.error = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem('user', action.payload);
                state.user = action.payload;
                state.loading = false;
                state.error = "";
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const {  
    loadData,
    logout
} = authSlice.actions;

export default authSlice.reducer;
