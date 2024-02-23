import LoginForm from "../../components/LoginForm/LoginForm"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import {login} from '../../redux/auth/auth-operaions'
import { selectAuthLoading, selectAuthError, selectIsLogin } from '../../redux/auth/auth-selectors'
import { CircularProgress, Center, AlertIcon, Alert} from '@chakra-ui/react'




const LoginPage = () => {
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const handleLogin = (body) => {
    dispatch(login(body))
  }

  if(isLogin) {
        return <Navigate to="/contacts" /> 
    }
  
  return (<>
    <h1>Please log in</h1>
    <LoginForm onSubmit={handleLogin } />
    {loading && <Center h='100px'><CircularProgress isIndeterminate color='teal'/></Center>}
    {error && <Alert w={[208, 328]} mt='20px' borderRadius='10px' status='error'>
    <AlertIcon />
    {error}
  </Alert> }
        </> )
}

export default LoginPage