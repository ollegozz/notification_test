import React, { useState, useContext } from 'react'
import style from './adminPage.module.css'
import { Link } from 'react-router-dom'
import Button from './UI/button/Button'
import NotificationForm from './NotificationForm'
import NotificationEdit from './NotificationEdit'
import Context  from '../context'

export default function AdminPage() {


  const { notifications, setNotifications } = useContext(Context)


 const [push, setPush] = useState(false)

  const formAddNotification = () => {
    setPush(!push)
  }

  const createNotification = (newNotification) => {
    setNotifications([...notifications, newNotification])
    setPush(!push)
  }


  return (
    <div className={style.body}>
      {notifications.map((item) => (
        <div key={item.id}>
          <div className={style.list}>
            <div>{item.title}</div>
            <div>{item.body}</div>
            <div className={style.footer}>
              <div>
                <div>Количество просмотров - {item.count}</div>
                <div>Дата - {item.date}</div>
              </div>
              <div>
                <Link to={`/NotificationEdit/${item.id}`}>
                  <Button>Редактировать</Button>
                  </Link>  
                <NotificationEdit />
              </div>              
            </div>
          </div>
        </div>
      ))}

      {push ? 
      <>
          <NotificationForm create={createNotification} />
      </> :
      <div className={style.btn} onClick={formAddNotification}>
        <Button>Добавить уведомление</Button>
      </div>
      }
    </div>
  )
}
