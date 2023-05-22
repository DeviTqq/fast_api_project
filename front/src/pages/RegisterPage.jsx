import { SignUp } from 'components/SignUp'
import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
      <h1>Регистрация</h1>
    <SignUp />
      <p>
        У вас уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </div>
  )
}

export  {RegisterPage}