import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostUserComponent from "../users/PostUserComponent";
import { selectAllPosts, selectPostByID } from "./postsSlice";
import { useEffect } from "react";
import { fetchPosts } from "./postsSlice";
import DisplayPost from "./DisplayPost";
import { HashLoader } from "react-spinners";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === "idle") dispatch(fetchPosts());
  }, [status, dispatch]);
  let content;
    if (status === 'loading') {
        // content = <p>"Loading..."</p>;
      content = <div className="loaders" ><HashLoader size={ 50 } color="#5c1616" /></div>
    } else if (status === 'succeeded') {
      const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
      // console.log(orderedPosts)
        content = orderedPosts.map(post => <DisplayPost post={post} />)
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

  return (
    <section>
      {content}
    </section>
  );
};

export default PostsList;
