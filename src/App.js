import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import ThreeScene from "./Components/ThreeScene";
import SlideCard from "./Components/SlideCard"; // Import the SlideCard component
import "./App.css";


class App extends Component {
  render() {
    return (
      <div id="body">
        <h1 text-align="centre">Kuch kuch likhwa diya hai chatgpt se</h1>
        <div className="container carousel-wrapper">
          <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
            <div>
              <ThreeScene modelPath="model1/scene.gltf" />
              <SlideCard
                title="Slide Card 1"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            <div>
              <ThreeScene modelPath="model4/scene.gltf" />
              <SlideCard
                title="Slide Card 2"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            <div>
              <ThreeScene modelPath="model5/scene.gltf" />
              <SlideCard
                title="Slide Card 3"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            <div>
              <ThreeScene modelPath="model/scene.gltf" />
              <SlideCard
                title="Slide Card 4"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
              />
            </div>
            {/* Add more slides with different 3D models */}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;
