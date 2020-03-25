import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { connect } from 'react-redux';



const SpiderChart = ({steps}) => {

  console.log('steps', steps);
  
  return (
    <div className="SpiderChart">
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={steps}>
        <PolarGrid />
        <PolarAngleAxis dataKey="title" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}

const mapStateToProps = (state) => ({
  steps: state.uiState.steps,

});


export default connect(
  mapStateToProps,
  null
)(SpiderChart);

