import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import {selectError, selectLoading} from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { Helmet } from "react-helmet-async";




const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  
  useEffect(() => {
    dispatch(fetchContacts());    
  }, [dispatch]);
  return (<>
    <Helmet>
          <title>Contact Page</title>
    </Helmet>
    <h1>Your contacts</h1>
    <ContactForm />
    <SearchBox />
    {loading && !error && <Loader />}
    <ContactList />
    
  </>
  )
}

export default ContactsPage