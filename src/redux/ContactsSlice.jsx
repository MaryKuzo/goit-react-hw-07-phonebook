import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './ContactsOperations';


export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    filteredContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(({ id }) => id !== action.payload);
      })
  }
});

export const contactsSliceReducer = contactSlice.reducer;

//Actions
export const { filteredContact } = contactSlice.actions;

//Selector
export const getContactItems = state => state.contacts.items;
export const getFilteredValue = state => state.contacts.filter;
export const isLoading = state => state.contacts.isLoading;
