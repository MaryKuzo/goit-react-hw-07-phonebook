import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from './ContactsSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
  },
});
