import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostUserComponent from "../users/PostUserComponent";
import { selectPostByID } from "./postsSlice";
import Reactions from "./Reactions";
import TimeAgo from "./TimeAgo";

function SelectedPost() {
  const params = useParams();
  const post = useSelector((state) => selectPostByID(state, Number(params.id)));
  const theme = useSelector((state) => state.theme.theme);
  return (
    <article
      style={!theme ? { borderColor: "white" } : { borderColor: "black" }}
      key={post.id}
    >
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link
          to={`/post/edit/${post.id}`}
          state={{ postInfo: { post } }}
          style={!theme ? { color: "white" } : { color: "black" }}
        >
          Edit Post
        </Link>
        <PostUserComponent userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <Reactions post={post} />
    </article>
  );
}

export default SelectedPost;
