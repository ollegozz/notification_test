import React, { useState, useContext } from 'react'
import style from './header.module.css'
import Button from './UI/button/Button'
import { Link } from 'react-router-dom'
import Context from '../context'

export default function Header() {

  const { authStatus, setAuthStatus } = useContext(Context)

  const logOut = () => {
    setAuthStatus(false)
  }

  return (
    <div className={style.header}>
      <nav className={style.nav}>
        <div>
          <Link to='/'>UserPage</Link>
        </div>
        <div>
          <Link to='/AdminPage'>AdminPage</Link>
        </div>
        {authStatus ?
          <Button onClick={logOut}>
            <Link to='/'>Выйти</Link>
          </Button>
          :
          <Button>
            <Link to='/AdminPage'>Войти</Link>
          </Button>
        }
      </nav>

    </div>
  )
}
