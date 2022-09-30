import styles from './Categories.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import CardPost from '../../features/Card/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/postsRedux';
import shortid from 'shortid';
const Categories = ()=>{
    const categories = useSelector(getAllCategories);
    return(
        <Container>
            <h1 className={styles.heading}>Categories</h1>
            <Row className='d-flex flex-wrap justify-content-around align-items-center'>
                <Col md='6'>
                    <ListGroup md={2}>
                        {categories.map(category => <ListGroup.Item key={shortid()} as={NavLink} to={`/categories/${category}`} >{category}</ListGroup.Item>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Categories;


{/* <div className='d-flex justify-content-between align-items-center'>
<h1 className='d-inline'>All posts</h1>
</div>
<Row className='d-flex flex-wrap justify-content-around align-items-center'>
{posts.map(post => <CardPost key={post.id} {...post}/> )}
</Row> */}