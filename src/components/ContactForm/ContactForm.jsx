import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from 'redux/contactsSlice';
import { Form, Field, Text, Input, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = () => { 
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleNumberChange = e => {
        setNumber(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addNewContact(name, number);
        formReset();               
    };

    const formReset = () => {
        setName('');
        setNumber(''); 
    }

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);  
 
    const addNewContact = (name, number) => {
        const contact = {
            id: nanoid(),
            name,
            number
        };
    
        const normalizedName = name.toLowerCase();

        if (contacts.find(contact =>
            contact.name.toLowerCase() === normalizedName
            )) {
            alert(`${name} is already in contacts`);
            return;
            };
    
        return dispatch(addContact(contact));
    };  
    
    return (
        <Form onSubmit={handleSubmit}>
            <Field>
                <Text>Name</Text>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}                    
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Field>
            <Field>
                <Text>Number</Text>
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}                    
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Field>
            <Button type="submit">Add contact</Button>
        </Form>
    )    
}