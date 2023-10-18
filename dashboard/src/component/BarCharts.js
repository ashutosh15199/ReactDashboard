import React,{useState} from 'react'
import Data from './Data'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const BarCharts = () => {
  const [selectedOption, setSelectedOption] = useState('option1'); // Set an initial selected option

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const BarData = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Oct',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },

    {
      name: 'Nov',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ]
  return (
    <div className='charts'>
      <div className='barchart'>
        <h3>Overview</h3>
        <h5>Monthly Earning</h5>
        <div style={{"text-align":"center","margin-top":"-5rem","margin-right":"-35rem"}}>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value='option1'>Quality</option>
            <option value='option2'>Price</option>
            <option value='option3'>Brand</option>
          </select>
          <p> {selectedOption}</p>
        </div>

        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={BarData}
            margin={{ top: 50, right: 30, left: 20, bottom: 100 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              data={BarData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
            <Bar dataKey='pv' fill='green' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default BarCharts
