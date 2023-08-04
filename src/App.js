import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import ThreeScene from "./Components/ThreeScene";
import SlideCard from "./Components/SlideCard"; // Import the SlideCard component
import "./App.css";
// import "https://fonts.googleapis.com/css?family=Varela" ;
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" ;



class App extends Component {
  render() {
    return (
      <div id="body">
        <h1 text-align="centre">
<<<<<<< Updated upstream
<div background-color= "transparent" class="glitch" data-text="GLITCH">COPS</div>
=======

<div background-color= "transparent" class="glitch" data-text="COPS">COPS</div>
        
>>>>>>> Stashed changes
        </h1>
        <br/>
        <div className="container carousel-wrapper">
          <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
            <div>
              <ThreeScene modelPath="model1/scene.gltf" camx={0} camy={5} camz={50}  />
              <SlideCard
                title="Competitive Programming"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            <div>
              <ThreeScene modelPath="brain/scene.gltf" camx={3.5} camy={5} camz={0} />
              <SlideCard
                title="Intelligence Group"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            <div>
              <ThreeScene modelPath="react/scene.gltf" camx={0} camy={0} camz={4} />
              <SlideCard
                title="Software Development Guild"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            <div>
              <ThreeScene modelPath="InfoSec/scene.gltf" camx={5} camy={1} camz={1} />
              <SlideCard
                title="Information Security"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;
