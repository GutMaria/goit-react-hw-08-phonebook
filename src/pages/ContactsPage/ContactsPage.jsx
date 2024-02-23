import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import ContactsList from '../../components/ContactsList/ContactsList'
import Filter from "../../components/Filter/Filter";
import { fetchContacts } from '../../redux/contacts/contacts-operations'
import { selectContacts } from '../../redux/contacts/contacts-selectors'
import { Heading, Box } from '@chakra-ui/react'


const ContactsPage = () => {

  const {items, isLoading, error} = useSelector(selectContacts);

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchContacts())
      },[dispatch])

    return (
      <Box mt='50px'>
        <Heading size='md' mt='0px'>Your phonebook</Heading>
        <ContactsForm />
        {/* якщо є список контактів рендеримо розмітку, якщо пусто - то ні */}
        {isLoading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {Boolean(items.length) && <>
          {/* <h2>Contacts</h2> */}
          <Filter/>
          <ContactsList />
        </>
        }
      </Box>
    );
  }

export default ContactsPage;

