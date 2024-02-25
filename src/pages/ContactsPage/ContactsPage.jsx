import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import ContactsList from '../../components/ContactsList/ContactsList'
import Filter from "../../components/Filter/Filter";
import { fetchContacts } from '../../redux/contacts/contacts-operations'
import { selectContacts } from '../../redux/contacts/contacts-selectors'
import { Heading, Box} from '@chakra-ui/react'
import { Center, CircularProgress } from '@chakra-ui/react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


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
    <Box mt={["30px", '50px'] }>
        {isFirstMount && <Center ><CircularProgress isIndeterminate color='teal' /></Center>}
        <Heading size='md' mt='0px' >Your contacts</Heading>
        <ContactsForm />
        {/* якщо є список контактів рендеримо розмітку, якщо пусто - то ні */}
        {Boolean(items.length) && <>
          <Filter/>
          <ContactsList />
        </>
        }
        {error && (Notify.failure('Oops, something went wrong, please try again')) }
      </Box>
    );
  }

export default ContactsPage;

