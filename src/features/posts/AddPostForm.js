import React from "react";
import { useSelector } from "react-redux";
// import { selectAllUsers } from "../users/usersSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded, addNewPost } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const enableSavePostButton = Boolean(title) && Boolean(body) && Boolean(userId);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onUserIDChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && body) {
      dispatch(addNewPost({ title, body, userId })).unwrap()
      setTitle("");
      setContent("");
      setUserId("");
      }
  };

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

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
              <button type="button" disabled={ !enableSavePostButton } onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
