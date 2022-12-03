import React from "react";
import { useSelector,useDispatch } from "react-redux";

function PostUserComponent({ userId }) {
    const users = useSelector((state) => state.users);
  const userIDFiltered = users.find((users) => users.id === userId)
    return <span>by { userIDFiltered? userIDFiltered.name : "unknown user" }</span>
}

export default PostUserComponent;
