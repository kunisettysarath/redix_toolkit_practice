import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import { updatePost } from "./postsSlice";

function EditPost() {
  const location = useLocation();
  const selectedPost = location.state.postInfo.post;
  const navigate = useNavigate();
  const [title, setTitle] = useState(selectedPost.title);
  const [body, setContent] = useState(selectedPost.body);
  const [userId, setUserId] = useState(selectedPost.userId);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onUserIDChanged = (e) => setUserId(e.target.value);

  const enableSavePostButton =
  title!==selectedPost.title || body!==selectedPost.body || userId!==selectedPost.userId
console.log(title===selectedPost.title)
console.log(body===selectedPost.body)
console.log(userId===selectedPost.userId)

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

    const onUpdatePostClicked = () => {
    if (title && body) {
      dispatch(
        updatePost({
          id: selectedPost.id,
          title,
          body,
          userId,
          reactions: selectedPost.reactions,
        })
      ).unwrap();
      setTitle("");
      setContent("");
      setUserId("");
      navigate(`/post/${selectedPost.id}`);
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="userIDInput">User ID</label>
        <select id="userIDInput" value={userId} onChange={onUserIDChanged}>
          <option>Select User</option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={onContentChanged}
        />
        <button
          type="button"
          disabled={!enableSavePostButton}
          onClick={onUpdatePostClicked}
        >
          Update Post
        </button>
      </form>
    </section>
  );
}

export default EditPost;
