import { ContactItem } from 'components/ContactItem';
import { List, Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSlice';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const visibleContacts = getVisibleContacts();
    
    return (
        <List>
            {visibleContacts.map(({ id, name, number }) => (
                <Item key={id}>
                    <ContactItem
                        id={id}
                        name={name}
                        number={number}                        
                    />                    
                </Item>
            ))}
        </List>);
};