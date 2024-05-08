import { IoCloseSharp } from "react-icons/io5";
import { useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';




const Modal = ({contact,setShowModal}) => {
    const contactId = contact.id;
    const dispatch = useDispatch();
    const deletePhoneNumber = () => {
        dispatch(deleteContact(contactId))   
        
  }
    return (
        <div >
            <div >
                <button type="button"  onClick={() => setShowModal(false)}><IoCloseSharp /></button>
                <p >{`Do you want to delete ${contact.name}?`}</p>
                <div >
                    <button type="button"  onClick={deletePhoneNumber}>Yes</button>
                    <button type="button"  onClick={() => setShowModal(false)} >No</button>
                </div>
          
    
        </div>
        </div>
  )
}

export default Modal