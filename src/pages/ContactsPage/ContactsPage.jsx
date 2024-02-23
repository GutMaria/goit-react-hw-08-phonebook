import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import ContactsList from '../../components/ContactsList/ContactsList'
import Filter from "../../components/Filter/Filter";
import { fetchContacts } from '../../redux/contacts/contacts-operations'
import { selectContacts } from '../../redux/contacts/contacts-selectors'
import { Heading, Center,CircularProgress, Box, Alert, AlertIcon } from '@chakra-ui/react'


const ContactsPage = () => {

  const {items, isLoading, error} = useSelector(selectContacts);

  const dispatch = useDispatch();
  
      useEffect(() => {
      dispatch(fetchContacts())
      }, [dispatch])

    return (
      <Box   mt='50px'>
        <Heading size='md' mt='0px'>Your phonebook</Heading>
        <ContactsForm />
        {/* якщо є список контактів рендеримо розмітку, якщо пусто - то ні */}
        {isLoading && <Center ><CircularProgress isIndeterminate color='teal' /></Center>}
        {error && <Alert w={[208, 328]} mt='20px' borderRadius='10px' status='error'>
    <AlertIcon />
    {error}
  </Alert> }
        {Boolean(items.length) && <>
          <Filter/>
          <ContactsList />
        </>
        }
      </Box>
    );
  }

export default ContactsPage;

