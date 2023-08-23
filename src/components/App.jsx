import  Form  from './Form/Form'
import { Contacts } from './Contacts/Contacts'
import { Section } from './Section/Section'
import { Filter } from './Filter/Filter'
import { Container } from './App.styled';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/selector';
import { getContactsThunk } from 'redux/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';




const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);


      return <Container>
      <Section title='Phonebook'>
          <Form/>
      </Section>
          <Section title='Contacts'>
            <Filter />
        <Contacts />
    {isLoading && !error && <Loader />}
      </Section>
    </Container>
  
}

export default App
