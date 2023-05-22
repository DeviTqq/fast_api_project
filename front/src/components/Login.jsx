import React from 'react'
import {Form} from './Form'
import { useDispatch } from 'react-redux'// Получив пользователя, кладем его в redux
import {setUser} from '../pages/store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'




// Возвращаем только форму, передавая ей нужную информацию
const Login = () => {

    const dispatch = useDispatch() // копия 
    const navigate = useNavigate()
    
// нам нужно получить здесь пользователя
    const handleLogin = (email, password) => { // функция, при вызове которой учетные данные из формы отправятся на сервер и мы получим нужного пользователя
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)  // Запрос , возвращает промис с определенной информацией о пользователе
            .then(({user}) => {
              console.log(user);  
              dispatch(setUser({  // Устанавливаем нужный объект, тот самый который мы ожидаем в payload
                email: user.email,
                id: user.uid,
                token: user.accesToken
              }))
              navigate("/")
            })
            .catch(() => alert('Пользователя не существует'))
    } 
    
  return (
    <Form 
    title='Войти'
    handleClick={handleLogin}
    />
  )
}

export {Login}
