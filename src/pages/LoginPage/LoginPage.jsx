import LoginForm from "../../components/LoginForm/LoginForm"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import {login} from '../../redux/auth/auth-operaions'
import {selectAuthLoading, selectAuthError, selectIsLogin} from '../../redux/auth/auth-selectors'




const LoginPage = () => {
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);
  // const { name } = useSelector(selectUser);

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
    {loading && <p>...loading</p>}
    {error && <p>Помилка: {error}</p>}
    {/* {isLogin && <h3>Вітаємо { name}</h3>} */}
        </> )
}

export default LoginPage