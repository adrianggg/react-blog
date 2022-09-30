import PostForm from "../PostForm/PostForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { useDispatch } from 'react-redux';
import { editPost } from "../../../redux/postsRedux";
const EditPostForm = ()=>{
    const { postId } = useParams();
    const post = useSelector(state => getPostById(state,postId));
    const dispatch = useDispatch();
    const id = postId
    const handleSubmit = post=>{
        dispatch(editPost({...post, id}));
    }
    return (
        <PostForm action={handleSubmit} actionName='Edit Post'
        publishedDatePost={post.publishedDate} shortDescriptionPost={post.shortDescription} contentPost={post.content}
        titlePost={post.title} authorPost={post.author} categoryPost={post.category}
         />
    )
}

export default EditPostForm;