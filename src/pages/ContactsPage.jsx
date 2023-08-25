import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Contacts } from 'components/Contacts/Contacts';
import { getIsLoading } from 'redux/contacts/selector';
import { fetchContacts } from 'api/contactsAPI';
import { Filter } from 'components/Filter/Filter';
import Form from 'components/Form/Form';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    fetchContacts().then(data => {
    dispatch(data)
  })
  }, [dispatch]);

  return (
    <>
      <Form />
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter/>
      <Contacts />
    </>
  );
}