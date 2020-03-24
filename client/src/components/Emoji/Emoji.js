import React from 'react';
import './Emoji.css';

const Emoji = props => (
  <span 
    className="Emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Emoji;