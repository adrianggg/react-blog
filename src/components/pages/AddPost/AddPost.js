
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddPostForm from '../../features/AddPostForm/AddPostForm';
const AddPost = ()=>{
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col lg='8'>
                    <h1>AddPost</h1>
                    <AddPostForm />
                </Col>
            </Row>
        </Container>
    );
};

export default AddPost;