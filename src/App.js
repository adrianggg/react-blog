import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import EditPost from './components/pages/EditPost/EditPost';
import AddPost from './components/pages/AddPost/AddPost';
import Post from './components/pages/Post/Post';
import About from './components/pages/About/About';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import {Container} from 'react-bootstrap';
import Categories from './components/pages/Categories/Categories';
import CategoryPosts from './components/pages/CategoryPosts/CategoryPosts';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path='/post/edit/:postId' element={<EditPost />}/>
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />}/>
        <Route path="/categories/:categoryId" element={<CategoryPosts/>}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
