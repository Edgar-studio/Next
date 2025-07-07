import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
   const response = await axios.get("http://localhost:4000/users");
   return response.data;
})

export const addUser = createAsyncThunk('users/addUsers', async (userInfo) => {
    const response = await axios.post("http://localhost:4000/users", userInfo);
    return response.data;
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, ) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'success';
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
    }
})

export default usersSlice.reducer;