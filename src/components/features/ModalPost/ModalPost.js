
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';


const ModalPost = ({show,handleClose,id}) => {
    const dispatch = useDispatch();
    const remove = ()=>{
        dispatch(removePost(id));
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will compeletely remove this post from the app. Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={remove}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalPost;