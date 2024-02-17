import { useSelector, useDispatch } from "react-redux";
import { selectUser } from '../../redux/auth/auth-selectors'

import { logout } from "../../redux/auth/auth-operaions";


const NavbarUser = ()=> {
    const { name } = useSelector(selectUser);
    
    const dispatch = useDispatch();
    const onLogout = ()=> dispatch(logout());

    return (
        <div >
            {name} 
            <button onClick={onLogout}  type="button">LogOut</button>
        </div>
    )
}

export default NavbarUser;