import { Field, Text, Input } from './Filter.styled';
import { getFilter, filterContact} from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {   
    const dispatch = useDispatch();
    const filterValue = useSelector(getFilter);

    return (
        <Field>
            <Text>Find contacts by name</Text>
            <Input
                type="text"                
                value={filterValue}                
                onChange={e => dispatch(filterContact(e.target.value))}
            />
        </Field>
    );
};