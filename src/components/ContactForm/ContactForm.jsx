import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contacts/operations'
import { Toaster } from 'react-hot-toast'

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
 name: "",
 number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
 
  const handleSubmit = (values, actions) => {
    const finalContact = { ...values};
    dispatch(addContact(finalContact));
    actions.resetForm();
    }
  return (<>
    <Toaster position="top-center" reverseOrder={false}/>
      <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={ContactFormSchema}>
      <Form >
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId} />
              <ErrorMessage  name="name" component="span" />
              <label htmlFor={numberFieldId}>Number</label>
              <Field type="tel" name="number" id={numberFieldId} />
              <ErrorMessage  name="number" component="span" />
			<button type="submit">Add contact</button>
			</Form>
    </Formik>
</>
          
  )
}

export default ContactForm