import { selectFilteredContacts } from "../../redux/filters/selectors"
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux'


const ContactList=() =>{
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (<>
    <ul >
      {(filteredContacts.length===0)? (<p>You do not have any contact!</p> ):
        filteredContacts.map(contact => {
              return (<Contact key={contact.id} contact={contact} />)
          })} 
    </ul>
    
  </>
      
  )
}

export default ContactList