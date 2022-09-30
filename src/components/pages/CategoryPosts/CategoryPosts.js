import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardPost from '../../features/Card/Card';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByCategory } from '../../../redux/postsRedux';
import shortid from 'shortid';

const CategoryPosts = ()=>{
    const { categoryId } = useParams();
    const posts = useSelector(state=> getPostByCategory(state,categoryId))
    console.log(posts);
    return( 
        <Container>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='d-inline'>{categoryId}</h1>
            </div>
            <Row className='d-flex flex-wrap justify-content-around align-items-center'>
                {posts.map(post => <CardPost key={shortid()} {...post}/> )}
            </Row> 
        </Container>
    )
}

export default CategoryPosts;