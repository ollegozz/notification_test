import React, { useContext, useState, useEffect } from 'react'
import style from './notificationModal.module.css'
import Context from '../context'
export default function NotificationModal() {

    const { notifications } = useContext(Context)
    // const [count, setCount] = useState(1)
    const [count, setCount] = useState(notifications.length)
    let [id, setId] = useState(1)
    const [notification, setNotification] = useState([])
    const [visible, setVisible] = useState(false)

   
    setInterval(() => {
        if (id < count) {
            setId(id = id + 1)
        } else setId(id = 1)        
        
    }, 9000)   
    

    useEffect(() => {  
        notifications.map((item) => {
            item.id === id &&
            setNotification(item)           
        })
    },[id])


    


  return (
    <div className={style.body}>
        <div className={style.modal}>
          <div>
                  <div>{notification.title}</div>
                  <div>{notification.body}</div>
                  <div>{notification.id}</div>
                </div>  
        </div>
    </div>
  )
}
