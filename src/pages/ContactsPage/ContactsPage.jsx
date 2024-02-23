import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import ContactsList from '../../components/ContactsList/ContactsList'
import Filter from "../../components/Filter/Filter";
import { fetchContacts } from '../../redux/contacts/contacts-operations'
import { selectContacts } from '../../redux/contacts/contacts-selectors'
import { Heading, Box, Alert, AlertIcon } from '@chakra-ui/react'
import { Center,CircularProgress } from '@chakra-ui/react'


const ContactsPage = () => {

  const {items,  error} = useSelector(selectContacts);

  const dispatch = useDispatch();

  const [isFirstMount, setIsFirstMount] = useState(true);
  
  useEffect(() => {
    if (isFirstMount) {
      dispatch(fetchContacts());
      setIsFirstMount(false);
    }
  }, [dispatch, isFirstMount]);

    return (
      <Box mt='50px'>
        {isFirstMount && <Center ><CircularProgress isIndeterminate color='teal' /></Center>}
        <Heading size='md' mt='0px'>Your phonebook</Heading>
        <ContactsForm />
        {/* якщо є список контактів рендеримо розмітку, якщо пусто - то ні */}
        {Boolean(items.length) && <>
          <Filter/>
          <ContactsList />
        </>
        }
        {error && <Alert w={[208, 328]} mt='20px' borderRadius='10px' status='error'>
    <AlertIcon />
    {error}
  </Alert> }
      </Box>
    );
  }

export default ContactsPage;

