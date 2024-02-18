import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { current } from "../redux/auth/auth-operaions";

import Navbar from "./Navbar/Navbar";
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'
import PublicRoute from '../components/PublicRoute/PublicRoute'

const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'))
const SignupPage = lazy(() => import('../pages/SignupPage/SignupPage'))
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'))
const NotFoundPage = lazy(()=> import('../pages/NotFoundPage/NotFoundPage'))
// import ContactsPage from '../pages/ContactsPage/ContactsPage'
// import SignupPage from '../pages/SignupPage/SignupPage'
// import LoginPage from '../pages/LoginPage/LoginPage'


const App = () => {

const dispatch = useDispatch();
// перевірка current користувача при перезавантажені сторінки. Токен відслідковую persist і зберігає в localStorage
  useEffect(()=> {
    dispatch(current())
  }, [dispatch]);

    return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route element={<PublicRoute/>}>
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        
        </Routes>
    );
  }

export default App;

