import { useState, useId} from 'react';

import { Box, Button, FormControl, FormLabel, Input, Center} from '@chakra-ui/react'

const INITIAL_STATE = {
  email: '',
  password: '',
}

const LoginForm = ({onSubmit}) => {
  
  const [state, setState] = useState({ ...INITIAL_STATE });
  const { email, password } = state;

  const emailId = useId();
  const passwordId = useId();

  const handleChange = ({target}) => {
    const { name, value } = target;
    setState({...state, [name]: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    setState({ ...INITIAL_STATE })
    
  }

  return (<form onSubmit={handleSubmit} style={{ maxWidth: '360px' }}>
    <FormControl maxW={[180, 300]} width='100%' isRequired bg='white'  p="40px 30px 20px"  border='1px solid teal' borderRadius='15px'>
        <Box mb='10px' >
        <FormLabel htmlFor={emailId}>Email:</FormLabel>
        <Input onChange={handleChange} id={emailId} value={email} type='email' name="email"  maxW={[150, 270]} />
      </Box>
      <Box mb='20px'>
        <FormLabel htmlFor={passwordId}>Password:</FormLabel>
        <Input onChange={handleChange} id={passwordId} value={password} type="password" name="password" maxW={[150, 270]} />
      </Box>
      <Center><Button type='submit' colorScheme='teal' >
    Log in
  </Button></Center>
      
    </FormControl>
    </form>
  )
}

export default LoginForm;