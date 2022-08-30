import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
const AddPostForm = ()=> {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [publishedDate,setpublishedDate]= useState('');
    const [shortDescription,setshortDescription] =useState('');
    const [content,setContent] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e=>{
        e.preventDefault();
        dispatch(addPost({title,author,publishedDate,shortDescription,content}))
    }
    return (

            <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} lg='6'>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" onChange={e=>setTitle(e.target.value)} placeholder="Enter title" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} lg='6'>
                <Form.Label>Author</Form.Label>
                <Form.Control type='text' onChange={e=>setAuthor(e.target.value)} placeholder="Enter Author" />
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} lg='6'>
                <Form.Label>publishedDate</Form.Label>
                <Form.Control type='date' onChange={e=>setpublishedDate(e.target.value)} placeholder="Enter Date" />
            </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} lg='8'>
                <Form.Label>shortDescription description</Form.Label>
                <Form.Control as="textarea" onChange={e=>setshortDescription(e.target.value)} placeholder="Leave a comment here"  />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} lg='8'>
                <Form.Label>content content</Form.Label>
                <Form.Control as="textarea" onChange={e=>setContent(e.target.value)} placeholder="Leave a comment here" />
            </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Add Post
            </Button>
            </Form>
    )
}
export default AddPostForm;