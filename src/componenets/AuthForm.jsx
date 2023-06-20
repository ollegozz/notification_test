import React, { useState, useContext } from 'react'
import Context from '../context'
import Button from './UI/button/Button'
import Input from './UI/input/Input'
import style from './authForm.module.css'

export default function AuthForm() {

    const { auth, setAuth, user, setAuthStatus } = useContext(Context)

    const [correctAuth, setCorrectAuth] = useState(true)

    const checkAuth = () => {
        if (user.login === auth.login && user.pass === auth.pass) {
            setAuthStatus(true)
        } else setCorrectAuth(false)

    }

    return (
        <div div className={style.body} style={{ textAlign: "center" }}>
            <div className={style.input}>
                <div>
                    <p>Имя</p>
                    {correctAuth ? <Input
                        type='text'
                        defaultValue={auth.login}
                        onChange={(e) => (setAuth({ ...auth, login: e.target.value }))}
                    /> :
                        <Input
                            style={{ background: "#FA8072" }}
                            type='text'
                            defaultValue={auth.login}
                            // eslint-disable-next-line
                            onChange={(e) => (setAuth({ ...auth, login: e.target.value }), setCorrectAuth(true))} />
                    }
                </div>
                <div>
                    <p>Пароль</p>
                    {correctAuth ? <Input
                        type='password'
                        defaultValue={auth.pass}
                        onChange={(e) => (setAuth({ ...auth, pass: e.target.value }))}
                    /> :
                        <Input
                            style={{ background: "#FA8072" }}
                            type='password'
                            defaultValue={auth.pass}
                            // eslint-disable-next-line
                            onChange={(e) => (setAuth({ ...auth, pass: e.target.value }), setCorrectAuth(true))}
                        />

                    }
                </div>
            </div>
            {
                correctAuth ?
                    <div className={style.button}>
                        <Button onClick={checkAuth} >Войти</Button>
                    </div>
                    :
                    <div className={style.button} >
                        <Button onClick={checkAuth} disabled={true} style={{ opacity: .5 }}>Войти</Button>
                    </div>
            }
        </div >

    )
}
