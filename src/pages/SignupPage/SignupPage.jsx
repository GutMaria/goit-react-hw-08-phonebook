import SignupForm from "../../components/SignupForm/SignupForm"
import {  useDispatch, useSelector } from "react-redux"
import {signup} from '../../redux/auth/auth-operaions'
import { selectAuthLoading, selectAuthError } from '../../redux/auth/auth-selectors'
import { CircularProgress, Center, AlertIcon, Alert} from '@chakra-ui/react'



const SignupPage = () => {
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = (body) => {
    dispatch(signup(body))
  }
  
  return (<>
    <h1>Please register</h1>
    <SignupForm onSubmit={handleSignup } />
    {loading && <Center h='100px'><CircularProgress isIndeterminate color='teal'/></Center>}
    {error && <Alert w={[208, 328]} mt='20px' borderRadius='10px' status='error'>
    <AlertIcon />
    {error}
  </Alert> }
        </> )
}

export default SignupPage