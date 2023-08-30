

import {ContactUl} from './ContactList.styled'
import { useSelector } from 'react-redux';
import { getContactItems, getFilteredValue } from 'redux/ContactsSlice';
import ContactItems from 'components/ContactItems/ContactItems';

const ContactList = () => {
  const contactsItems = useSelector(getContactItems);
  const filter = useSelector(getFilteredValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase()

    return contactsItems.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter)
    })
  };

  const visibleContacts = getFilteredContacts()


  return (
    <ContactUl>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItems key={id} id={ id} name={name} number={number} />
      ))}
    </ContactUl>)
};



export default ContactList
