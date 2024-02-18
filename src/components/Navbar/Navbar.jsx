import { useSelector } from "react-redux";
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors'
import NavbarAuth from './NavbarAuth'
import NavbarUser from './NavbarUser'
import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";


const Navbar = () => {
  const isLogin = useSelector(selectIsLogin)
  const token = useSelector(selectToken);

    if (!isLogin && token) {
    return <p>...Loading</p>
  }

  return (<div className="container">
    <div style={{ display: 'flex', justifyContent: "space-between" }}>
      <Link to="/contacts">My phone book</Link>
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
    

    
    
    <Suspense fallback={<p>...loading Suspense</p>}>
      <Outlet />
    </Suspense>
    
  </div>)
}

export default Navbar;