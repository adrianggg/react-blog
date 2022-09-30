import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import {Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import ModalPost from "../../features/ModalPost/ModalPost";
import {Navigate} from 'react-router-dom';
const Post = ()=>{
    const { postId } = useParams();
    const post = useSelector(state => getPostById(state,postId));
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);
    if(!post) return <Navigate to="/" />
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <Col lg='6' className="d-flex justify-content-between align-items-center">
                    <h1 className='d-inline'>{post.title}</h1>
                    <div>
                    <Button className="m-2" as={NavLink} to={`/post/edit/${postId}`} variant="outline-info">Edit</Button>
                    <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
                    </div>

                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
                <Col lg='6' className="d-flex flex-column">
                    <p className="mb-0"><strong>Author: </strong>{post.author}</p>
                    <p className="mb-0"><strong>Category: </strong>{post.category}</p>
                    <p><strong>Date: </strong>{post.publishedDate.toLocaleDateString()}</p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
                <Col lg='6'>
                    <p dangerouslySetInnerHTML={{ __html: post.content }} />
                </Col>
            </Row>
            <ModalPost  show={show} handleClose={handleClose} id={postId}/>
        </Container>
        
    );
};

export default Post;