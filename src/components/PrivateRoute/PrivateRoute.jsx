import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors'
import { Center, CircularProgress } from "@chakra-ui/react";

const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);

  if (!isLogin && token) {
    return <Center h='100vh'><CircularProgress isIndeterminate color='teal'/></Center>
  }

  if (!isLogin && !token) {
    return <Navigate to='/login'/>
  } 

  return <Outlet/>
}

export default PrivateRoute;