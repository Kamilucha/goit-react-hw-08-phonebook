import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { Button } from 'components/Form/Form.styled'
import { Item, Text } from './ContactItem.styled'
import { deleteContactThunk } from 'redux/thunk';

export const ContactItem = ({ name, number, id }) => {

    const dispatch = useDispatch();

    const handleDeleteContact = () => dispatch(deleteContactThunk(id));
    
    return (
        <Item key={id}>
        <Text>{name} : {number}</Text>
         <Button type="button" onClick={handleDeleteContact}>Delete</Button>
         </Item>)
           
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired, 
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired, 
}