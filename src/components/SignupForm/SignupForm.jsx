import { useState, useId } from 'react';
import { Button, FormControl, FormLabel, Input, Box, Center} from '@chakra-ui/react'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
}

const SignupForm = ({onSubmit}) => {
  
  const [state, setState] = useState({ ...INITIAL_STATE });
  const { name, email, password } = state;

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleChange = ({target}) => {
    const { name, value } = target;
    setState({...state, [name]: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);    
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '360px' }}>
      <FormControl maxW={[180, 300]} isRequired bg='white' p="40px 30px 20px"  border='1px solid teal' borderRadius='15px' >
      <Box mb='10px'>
        <FormLabel htmlFor={nameId} >Name:</FormLabel>
          <Input onChange={handleChange} value={name} id={ nameId} type="text" name="name" maxW={[150, 270]}/>
      </Box>
      <Box mb='10px'>
        <FormLabel htmlFor={emailId}>Email:</FormLabel>
        <Input onChange={handleChange} id={emailId} value={email} type="text" name="email" maxW={[150, 270]}/>
      </Box>
      <Box mb='15px'>
        <FormLabel htmlFor={passwordId}>Password:</FormLabel>
          <Input onChange={handleChange} id={passwordId} value={password} type="password" name="password" maxW={[150, 270]} />
        </Box>
        <Center><Button type='submit' colorScheme='teal' >Sign up</Button></Center>
        
        </FormControl>
    </form>
  )
}

export default SignupForm;