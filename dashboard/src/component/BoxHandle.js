import React, { useState } from 'react'
import BaseData from './BaseData'
// import 'bootstrap/dist/css/bootstrap.min.css'
const BoxHandle = () => {
  const [selectedOption, setSelectedOption] = useState('option1') // Set an initial selected option

  const handleSelectChange = event => {
    setSelectedOption(event.target.value)
  }
  return (
    <div className='base'>
      <div className='second-card'>
        <div className='main-list' >
          <h3  style={{ "color": 'black', "margin-buttom":"10px" }}>
            Products
          </h3>
          <h4 style={{ color: 'grey' }}   >Products</h4>
          <input
            className='input'  style={{ color: 'grey' }}
            type='search'
            placeholder='search'
          />
            <p>{selectedOption}</p>
          <select className='selects' value={selectedOption} onChange={handleSelectChange}>
            <option value='option1'>last 30 days</option>
            <option value='option4'>last 20 days</option>
            <option value='option3'>last 10 days</option>
          </select>
         
         <ul style={{ color: 'grey' }}>
          
              <h4 id='ram'>Stock</h4>
              <h4 id='shyam'>Price</h4>
              <h4 id='ramu'>Total sales</h4>
            </ul>
            <div className='meme'>
            {
                BaseData.map((item,index)=>{
                  return(
                    <ul className='tablehead'  key={`stat-Card-${index}`}>
                    <li className='product-image' >{item.image}</li>
                      <h3>{item.title}</h3>
                     <div className='span1'>
                      <span>{item.Stock}<b>in Stock</b></span>
                      </div>
                      <div className='span2'>
                      <span className='a1'>${item.price}</span>
                      </div>
                      <div className='span3'>
                      <span className='b1'>{item.Total}</span>
                    
                      </div>
                    </ul>
                  )
                })
              }
              </div>
        </div>
        <hr></hr>
          
           
        </div>
       
      </div>
 
  )
}
export default BoxHandle;
