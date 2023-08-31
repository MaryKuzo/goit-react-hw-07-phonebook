import { ContactUl } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContactItems, getFilteredValue, isLoading } from 'redux/ContactsSlice';
import ContactItems from 'components/ContactItems/ContactItems';
import { useEffect } from 'react';
import * as contactsOperation from 'redux/ContactsOperations';
import { Spinner } from 'components/Spinner.jsx/Spinner';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(getContactItems);
  const filter = useSelector(getFilteredValue);
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactsItems.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  const visibleContacts = getFilteredContacts();

  return (
    <ContactUl>
      {loading ? (
        <Spinner/>
      ) : visibleContacts.length === 0 ? (
        <p>No contacts to display.</p>
      ) : (
        visibleContacts.map(({ id, name, number }) => (
          <ContactItems key={id} id={id} name={name} number={number} />
        ))
      )}
    </ContactUl>
  );
};

export default ContactList;
