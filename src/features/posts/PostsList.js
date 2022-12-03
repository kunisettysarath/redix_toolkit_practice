import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostUserComponent from "../users/PostUserComponent";
import { selectAllPosts, selectPostByID } from "./postsSlice";
import TimeAgo from "./TimeAgo";
import Reactions from "./Reactions";
import { useEffect } from "react";
import { fetchPosts } from "./postsSlice";
import DisplayPost from "./DisplayPost";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const singlePost = useSelector((state) => selectPostByID(state, 1))

  useEffect(() => {
    if (status === "idle") dispatch(fetchPosts());
  }, [status, dispatch]);
  let content;
    if (status === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (status === 'succeeded') {
      const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
      
        content = orderedPosts.map(post => <DisplayPost post={post} />)
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
