import React, { useContext } from 'react'
import style from './header.module.css'
import Button from './UI/button/Button'
import { Link } from 'react-router-dom'
import Context from '../context'

export default function Header() {

  const { authStatus, setAuthStatus, user } = useContext(Context)

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
        <>
            <Button onClick={logOut}>
              <Link to='/'>Выйти</Link>
            </Button>
            <div className={style.login}>{user.login}</div>
        </>
          
          :
          <Button>
            <Link to='/AdminPage'>Войти</Link>
          </Button>
        }
      </nav>

    </div>
  )
}
