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

<div class="glitch" data-text="GLITCH">GLITCH</div>
        
        </h1>
        <br/><br/><br/><br/><br/><br/>
        <div className="container carousel-wrapper">
          <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
            <div>
              <ThreeScene modelPath="model1/scene.gltf" camx={0} camy={1} camz={5}  />
              <SlideCard
                title="Slide Card 1"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            <div>
              <ThreeScene modelPath="model4/scene.gltf" camx={0} camy={1} camz={3} />
              <SlideCard
                title="Slide Card 2"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            <div>
              <ThreeScene modelPath="model5/scene.gltf" camx={0} camy={1} camz={1} />
              <SlideCard
                title="Slide Card 3"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            <div>
              <ThreeScene modelPath="model/scene.gltf" camx={0} camy={1} camz={3} />
              <SlideCard
                title="Slide Card 4"
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
