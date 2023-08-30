import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import {addNewContact, getContactItems} from '../redux/ContactsSlice'
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';


const useAddContact = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContactItems);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsName = contactsItems.map(contact => contact.name)

  const handleChange = event => {
    const { name, value } = event.currentTarget

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
  }
  };
  const handleSubmit = event => {
    event.preventDefault();

    const sameName = contactsName.some(
      contactName => contactName.toLowerCase() === name.toLowerCase()
    )
    if (sameName) {
      toast.error(`${name} is already in contacts`);
      return
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addNewContact(newContact));
    reset()


  }
    const reset = () => {
      setName('');
      setNumber('');
    };

  return { name, number, handleChange, handleSubmit }
};

  export default useAddContact;
