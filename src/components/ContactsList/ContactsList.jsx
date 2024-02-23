import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from '../../redux/contacts/contacts-operations'
import { selectVisibleContacts } from '../../redux/contacts/contacts-selectors'

// import css from './list.module.css'
import { Box, Button, Wrap, WrapItem } from '@chakra-ui/react'

const ContactsList = () => {

    const items = useSelector(selectVisibleContacts);
    const [deletingContactId, setDeletingContactId] = useState(null);

    const dispatch = useDispatch();

    const onDeleteContact = async (id) => {
        setDeletingContactId(id);
        await dispatch(deleteContact(id));
        setDeletingContactId(null);
    }
    
    const elements = items.map(({ id, name, number }) => <WrapItem key={id} justifyContent="space-between" alignItems='center'  >{name}: {number}
        {deletingContactId === id ?
            <Button isLoading colorScheme='teal' variant='ghost' size='xs' w='50px' /> :
            (<Button onClick={() => onDeleteContact(id)} type="button" colorScheme='teal' variant='ghost' size='xs' maxW={[50, 80]} >Delete</Button>)}  </WrapItem>)

    return (<Box fontSize='md' bg='white'  maxW={[180, 300]}  p="0px 30px"  border='1px solid teal' borderRadius='10px' >
        {Boolean(items.length) && <Wrap margin='0px' direction='column'   >{elements}</Wrap>}
    </Box>
    )
}

export default ContactsList;