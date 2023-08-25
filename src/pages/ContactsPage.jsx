import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Contacts } from 'components/Contacts/Contacts';
import { getIsLoading } from 'redux/contacts/selector';
import { Filter } from 'components/Filter/Filter';
import { getContactsThunk } from 'redux/thunk';
import { Loader } from 'components/Loader/Loader';
import Form from 'components/Form/Form';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
   dispatch (getContactsThunk())
  }, [dispatch]);

  return (
    <>
      <Form />
      <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      </HelmetProvider>
      <Filter/>
      <Contacts />
      {isLoading && <Loader/>}
    </>
  );
}