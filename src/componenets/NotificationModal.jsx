import React, { useContext, useState, useEffect } from 'react'
import style from './notificationModal.module.css'
import Context from '../context'
export default function NotificationModal() {

  const { notifications } = useContext(Context)
  const [count] = useState(notifications.length)
  const [id, setId] = useState(1)
  const [notification, setNotification] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line
    notifications.map((item) => {
      item.id === id && setNotification(item)        
      getModal()
    })
  },[id])

   const getModal = () => {
    setTimeout(() => {
      if (id <= count) {
        setVisible(true)
        autoClose()
      } else setVisible(false)
    }, 2000)
    clearTimeout(getModal)
  }

  const autoClose = () => {    
    if ( id <= count) {
      setTimeout(() => {
        close()
        setId(id + 1)
      }, 5000)
      clearTimeout(autoClose)
    }
  }

  const close = () => {
    setVisible(false)    
  }

  return (
    <div className={style.body}>
      {visible ?
        <div className={style.modal}>
          <div>
            <div className={style.title}>{notification.title}</div>
            <div className={style.body}>{notification.body}</div>
            <div className={style.close} onClick={close}>X</div>
          </div>
        </div>
        :
        <div className={style.none}></div>
      }
    </div>
  )
}
