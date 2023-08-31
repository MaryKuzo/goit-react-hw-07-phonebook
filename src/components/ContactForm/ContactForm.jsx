import React from 'react';
import { FormContainer, FormLabel, FormInput, Button, FormText } from './ContactForm.styled';
import useAddContact from 'hooks/useAddContact';
import { Spinner } from 'components/Spinner.jsx/Spinner';

const ContactForm = () => {
  const { name, number, handleChange, handleSubmit, localLoading } = useAddContact();

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormText>Phonebook</FormText>
      <FormLabel htmlFor={name}>
        Name
        <FormInput
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={name}
        />
      </FormLabel>
      <FormLabel htmlFor={number}>
        Number
        <FormInput
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={number}
        />
      </FormLabel>
<Button type="submit">
  {localLoading ? <Spinner /> : 'Add contact'}
</Button>

    </FormContainer>
  );
};

export default ContactForm;
