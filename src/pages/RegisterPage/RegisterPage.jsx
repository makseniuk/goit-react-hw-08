import { useSelector } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (<>
  <Helmet>
          <title>Register Page</title>
  </Helmet>
    {loading && !error ? <Loader />:<RegistrationForm />}
  </>
    
  )
}

export default RegisterPage