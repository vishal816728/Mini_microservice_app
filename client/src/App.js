import logo from './logo.svg';
import './App.css';
import PostCreate from './postCreate';
import PostList from './postList';

function App() {
  
  return (
    <div className="App container">
     <h1>Hello There</h1>
     <PostCreate />
     <hr />
     <h1>Posts</h1>
     <PostList />
    </div>
  );
}

export default App;
