import React from 'react'
import CardData from './Data'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import BarCharts from "./BarCharts"
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import CircularProgressbars from './CircularProgress'
import BoxHandle from './BoxHandle'
const Home = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
      <div className='main-cards'>
        {CardData.map((item, index) => {
          return (
            <div className='card' key={`stat-Card-${index}`}>
              <div className='card-inner'>
              <div>
                <h5 style={{"text-align":"center","margin-top":"3rem","margin-left":"1rem"}} >{item.title}</h5>
                {item.icon}
                <h2  style={{ color: 'black',"text-align":"center","margin-top":"-8rem","margin-left":"3rem" }}>
                  $ {item.earning}K
                </h2>

                <p style={{ color: 'black',"text-align":"center","margin-left":"3rem" }}>
                  {item.progress > 0 ? (
                    <AiOutlineArrowUp style={{ color: 'green' }} />
                  ) : (
                    <AiOutlineArrowDown style={{ color: 'red' }} />
                  )}
                  <b style={{"color":"green"}}>{item.progress}%</b> this month
                </p>
                </div>
              </div>
            </div>
          )
        })}
      
      </div>
      <BarCharts/>
      <CircularProgressbars/>
      <BoxHandle/>
    </main>
  )
}
export default Home;
