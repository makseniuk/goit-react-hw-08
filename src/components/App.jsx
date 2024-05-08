import './App.css'
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import NoFoundPage from '../pages/NoFoundPage/NoFoundPage';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Loader from './Loader/Loader';


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

function App() { 
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);


  useEffect(() => {
    dispatch(refreshUser());    
  }, [dispatch]);

  return isRefreshing ? (<Loader />) : (<> 
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/register" element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>} />
        <Route path="/login" element={<RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>} />
          <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
          <Route path="*" element={<NoFoundPage/>}/>
        </Routes>
    </Layout>
      
  </>
  )
}

export default App