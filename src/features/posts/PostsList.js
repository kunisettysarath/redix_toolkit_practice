import React from "react";
import { useSelector } from "react-redux";
import PostUserComponent from "../users/PostUserComponent";
import { selectAllPosts } from "./postsSlice";
import TimeAgo from "./TimeAgo";
import Reactions from "./Reactions";

const PostsList = () => {   
  const posts = useSelector(selectAllPosts);
  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostUserComponent userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <Reactions post={post}/>
    </article>
  ));

  return (
    <section>
          <h2>Posts</h2>
          {renderPosts}
    </section>
  );
};

export default PostsList;
