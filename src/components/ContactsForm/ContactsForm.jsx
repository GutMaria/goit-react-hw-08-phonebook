import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts} from '../../redux/contacts/contacts-selectors'
import { addContact } from '../../redux/contacts/contacts-operations'
// import { nanoid } from "nanoid";
// import css from './contacts-form.module.css'
import {  Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

const INITIAL_STATE = {
    name: '',
    number: '',
}


const ContactsForm = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const {items} = useSelector(selectContacts);
  const dispatch = useDispatch();



  const onAddContact = (data) => {
    // Якщо контакт вже існує:
    const isExist = items.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase());
    
    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return
    }

    dispatch(addContact(data));
    setState({...INITIAL_STATE});
  };

  // let contactNameId = nanoid();
  // let contactNumberId = nanoid();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState( prevState =>({...prevState, [name]: value }));
  }

  const handleSubmit = (e)=> {
        e.preventDefault();
        onAddContact({...state});
  }
  
    return (
      <form onSubmit={handleSubmit}  style={{ maxWidth: '360px' }} >
        <FormControl  maxW={[180, 300]} isRequired bg='white'  p="20px 30px"  border='1px solid teal' borderRadius='10px'>
        <Box mb='10px' >
          <FormLabel fontSize='sm' >Name</FormLabel>
          <Input value={state.name} type="text" size='sm'  name="name" onChange={handleChange} maxW={[150, 270]}/>
        </Box>
        <Box mb='20px'>
        <FormLabel fontSize='sm'>Number</FormLabel>
          <Input value={state.number} type="tel" size='sm'  name="number" onChange={handleChange} maxW={[150, 270]}/>
        </Box>
          <Button type="submit" colorScheme='teal' size='sm' >Add contact</Button>
          </FormControl>
      </form>
    )
  }

export default ContactsForm;