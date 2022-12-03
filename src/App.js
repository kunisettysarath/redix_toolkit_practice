import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import Header from "./features/posts/Header";
import PostsList from "./features/posts/PostsList";
function App() {
  return (
    <main className="App">
      <Header/>
      <AddPostForm/>
      <PostsList />
    </main>
  );
}

export default App;
