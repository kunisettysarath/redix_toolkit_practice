import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';


const initialState = []

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const res = await axios.get(USERS_URL, initialState)
    return res.data
})

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: (state) => { },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})


export const { } = usersSlice.actions;
export const selectUserByID = (state, userID) => state.users.find(user =>  user.id === userID)

export default usersSlice.reducer;