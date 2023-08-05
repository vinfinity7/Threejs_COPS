import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Carousel } from "react-responsive-carousel";
import ThreeScene from "./Components/ThreeScene";
import SlideCard from "./Components/SlideCard"; // Import the SlideCard component
import "./App.css";
import '@fontsource/eczar' ;
// import "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" ;



class App extends Component {
  render() {
    return (
      <>
    <div id="bg">
    <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>    
      <div id="body">
        <h1 text-align="centre">
<div background-color= "transparent" class="glitch" data-text="CODING">COPS</div>
        </h1>
        <br/>
        <div className="container carousel-wrapper">
          <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}  >
            <div>
              <ThreeScene modelPath="model1/scene.gltf" camx={0} camy={5} camz={50}  />
              <SlideCard
                title="Competitive Programming"
                text="Get yourselves competing for the best ranks amongst the coders that have their ratings sky-rocketing."
              />
            </div>
            <div>
              <ThreeScene modelPath="brain/scene.gltf" camx={3.5} camy={5} camz={0} />
              <SlideCard
                title="Intelligence Group"
                text="Some of the best brains WORTHY enough to train the machines woke up and chose violence . "
              />
            </div>
            <div>
              <ThreeScene modelPath="react/scene.gltf" camx={0} camy={0} camz={4} />
              <SlideCard
                title="Software Development Guild"
                text="You talk as we code , The most creative peeps meet up to bring ideas to reality ."
              />
            </div>
            <div>
              <ThreeScene modelPath="InfoSec/scene.gltf" camx={0} camy={0.1} camz={0.2} />
              <SlideCard
                title="InfoSec"
                text="The coolest profile one can dream of . Hacking , Phishing , Jailbreaks ... They got you covered! "
              />
            </div>
            
          </Carousel>
        </div>

      <br/>
      <br/>
      <br/>
      <br/>
      </div>
        <div id="block">
        <p id="content" style={{ fontFamily: 'Eczar, serif'}}>
        In this age of increasing automation, programming is not limited to only computer science and related fields. Every competent engineer needs to know how to program.
        <br/>
        <br/>
         This makes Club of Programmers one of the most important clubs in the institute.

Club of Programmers (or better known as COPS) understands this responsibility and plays a crucial part in maintaining the coding culture in the institute. 
Introductory workshops are held for freshers to introduce them to the various facets of programming. Regular competitions are held for the general student body to test and sharpen their programming skills.    
    </p>
      
      <h1 id="hiya" style={{ fontFamily: 'Eczar, serif'}}>How to become a COP ?
          <br/>
          </h1>
      

      <ul style={{ fontFamily: 'Eczar, serif'}}>
        <li  >Interest and consistent effort are the only pre-requisites :)</li>
        <li >Attend workshops</li>

        <li >Stalk your seniors :P</li>

        <li >Ask for help</li>

        <li >Follow our Instagram for updates</li>

        <li >Join Discord for communication</li>

        <li >Try your hand at our events</li>
      </ul>
        </div>
        </div>
        </>
    );
  }
}

export default App;
