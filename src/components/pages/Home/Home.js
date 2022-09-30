import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import CardPost from '../../features/Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Home = ()=>{
    const posts = useSelector(getAllPosts);
    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='d-inline'>All posts</h1>
                <Button as={NavLink} to="/post/add" variant="outline-info">Add post</Button>
            </div>
            <Row className='d-flex flex-wrap justify-content-around align-items-center'>
              {posts.map(post => <CardPost key={post.id} {...post}/> )}
            </Row>
        </Container>
    );
};

export default Home;