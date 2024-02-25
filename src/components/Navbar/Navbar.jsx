import { useSelector } from "react-redux";
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors'
import NavbarAuth from './NavbarAuth'
import NavbarUser from './NavbarUser'
import { Link as ReactRouterLink, Outlet} from "react-router-dom";
import { Suspense } from "react";
import { Container, Flex, CircularProgress, Center, Link as ChakraLink} from '@chakra-ui/react'


const Navbar = () => {
  const isLogin = useSelector(selectIsLogin)
  const token = useSelector(selectToken);

    if (!isLogin && token) {
    return <Center h='100vh'><CircularProgress isIndeterminate color='teal'/></Center>
  }

  return (<Container display='block' m='60px auto' p='0px 40px' width='auto'  >
    <Flex justifyContent="space-between"  alignItems='baseline'>
      <ChakraLink as={ReactRouterLink} to="/contacts" fontSize='2xl' color='teal' fontWeight='medium' mr="10px" >Phonebook</ChakraLink>
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </Flex>

    <Suspense fallback={<Center h='100vh'><CircularProgress isIndeterminate color='teal'/></Center>}>
      <Outlet />
    </Suspense>
    
  </Container>)
}

export default Navbar;