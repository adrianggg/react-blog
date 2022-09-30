import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";

import ReactQuill from 'react-quill';
import DatePicker from "react-datepicker";

import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";


import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/postsRedux';
import shortid from 'shortid';
const PostForm = ({action, actionName, titlePost , publishedDatePost,shortDescriptionPost,categoryPost, contentPost , authorPost })=>{
    const [title,setTitle] = useState(titlePost === undefined ? '' : titlePost);
    const [author,setAuthor] = useState(authorPost === undefined ? '' : authorPost);
    const [publishedDate,setpublishedDate]= useState(publishedDatePost === undefined ? '' : new Date(publishedDatePost));
    const [shortDescription,setshortDescription] =useState(shortDescriptionPost === undefined ? '' : shortDescriptionPost);
    const [content,setContent] = useState(contentPost === undefined ? '' : contentPost);
    const [category,setCategory]  = useState(categoryPost === undefined ? '' : categoryPost);
    const navigate = useNavigate();

    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const [dateError, setDateError] = useState(false);
    const [contentError,setContentError] = useState(false);
    const categories = useSelector(getAllCategories);
    const handleSubmit = () => {
        setContentError(!content)
        console.log(dateError);
        setDateError(publishedDate);
        console.log(dateError);
        if(content && publishedDate) {
          action({ title, author, publishedDate, shortDescription,category, content });
          navigate('/');
        }
      };
    const handleSelect = e=>{
        setCategory(e.target.value);
    }
     
    return (
        <Form onSubmit={validate(handleSubmit)}>
        <Row className="mb-3">
            <Form.Group as={Col} lg='6' controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    {...register("title", { required: true, minLength:4 })}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text" placeholder="Enter title"
                />
                 {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 4)</small>}
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} lg='6'>
            <Form.Label>Author</Form.Label>
            <Form.Control 
                {...register("author",{required:true , minLength:4})}
                type='text'
                value={author}
                onChange={e=>setAuthor(e.target.value)} 
                placeholder="Enter Author"
             />
            {errors.author && <small className="d-block form-text text-danger mt-2">Title is too short (min is 4)</small>}
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} lg='6'>
            <Form.Label>publishedDate</Form.Label>
            <DatePicker selected={publishedDate} onChange={date => setpublishedDate(date)} dateFormat="dd/MM/yyyy" />
            {!dateError && <small className="d-block form-text text-danger mt-2">Required date</small>}
        </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} lg='8'>
            <Form.Select onChange={handleSelect} value={category}>
                <option  key={shortid()}>Select category</option>
                {categories.map(categoryRender=> <option key={shortid()}>{categoryRender}</option>)}
                 
            </Form.Select>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} lg='8'>
            <Form.Label>Description</Form.Label>
            <Form.Control
                {...register("shortDescription",{required:true , minLength:20})}
                as="textarea" 
                value={shortDescription} 
                onChange={e=>setshortDescription(e.target.value)} 
                placeholder="Leave a comment here"  
            />
            {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Title is too short (min is 20)</small>}
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} lg='8'>
            <Form.Label>Main content</Form.Label>
            <ReactQuill theme="snow" value={content} onChange={setContent}  placeholder="Leave a comment here" />
            {!contentError && <small className="d-block form-text text-danger mt-2">Content is required</small>}
        </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
            {actionName}
        </Button>
        </Form>
    )
}

export default PostForm;