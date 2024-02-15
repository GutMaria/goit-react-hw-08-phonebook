import SignupForm from "../../components/SignupForm/SignupForm"
import {  useDispatch, useSelector } from "react-redux"
import {signup} from '../../redux/auth/auth-operaions'
import {selectAuthLoading, selectAuthError, selectIsLogin, selectUser} from '../../redux/auth/auth-selectors'




const SignupPage = () => {
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleSignup = (body) => {
    dispatch(signup(body))
  }
  
  return (<>
    <h1>Сторінка Реєстрації</h1>
    <SignupForm onSubmit={handleSignup } />
    {loading && <p>...loading</p>}
    {error && <p>Помилка: {error}</p>}
    {isLogin && <h3>Вітаємо { name}</h3>}
        </> )
}

export default SignupPage