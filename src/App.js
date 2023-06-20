import './App.css';
import React, { useState } from 'react'
import AdminPage from './componenets/AdminPage';
import UserPage from './componenets/UserPage';
import Header from './componenets/Header';
import { Routes, Route } from 'react-router-dom'
import NotificationEdit from './componenets/NotificationEdit'
import Context from './context'
import AuthForm from './componenets/AuthForm';


function App() {

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Hello', body: 'HelloHelloHello', count: 0, date: '16.06.2023' },
    { id: 2, title: 'Good', body: 'GoodGoodGood', count: 0, date: '16.06.2023' },
    { id: 3, title: 'Bye', body: 'ByeByeBye', count: 0, date: '16.06.2023' },
  ])

  const user = {
    id: 1,
    login: 'Admin',
    pass: '12345'
  }

  const [authStatus, setAuthStatus] = useState(false)


  const [auth, setAuth] = useState(
    {
      login: 'Admin',
      pass: '12345'
    }
  )


  return (
    <div className='App'>
      <Context.Provider value={
        {
          notifications, setNotifications,
          auth, setAuth, user,
          authStatus, setAuthStatus
        }
      }>
        <Header />
        <Routes>
          <Route path='/*' element={<UserPage />} />
          <Route path='/AdminPage' element={<AdminPage />} />
          <Route path='/NotificationEdit/:id' element={<NotificationEdit />} />
          <Route path='/Auth' element={<AuthForm />} />
        </Routes>

      </Context.Provider>


    </div>
  );
}

export default App;
