import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import EditPost from './components/pages/EditPost/EditPost';
import AddPost from './components/pages/AddPost/AddPost';
import Post from './components/pages/Post/Post';
import About from './components/pages/About/About';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path='/post/edit/:postId' element={<EditPost />}/>
        <Route path="/about" element={<About />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
