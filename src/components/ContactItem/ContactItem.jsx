import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import {deleteContact} from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <div>
            {name}:  {number}
            <Button
                type="button"
                onClick={() => dispatch(deleteContact(id))}                
            >
            Delete
            </Button>
        </div>);
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired   
}