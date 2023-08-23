
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selector';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input, Label } from 'components/Form/Form.styled'

export const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    
    const changeFilter = e => {

        const { value } = e.target;

        dispatch(setFilter(value));
        
    };
    
    
    return (<Label>
        Find contacts by name
        <Input type="text" name="filter" value={filter} onChange={changeFilter } />
    </Label>
    )
}
