import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./usersSlice";

function PostUserComponent({ userId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  },[])
    const users = useSelector((state) => state.users);
  const userIDFiltered = users.find((users) => users.id === userId)
    return <span>by { userIDFiltered? userIDFiltered.name : "unknown user" }</span>
}

export default PostUserComponent;
