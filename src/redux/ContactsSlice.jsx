import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState: { items: initContacts, filter: '' },
  reducers: {
    addNewContact: (state, action) => {
     state.items.push(action.payload)
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({id}) => id !== action.payload )
    },
    filteredContact: (state, action) => {
      state.filter = action.payload
    }

  }


});


const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  ContactSlice.reducer
);


//Actions
export const { addNewContact, deleteContact, filteredContact } = ContactSlice.actions;


////Selector

export const getContactItems = state => state.contacts.items;
export const getFilteredValue = state => state.contacts.filter
