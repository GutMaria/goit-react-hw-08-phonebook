import { useSelector } from "react-redux";
import { selectIsLogin } from '../../redux/auth/auth-selectors'
import NavbarAuth from './NavbarAuth'
import NavbarUser from './NavbarUser'
import { Outlet } from "react-router-dom";


const Navbar = () => {
const isLogin = useSelector(selectIsLogin)

  return (<div className="container">
    {isLogin ? <NavbarUser /> : <NavbarAuth />}
    <Outlet/>
  </div>)
}

export default Navbar;