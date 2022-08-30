import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
const CardPost = ({post}) => {
  return (
    <Col>
        <Card style={{ width: '22rem' }}>
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle>Author: {post.author}</Card.Subtitle>
            <Card.Subtitle>Date: {post.publishedDate}</Card.Subtitle>
            <Card.Text>{post.shortDescription}</Card.Text>
            <Button variant="primary">Read more</Button>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default CardPost;