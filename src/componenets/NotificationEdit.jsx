import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from './UI/button/Button'
import Input from './UI/input/Input'
import style from './adminPage.module.css'
import Context from '../context'

export default function NotificationEdit() {
    const { notifications } = useContext(Context)
    const { id } = useParams()

    const [notification, setNotification] = useState({ title: '', body: '' })
    const [changeStyle, setChangeStyle] = useState(false)

    const removePost = () => {
        notifications.forEach(function (el, i) {
            if (el.id === +id) notifications.splice(i, 1)
        })
    }

    const editNotificationForm = (e) => {
        e.preventDefault()
        notifications.map((item) => {
            if (item.id === +id) {
                item.body = notification.body
                item.title = notification.title
            }
            setChangeStyle(false)
            return false
        })
    }

    

    

    return (
        <div>
            {notifications.map((item) => (
                item.id === +id &&
                <div key={item.id}>
                    <div className={style.list}>
                        <Input
                            defaultValue={item.title}
                                onChange={e => setNotification({ ...notification, title: e.target.value }, 
                                    setChangeStyle(true),)}
                            type="text"
                            placeholder='Title...'
                        />
                        <Input
                            defaultValue={item.body}
                                onChange={e => setNotification({ ...notification, body: e.target.value }, 
                                    setChangeStyle(true))}
                            type="text"
                            placeholder='Text...' />
                            {changeStyle ? <Button style={{ background : "green" }}
                                onClick={editNotificationForm}>Изменить</Button>:
                                <Button 
                                    onClick={editNotificationForm}>Изменить</Button> }
                        

                        <div className={style.footer}>
                            <div>
                                <div>Количество просмотров - {item.count}</div>
                                <div>Дата - {item.date}</div>
                            </div>
                            <Link to='/AdminPage'>
                                <Button onClick={removePost}>Удалить уведомление</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
