import React from 'react'
import style from './header.module.css'
import Button from './UI/button/Button'
import { Link } from 'react-router-dom'
import AdminPage from './AdminPage'
import UserPage from './UserPage'

export default function Header() {
  return (
    <div className={style.header}>
        <nav className={style.nav}>
            <div>
                <Link to='/'>UserPage</Link>
            </div>
            <div>
                  <Link to='/AdminPage'>AdminPage</Link>
            </div>
              <Button>
                  <Link to='/AdminPage'>Войти</Link>
              </Button>
        </nav>

    </div>
  )
}
