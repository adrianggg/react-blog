import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PostForm = ({action, actionName, titlePost , publishedDatePost,shortDescriptionPost, contentPost , authorPost })=>{
    console.log(titlePost);
    const [title,setTitle] = useState(titlePost === undefined ? '' : titlePost);
    const [author,setAuthor] = useState(authorPost === undefined ? '' : authorPost);
    const [publishedDate,setpublishedDate]= useState(publishedDatePost === undefined ? '' : publishedDatePost);
    const [shortDescription,setshortDescription] =useState(shortDescriptionPost === undefined ? '' : shortDescriptionPost);
    const [content,setContent] = useState(contentPost === undefined ? '' : contentPost);
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        action({title,author,publishedDate,shortDescription,content});
        navigate('/');
    }
    return (
        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} lg='6'>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter title" />
            </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} lg='6'>
            <Form.Label>Author</Form.Label>
            <Form.Control type='text' value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Enter Author" />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} lg='6'>
            <Form.Label>publishedDate</Form.Label>
            <Form.Control type='date' value={publishedDate} onChange={e=>setpublishedDate(e.target.value)} placeholder="Enter Date" />
        </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} lg='8'>
            <Form.Label>shortDescription description</Form.Label>
            <Form.Control as="textarea" value={shortDescription} onChange={e=>setshortDescription(e.target.value)} placeholder="Leave a comment here"  />
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} lg='8'>
            <Form.Label>content content</Form.Label>
            <Form.Control as="textarea" value={content} onChange={e=>setContent(e.target.value)} placeholder="Leave a comment here" />
        </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
            {actionName}
        </Button>
        </Form>
    )
}

export default PostForm;