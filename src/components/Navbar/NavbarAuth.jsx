import { NavLink } from "react-router-dom";


const NavbarAuth = ()=> {
    return (
      <div >
        Це NavbarAuth
            <NavLink to="/signup" >SignUp</NavLink>
            |
            <NavLink to="/login" >LogIn</NavLink>
        </div>
    )
}

export default NavbarAuth;