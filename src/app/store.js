import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import userReducer from "../features/users/usersSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: userReducer,
        theme: themeReducer
    },
});