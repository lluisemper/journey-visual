import React from 'react';
import './Chart.css';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend } from 'recharts';


const Chart = ({array}) => {

 
  return (
    <div className="Chart">
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
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}


export default Chart;
