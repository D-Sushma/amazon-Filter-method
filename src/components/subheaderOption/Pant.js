//>>>... import card.css bcz we want to same desing as a card.js
// 2. need to import object.js In shirt & pant compo--> so that we get shirt/pant obj frm object.js
// 3. use filter method with object.js--> when click in shirt optn than we receive only shirt content---------------------
//    <<<<<--------------> use Object.filter() --> TO FILTER OYT SOMETHING FROM AN ARRAY......>>>>>>>
//4. filter lgane ke bad hme object render krna hai us filter var k sath
//    --> need to use map() inside return, than this id NEED to write inside curly {} braces
import React from 'react'
import '../Card.css'

// 2. import onject.js-------
import Object from '../Object'

export default function Pant() {
  // 2.1---- for cheacking that object array are comes or not--------------
  console.log(Object);

  // 3. use filter method --> Object.filter()-----------------------------------------
  let pantDataFilter = Object.filter((ele=> ele.type === "pant"))
  console.log(pantDataFilter);


  return (
    <div className='card-parent'>
      
       {/* // 4.------use {} braces & pantDataFilter.map()    --------------------------- */}
       {

        pantDataFilter.map((ele)=>{
          return(
            
            // 4.1.   USE ele TO GET pant ARRAY FROM object.js-----------
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

      {/* ise copy krk  shirtDataFilter.map ke under rkhna hai--------------------------*/}
      {/* <div className='card-container'>

        <div className='card-image'>
          <img src="" alt='img' />
        </div>
        <div className='card-details'>
          <div className='title'>{ }</div>
          <div className='price'>rs-{ }</div>
          <div className='quantity'>22</div>
          <div className='star'>✰✰✰✰✰</div>
          <button className='card-btn'>Add to card</button>
        </div>

      </div> */}

    </div>
  )
}
