import React from 'react';
import './Home.css';
import image from '../../assets/—Pngtree—scientific\ experiments\ cartoons_1422951.png'
import tutoriaImage from '../../assets/tutorial.png';
import Button from '@material-ui/core/Button';



const Home = () => {

  const [tutorial, setTutorial] = React.useState(false);

  return (
    <div className="mainContainer Home">
      <h1>Journey Visualizer</h1>
      <h2>INSIGHT in your customer journeys! </h2>
      <Button variant="outlined" color="primary" onClick={() => {
        setTutorial(!tutorial);
      }}>
        Tutorial
</Button>

      {!tutorial && <img className="home-img" src={image}></img>}
      {tutorial && <img className="tutorial-img" src={tutoriaImage}></img>}
    </div>
  )
}

export default Home