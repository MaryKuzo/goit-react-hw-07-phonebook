import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';
import { ContactLi, ContactText, Button} from './ContactItems.styled'


const ContactItems = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
     <ContactLi key={id}>
        <ContactText>{name} : {number}</ContactText>
        <Button
        type='submit'
        onClick={()=> handleDeleteContact(id)}
        >Delete
        </Button>
      </ContactLi>
  )

}


ContactItems.propTypes = {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
};


export default ContactItems
