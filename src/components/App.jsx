import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

// import { Home } from '../pages/Home'

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};






// import  Form  from './Form/Form'
// import { Contacts } from './Contacts/Contacts'
// import { Section } from './Section/Section'
// import { Filter } from './Filter/Filter'
// import { Container } from './App.styled';
// import { useEffect } from 'react';
// import { getError, getIsLoading } from 'redux/contacts/selector';
// import { getContactsThunk } from 'redux/thunk';
// import { useDispatch, useSelector } from 'react-redux';
// import { Loader } from './Loader/Loader';




// const App = () => {

//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(getContactsThunk());
//   }, [dispatch]);


//       return <Container>
//       <Section title='Phonebook'>
//           <Form/>
//       </Section>
//           <Section title='Contacts'>
//             <Filter />
//         <Contacts />
//     {isLoading && !error && <Loader />}
//       </Section>
//     </Container>
  
// }

// export default App



