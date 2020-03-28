import React from 'react';
import FileSaver from 'file-saver';
import { XAxis, Tooltip, CartesianGrid, YAxis, Legend, LineChart, Line, } from 'recharts';
import { connect } from 'react-redux';

const Chart = ({ steps, firstSteps, secondSteps }) => {


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
  console.log('first', firstSteps);
  console.log('first', secondSteps);
  


  const doubleLine = []

  const firstLineChart = firstSteps.map((el) => {
    return { score: el.score, color: "blue", name: el.title }
  });
  const secondLineChart = secondSteps.map((el) => {
    return { score: el.score, color: "red", name: el.title }
  });
  let firstStepsCopy = [...firstLineChart]
  let secondStepsCopy = [...secondLineChart]
  if (firstStepsCopy.length === secondStepsCopy.length){
  while (firstStepsCopy.length || secondStepsCopy.length) {
    const nextElement = [firstStepsCopy.shift(), secondStepsCopy.shift()]
    doubleLine.push(nextElement)
  }}


  return (
    <div>
      <div className="Chart" ref={myRef}>
        {doubleLine.length ?
          <div>
            <LineChart
              width={steps.length * 225}
              height={300}
              data={doubleLine}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              {doubleLine[0].map((el, i) => {
                return <XAxis dataKey={(x) => x[i].name}></XAxis>})}
              <YAxis type="number" domain={[0, 5]} />
              <Tooltip />
              <Legend />
              {doubleLine[0].map((el, i) => {
                return <Line className="line" type="monotone" dataKey={(x) => x[i].score} stroke={el.color} activeDot={{ fill: el.color, stroke: el.color, strokeWidth: 3, r: 11, className: "boxShadow" }}
                  dot={{ fill: el.color, stroke: el.color, strokeWidth: 2, r: 7, className: "boxShadow" }} ></Line>
              })}
            </LineChart>
          </div>
          :
          <div>
            {firstSteps.length ?
            <div>
              <LineChart
                width={steps.length * 225}
                height={300}
                data={firstSteps}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis type="number" domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Line className="line" type="monotone" dataKey="score" stroke="#3F99F7" activeDot={{ fill: '#3F99F7', stroke: '#3F99F7', strokeWidth: 3, r: 11, className: "boxShadow" }}
                  dot={{ fill: '#3F99F7', stroke: '#3F99F7', strokeWidth: 2, r: 7, className: "boxShadow" }} ></Line>
              </LineChart>
            </div> : null
            },
            {secondSteps.length ?
            <div>
              <LineChart
                width={steps.length * 225}
                height={300}
                data={secondSteps}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis type="number" domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Line className="line" type="monotone" dataKey="score" stroke="red" activeDot={{ fill: 'red', stroke: 'red', strokeWidth: 3, r: 11, className: "boxShadow" }}
                  dot={{ fill: 'red', stroke: 'red', strokeWidth: 2, r: 7, className: "boxShadow" }} ></Line>
              </LineChart>
            </div> : null

            }
          </div>}
      </div>
      <button onClick={exportChart}>save</button>
    </div>
  );
}


const mapStateToProps = (state) => ({
  steps: state.uiState.steps,
  firstSteps: state.uiState.firstSteps,
  secondSteps: state.uiState.secondSteps,

});


export default connect(
  mapStateToProps,
  null
)(Chart);
