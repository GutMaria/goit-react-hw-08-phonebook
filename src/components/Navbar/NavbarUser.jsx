import { useSelector, useDispatch } from "react-redux";
import { selectUser } from '../../redux/auth/auth-selectors'

import { logout } from "../../redux/auth/auth-operaions";
import {  Button, Text, Flex } from '@chakra-ui/react'


const NavbarUser = ()=> {
    const { name } = useSelector(selectUser);
    
    const dispatch = useDispatch();
    const onLogout = ()=> dispatch(logout());

    return (
        <Flex flexDirection={["column", "row"]} alignItems='baseline' >
            <Text fontSize='xl' color='teal' fontWeight='medium' mr='15px' mb='10px'>{name}</Text> 
            <Button onClick={onLogout} w='80px' type="button" colorScheme='teal' variant='outline'>Log out</Button>
        </Flex>
    )
}

export default NavbarUser;