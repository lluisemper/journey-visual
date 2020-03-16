import React from 'react';
import './Chart.css';
import { XAxis, Tooltip, CartesianGrid, YAxis, Legend, LineChart, Line, } from 'recharts';


const Chart = ({ array }) => {


  const handleClick = (event) => {
    console.log('cc', event);
    console.log('array', array);
    //array value on that index when click
    console.log('array[event.index].pv', array[event.index].pv);

  }
  
  
  return (
    <div className="Chart" id="Chart">
      {array.length > 1 ?
        <LineChart
        width={array.length * 100}
        height={300}
        data={array}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 5]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ onClick: handleClick }} ></Line>
      </LineChart>
      : null
      }
    </div>
  );
}


export default Chart;
