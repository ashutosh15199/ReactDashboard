import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CircularProgressbars=()=> {
   const circularChartData=[
      {
       "id":1,
       "performance":"65"
      }
   ]
   return (
      <div className='bar'>
       <h3>Customers</h3>
        <h5>Costumers that buy products</h5>
         <div style = {{ width: "300px","margin-top":"2rem","margin-left":"7rem", "color":"blueviolet"}}>
         {
            circularChartData.map((item,index)=>{
               return(
                  <div key={`stat-Card-${index}`}>
                  <CircularProgressbar
               maxValue = {100}
               strokeWidth = {12}
               value = {item.performance}
               counterClockwise = {true}
               background = {true}
               backgroundPadding = {10}
               text={`${item.performance}% `}
           
                 
               />
                  </div>
               )
            })
         }
        
         </div>
         </div>
      
   );
}

export default CircularProgressbars;