import { Login } from 'components/Login'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
        <h1>Войти</h1>
        <Login />
        <p>
            Или <Link style={{color: "white", borderBottom: "1px solid white"}} to="/register">Зарегестрироваться</Link>
        </p>
    </div>
  )
}

export {LoginPage}