import { useSelector } from "react-redux";
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors'
import NavbarAuth from './NavbarAuth'
import NavbarUser from './NavbarUser'
import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import { Container } from '@chakra-ui/react'


const Navbar = () => {
  const isLogin = useSelector(selectIsLogin)
  const token = useSelector(selectToken);

    if (!isLogin && token) {
    return <p>...Loading</p>
  }

  return (<Container m='60px auto'>
    <div style={{ display: 'flex', justifyContent: "space-between" }}>
      <Link to="/contacts">My phone book</Link>
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
    

    
    
    <Suspense fallback={<p>...loading Suspense</p>}>
      <Outlet />
    </Suspense>
    
  </Container>)
}

export default Navbar;