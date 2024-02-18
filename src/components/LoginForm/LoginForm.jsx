import { useState, useId } from 'react';

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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input onChange={handleChange} value={email} type="text" name="email" id={emailId} />
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <input onChange={handleChange} value={password} type="password" name="password" id={passwordId}/>
      </div>
      <button type='submit'>LogIn</button>
    </form>
  )
}

export default LoginForm;