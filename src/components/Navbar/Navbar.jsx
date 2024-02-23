import { useSelector } from "react-redux";
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors'
import NavbarAuth from './NavbarAuth'
import NavbarUser from './NavbarUser'
import { Outlet} from "react-router-dom";
import { Suspense } from "react";
import { Container, Flex, CircularProgress, Center} from '@chakra-ui/react'


const Navbar = () => {
  const isLogin = useSelector(selectIsLogin)
  const token = useSelector(selectToken);

    if (!isLogin && token) {
    return <Center h='100vh'><CircularProgress isIndeterminate color='teal'/></Center>
  }

  return (<Container m='60px auto' p='0px 40px' width='auto' >
    <Flex  justifyContent="end" alignItems='center'>
      {/* <ChakraLink as={Link} to="/contacts">My phone book</ChakraLink> */}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </Flex>
    

    
    
    <Suspense fallback={<p>...loading Suspense</p>}>
      <Outlet />
    </Suspense>
    
  </Container>)
}

export default Navbar;