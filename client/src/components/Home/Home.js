import React from 'react';
import './Home.css';
import image from '../../assets/—Pngtree—scientific\ experiments\ cartoons_1422951.png'
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';



const Home = () => {

  return (
    <div className="mainContainer Home">
      <h1>Journey Visualizer</h1>
      <h2>INSIGHT in your customer journeys! </h2>
      <Popup className="popup-content" trigger={<Button variant="outlined" color="primary">
        Tutorial
</Button>} position="top left">
        {close => (
          <div className="popup-tutorial">

            <a className="close" onClick={close}>
              &times;
        </a>
          </div>
        )}
      </Popup>

      <img className="tutorial-img" src={image}>

      </img>
    </div>
  )
}

export default Home