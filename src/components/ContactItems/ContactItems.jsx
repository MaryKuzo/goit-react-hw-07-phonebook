import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from 'redux/ContactsSlice';
import { ContactLi, ContactText, Button } from './ContactItems.styled';
import { Spinner } from 'components/Spinner.jsx/Spinner';

import * as contactsOperation from 'redux/ContactsOperations';

const ContactItems = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const globalLoading = useSelector(isLoading);
  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    if (!globalLoading) {
      setLocalLoading(false);
    }
  }, [globalLoading]);

  const handleDeleteContact = (id) => {
    setLocalLoading(true);
    dispatch(contactsOperation.deleteContact(id));
  };

  return (
    <ContactLi>
      <ContactText>
        {name} : {number}
      </ContactText>
      <Button type="button" onClick={() => handleDeleteContact(id)}>
        {localLoading ? <Spinner /> : 'Delete'}
      </Button>
    </ContactLi>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItems;
