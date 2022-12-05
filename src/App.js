import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import Header from "./features/posts/Header";
import PostsList from "./features/posts/PostsList";
import { Routes, Route } from "react-router-dom";
import SelectedPost from "./features/posts/SelectedPost";
import EditPost from "./features/posts/EditPost";
function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
        {/* <Route path="/post" element={<AddPostForm />}> */}
        <Route path="/post">
        <Route index element={<AddPostForm />} />
        <Route path=":id" element={<SelectedPost />} />
        <Route path="edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
