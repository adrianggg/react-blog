import PostForm from "../PostForm/PostForm";
import { addPost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
const AddPostForm = ()=>{
    const dispatch = useDispatch();
    
    const handleSubmit = post=>{
        dispatch(addPost(post));
    }
    return (
        <PostForm action={handleSubmit} actionName='Add post'/>
    )
}

export default AddPostForm;