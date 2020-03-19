import React from 'react';
import './Chart.css';
import FileSaver from 'file-saver';
import { XAxis, Tooltip, CartesianGrid, YAxis, Legend, LineChart, Line, } from 'recharts';
import { connect } from 'react-redux';


const Chart = ({ steps }) => {

  const myRef = React.createRef();

  const exportChart = (asSVG) => {

    let chartSVG = myRef.current

    if (asSVG) {
      let svgURL = new XMLSerializer().serializeToString(chartSVG);
      let svgBlob = new Blob([svgURL], { type: "image/svg+xml;charset=utf-8" });
      FileSaver.saveAs(svgBlob, "fooo.svg");
    } else {
      let svgBlob = new Blob([chartSVG.outerHTML], { type: "text/html;charset=utf-8" });
      FileSaver.saveAs(svgBlob, "fooo.html");
    }
  }

  return (
    <div>
      <div className="Chart" ref={myRef}>
          <LineChart
            width={steps.length * 100}
            height={300}
            data={steps}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis type="number" domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Line className="line" type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ fill: '#3F99F7', stroke: '#fff', strokeWidth: 3, r: 11, className: "boxShadow" }}
              dot={{ fill: '#3F99F7', stroke: '#fff', strokeWidth: 2, r: 7, className: "boxShadow" }} ></Line>
          </LineChart>

      </div>
      <button onClick={exportChart}>save</button>
    </div>
  );
}


const mapStateToProps = (state) => ({
  steps: state.uiState.steps,
  
});


export default connect(
  mapStateToProps,
  null
)(Chart);
