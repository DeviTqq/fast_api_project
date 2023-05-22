import { useDispatch } from 'react-redux'// Получив пользователя, кладем его в redux
import {useNavigate} from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from './Form'
import {setUser} from '../pages/store/slices/userSlice'

import React from 'react'

 const SignUp = () => {
    const dispatch = useDispatch() // копия 
    const navigate = useNavigate()

    
    const handleRegister = (email, password) => { // функция, при вызове которой учетные данные из формы отправятся на сервер и мы получим нужного пользователя
        const auth = getAuth();
        
        createUserWithEmailAndPassword(auth, email, password)  // Запрос , возвращает промис с определенной информацией о пользователе
            .then(({user}) => {   // Нам нужен только пользователь, деструктурируем его
              console.log(user);  
              dispatch(setUser({  // Устанавливаем нужный объект, тот самый который мы ожидаем в payload
                email: user.email,
                id: user.uid,
                token: user.accesToken
              }))
              navigate("/")
            } )
            .catch(console.error)
    } 
  return (
    <Form 
    title = "зарегистрироваться"
    handleClick = {handleRegister}
    />
  )
}
export {SignUp}