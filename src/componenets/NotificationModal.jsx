import React, { useContext, useState, useEffect } from 'react'
import style from './notificationModal.module.css'
import Context from '../context'
export default function NotificationModal() {

  const { notifications } = useContext(Context)
  const [count] = useState(notifications.length)
  const [id, setId] = useState(1)
  const [notification, setNotification] = useState([])
  const [visible, setVisible] = useState(false)

  localStorage.setItem('id', 1);


  useEffect(() => {
    notifications.map((item) => {
      item.id === id &&
        setNotification(item)
    })
  })

  setTimeout(() => {
    if (id <= count) {
      setVisible(true)
    } else setVisible(false)
    autoClose()
  }, 2000)

  const autoClose = () => {
    if (visible === true && id <= count) {
      setTimeout(() => {
        close()
      }, 5000)
    }
  }

  const close = () => {
    setVisible(false)
    setId(id + 1)
  }

  // console.log(id);

  return (
    <div className={style.body}>
      {visible ?
        <div className={style.modal}>
          <div>
            <div>{notification.title}</div>
            <div>{notification.body}</div>
            <div>{notification.id}</div>
            <div className={style.close} onClick={close}>X</div>
          </div>
        </div>
        :
        <div className={style.none}></div>
      }
    </div>
  )
}
