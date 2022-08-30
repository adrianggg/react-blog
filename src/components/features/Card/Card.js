import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import { NavLink } from "react-router-dom";

const CardPost = ({post}) => {
    
  return (
    <Col>
        <Card style={{ width: '22rem' }}>
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle><strong>Author:</strong> {post.author}</Card.Subtitle>
            <Card.Subtitle><strong>Date:</strong> {post.publishedDate}</Card.Subtitle>
            <Card.Text>{post.shortDescription}</Card.Text>
            <Button as={NavLink} to={`/post/${post.id}`} variant="primary">Read more</Button>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default CardPost;