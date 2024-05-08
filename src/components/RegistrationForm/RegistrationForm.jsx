import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { register } from '../../redux/auth/operations';

const registrationFormSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
    name:"",
    email:"",
    password:"",
};

const RegistrationForm = () => {
    const nameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();
    const dispatch = useDispatch();
 
    const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
    }
  return (
    <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={registrationFormSchema}>
      <Form >
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId} />
              <ErrorMessage   name="name" component="span" />
              <label htmlFor={emailFieldId}>Email</label>
              <Field type="email" name="email" id={emailFieldId} />
              <ErrorMessage  name="email" component="span" />
              <label htmlFor={passwordFieldId}>Password</label>
              <Field type="password" name="password" id={passwordFieldId} />
              <ErrorMessage name="password" component="span" />
			<button   type="submit">Register</button>
			</Form>
    </Formik>
  )
}

export default RegistrationForm