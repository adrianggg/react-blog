import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import { NavLink } from "react-router-dom";

const CardPost = ({title,author,publishedDate,shortDescription,category,id}) => {
    
  return (
    <Col>
        <Card style={{ width: '22rem' }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle><strong>Author:</strong> {author}</Card.Subtitle>
            <Card.Subtitle><strong>Date:</strong> {publishedDate.toLocaleDateString()}</Card.Subtitle>
            <Card.Subtitle><strong>Category:</strong> {category}</Card.Subtitle>
            <Card.Text>{shortDescription}</Card.Text>
            <Button as={NavLink} to={`/post/${id}`} variant="primary">Read more</Button>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default CardPost;