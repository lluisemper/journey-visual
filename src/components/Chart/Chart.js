import React from 'react';
import './Chart.css';
import FileSaver from 'file-saver';
import { XAxis, Tooltip, CartesianGrid, YAxis, Legend, LineChart, Line, } from 'recharts';


const Chart = ({ array }) => {

  const myRef = React.createRef();

  const exportChart = (asSVG) => {  
  
    let chartSVG = myRef.current
  
    if (asSVG) {
      let svgURL = new XMLSerializer().serializeToString(chartSVG);
      let svgBlob = new Blob([svgURL], { type: "image/svg+xml;charset=utf-8" });
      FileSaver.saveAs(svgBlob,  "fooo.svg");
    } else {
      let svgBlob = new Blob([chartSVG.outerHTML], { type: "text/html;charset=utf-8" });
      FileSaver.saveAs(svgBlob,  "fooo.html");
    }
  }

  return (
    <div>
      <div className="Chart" ref={myRef}>
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
            <Line type="monotone" dataKey="pv" stroke="#8884d8"  ></Line>
          </LineChart>
          : null
        }
      </div>
      <button onClick={exportChart}>save</button>
    </div>
  );
}


export default Chart;
