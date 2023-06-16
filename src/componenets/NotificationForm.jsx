import React, { useState } from 'react'
import Button from './UI/button/Button'
import Input from './UI/input/Input'

export default function NotificationForm({ create }) {

       

    const [notification, setNotification] = useState({ title: '', body: '' })

    const addNewNotificationForm = (e) => {
        e.preventDefault()
        const today = new Date();
        const now = today.toLocaleDateString('en-US');
        
        const newNotification = {
            ...notification, id: Date.now(), date: now, count: 0
        }
        create(newNotification)
    }

    return (
        <form>
            <Input
                value={notification.title}
                onChange={e => setNotification({ ...notification, title: e.target.value })}
                type="text"
                placeholder='Title...'
            />
            <Input
                value={notification.body}
                onChange={e => setNotification({ ...notification, body: e.target.value })}
                type="text"
                placeholder='Text...' />
            <Button
                onClick={addNewNotificationForm}>Создать</Button>
        </form>
    )
}
