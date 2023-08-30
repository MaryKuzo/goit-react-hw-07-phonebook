
import {FilterContainer, FilterText, FilterDesc, FilterInput} from './Filter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { filteredContact, getFilteredValue } from 'redux/ContactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilteredValue)

  const handleFilteredContacts = e => {
    dispatch(filteredContact(e.currentTarget.value));
    
  }

  return (
    <FilterContainer>
      <FilterText>Contacts</FilterText>
      <FilterDesc>Find contacts by name</FilterDesc>
      <FilterInput
        type="name"
        name='filter'
        value={filter}
        onChange={handleFilteredContacts}
      />
    </FilterContainer>
  )
};



export default Filter;
