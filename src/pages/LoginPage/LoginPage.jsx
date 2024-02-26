import LoginForm from "../../components/LoginForm/LoginForm"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import {login, clearAuthError} from '../../redux/auth/auth-operaions'
import { selectAuthLoading, selectAuthError, selectIsLogin } from '../../redux/auth/auth-selectors'
import { CircularProgress, Center, Heading, Box } from '@chakra-ui/react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


Notify.init({width: '300px',
position: 'center-top',  });


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
  
  if (error) {
    Notify.failure('Oops, something went wrong, please try again');
      dispatch(clearAuthError());
    }



  
  return (<Box mt={["30px", '50px'] }>
    <Heading size='lg' mt='0px' >Please log in</Heading>
    <LoginForm onSubmit={handleLogin } />
    {loading && <Center h='100px'><CircularProgress isIndeterminate color='teal'/></Center>}
    {/* {error && (Notify.failure('Oops, something went wrong, please try again')) } */}
        </Box> )
}

export default LoginPage