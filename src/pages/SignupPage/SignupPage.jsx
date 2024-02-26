import SignupForm from "../../components/SignupForm/SignupForm"
import {  useDispatch, useSelector } from "react-redux"
import {signup,  clearAuthError} from '../../redux/auth/auth-operaions'
import { selectAuthLoading, selectAuthError } from '../../redux/auth/auth-selectors'
import { CircularProgress, Center, Heading, Box } from '@chakra-ui/react'
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const SignupPage = () => {
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = (body) => {
    dispatch(signup(body))
  }

  if (error) {
    Notify.failure('Oops, something went wrong, please try again');
      dispatch(clearAuthError());
    }
  
  return (<Box mt={["30px", '50px'] }>
    <Heading size='lg' mt='0px' >Please register</Heading>
    <SignupForm onSubmit={handleSignup } />
    {loading && <Center h='100px'><CircularProgress isIndeterminate color='teal'/></Center>}
    {/* {error && (Notify.failure('Oops, something went wrong, please try again')) } */}
        </Box> )
}

export default SignupPage