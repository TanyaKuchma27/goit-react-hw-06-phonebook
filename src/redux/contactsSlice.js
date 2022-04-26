import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialContacts from '../contacts.json';

const initialState = {
  items: initialContacts,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact({items}, action) {
      items.unshift(action.payload);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {      
      state.items = state.items.filter(item => item.id !== action.payload);      
    },  
  },
});

const persistConfig = {
  key: 'contacts',
  storage  
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact } = contactsSlice.actions;
export const { filterContact } = contactsSlice.actions;
export const { deleteContact } = contactsSlice.actions;

// Selectors
export const getContacts = ({ contacts }) => contacts.items;
export const getFilter = ({ contacts }) => contacts.filter;