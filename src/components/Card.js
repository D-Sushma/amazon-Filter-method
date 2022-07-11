import React from 'react'
import './Card.css';
import Object from '../components/Object'


export default function Card() {

  return (
    <div className='card-parent'>


      {
        // .>>> USE OBJECT RENDER================================
        Object.map((ele) => {
          return (
            <div className='card-container'>
              <div className='card-image'>
                <img src={ele.image} alt='myimg' />
              </div>
              <div className='card-details'>
                <div className='name'>{ele.name}</div>
                <div className='price'>Rs.{ele.price}</div>
                <div className='quantity'>{ele.totalquantity}</div>
                <div className='star'>⭐⭐⭐⭐⭐</div>
                <button className='card-btn'>Add to card</button>
              </div>
            </div>
          )
        })


      }
      

    </div>
  )
}
