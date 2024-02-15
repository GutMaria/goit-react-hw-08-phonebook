import { useState, useId } from 'react';

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
    console.log('handleSubmit');
    console.log(state);
    onSubmit(state);
    console.log('Зробили запит')
    setState({ ...INITIAL_STATE })
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameId}>Name:</label>
        <input onChange={handleChange} value={name} type="text" name="name" id={nameId}/>
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input onChange={handleChange} value={email} type="text" name="email" id={emailId} />
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <input onChange={handleChange} value={password} type="password" name="password" id={passwordId}/>
      </div>
      <button type='submit'>SignUp</button>
    </form>
  )
}

export default SignupForm;