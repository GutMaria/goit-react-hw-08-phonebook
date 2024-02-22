import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contacts/contacts-operations'
import { selectVisibleContacts } from '../../redux/contacts/contacts-selectors'

// import css from './list.module.css'
import { Box, Button, Wrap, WrapItem } from '@chakra-ui/react'

const ContactsList = () => {

    const items = useSelector(selectVisibleContacts);

    const dispatch = useDispatch();

    const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
    }
    
    const elements = items.map(({id, name, number }) => <WrapItem key={id} w="100%" justifyContent="space-between" alignItems='center'  >{name}: {number}  <Button onClick={()=> onDeleteContact(id)} type="button" colorScheme='teal' size='xs' width='80px' >Delete</Button></WrapItem>)
    
    return (<Box fontSize='md' w='md' p='10px' borderWidth='1px' borderRadius='lg' borderColor='teal' overflow='hidden'>
        {Boolean(items.length) && <Wrap direction='column' w="100%">{elements}</Wrap>}
    </Box>
    )
}

export default ContactsList;