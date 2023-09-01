import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getContactItems,isLoading} from '../redux/ContactsSlice'
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import * as contactsOperation from '../redux/ContactsOperations'
import { useEffect } from "react";


const useAddContact = () => {
  const dispatch = useDispatch();

  const contactsItems = useSelector(getContactItems);
  const globalLoading = useSelector(isLoading);
  const [localLoading, setLocalLoading] = useState(false)

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsName = contactsItems.map(contact => contact.name)

  useEffect(() => {
    if (!globalLoading) {
      setLocalLoading(false);
    }
  }, [globalLoading])


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
    setLocalLoading(true)

    dispatch(contactsOperation.addContact(newContact));
    reset()


  }
const reset = () => {
  setName('');
  setNumber('');
  setTimeout(() => setLocalLoading(false), 500);
};


  return { name, number, handleChange, handleSubmit, localLoading }
};

  export default useAddContact;
