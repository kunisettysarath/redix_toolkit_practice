import React from "react";
import { reactionAdded } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function Reactions({ post }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme)
    const reactionsButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
        <button style={!theme? {color:"white"} : {color:"black"}}key={name} className="reactionButton" onClick={() => dispatch(reactionAdded({id:post.id, name}))}>
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionsButtons}</div>;
}

export default Reactions;
