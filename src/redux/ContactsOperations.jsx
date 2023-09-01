import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://64f06f9c8a8b66ecf779a99b.mockapi.io/contacts'


export const fetchContacts = createAsyncThunk('contacts/fetchAll',
  async () => {
  const response = await axios.get('/');
  return response.data;
  });

export const addContact = createAsyncThunk('contacts/addContact',
  async (newContact) => {
    try {

      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      throw error;
    }
  });


export const deleteContact = createAsyncThunk('contacts/deleteContact',
  async (id) => {
    try {

      await axios.delete(`/contacts/${id}`);

      return id;
    } catch (error) {
   
      throw error;
    }
  });
