import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostUserComponent from "../users/PostUserComponent";
import Reactions from "./Reactions";
import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({ post }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <article
      style={!theme ? { borderColor: "white" } : { borderColor: "black" }}
      key={post.id}
    >
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
    <Link to={`post/${post.id}`} style={!theme ? { color: "white" } : { color: "black" }}>View Post</Link>
        <PostUserComponent userId={Number(post.userId)} />
        <TimeAgo timestamp={post.date} />
      </p>
      <Reactions post={post} />
    </article>
  );
};
export default PostsExcerpt;
