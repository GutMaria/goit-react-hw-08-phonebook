import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import {useDispatch} from "react-redux";

import { current } from "../redux/auth/auth-operaions";

import Navbar from "./Navbar/Navbar";
import ContactsPage from '../pages/ContactsPage/ContactsPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const App = () => {

const dispatch = useDispatch();
// перевірка current користувача при перезавантажені сторінки. Токен відслідковую persist і зберігає в localStorage
  useEffect(()=> {
    dispatch(current())
  }, [dispatch]);

    return (
      <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route path="signup" element={<SignupPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="contacts" element={<ContactsPage/>} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
        </Routes>
    );
  }

export default App;

