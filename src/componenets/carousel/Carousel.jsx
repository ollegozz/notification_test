import React, { useState, useEffect } from 'react'
import style from './carousel.module.css'

export default function Carousel() {

  const [data, setData] = useState([])


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const responseData = await response.json()
      setData(responseData)
    }
    fetchData();
  }, [])



  console.log('data', data);

  return (
    <div className={style.body}
    >
      {data.map((item) => (
        
        <div key={item.id}
          className={style.item}
        >
          <div>
            {item.description.split('',100)}...
          </div>
          <div>
            <img className={style.image} src={item.image} alt="" />
            
          </div>
        
        </div>
      ))}


    </div>
  )
}
