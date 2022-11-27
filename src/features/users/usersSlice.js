import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id:'0', name:"david chang"},
    {id:'1', name:"michel jackson"},
    {id:'2', name:"bruce lee"}
]

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: (state) => {

    }
})


export const { } = usersSlice.actions;

export default usersSlice.reducer;