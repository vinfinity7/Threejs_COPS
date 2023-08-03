import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import TWEEN from 'tween.js';

class ThreeScene extends Component {
  componentDidMount() {
    this.initThree();
  }

  initThree() {
    // const container = document.getElementById('slider-container');
    const { modelPath ,camx,camy,camz} = this.props;
    const scene = new THREE.Scene();
    scene.background = null; // Set scene background to transparent // has the potential to be rendered as loader // obs 1 whilst reading the code base

    const camera = new THREE.PerspectiveCamera(
      75,
     (8* window.innerWidth) /(5* window.innerHeight),
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparent background
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.5);
    renderer.setClearColor(0x000000, 0); // Set clearColor with alpha value of 0
    this.threeContainer.appendChild(renderer.domElement);

    // Load the 3D model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        // Traverse through the model and set material to transparent
        model.traverse((child) => {
          if (child.isMesh) {
            child.material.transparent = true;
          }
        });
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading 3D model", error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    
    // to disable zoom
controls.enableZoom = false;

// to disable rotation
// controls.enableRotate = false;

// to disable pan
controls.enablePan = false;
// controls.minPolarAngle = Math.PI/2;
// controls.maxPolarAngle = Math.PI/2;
    // Set camera position
    camera.position.set(camx, camy, camz);
    scene.rotation.y = 7 * Math.PI / 4;

    controls.update();

    const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    let rotationAngle = 0;

    // Animation loop
    // function animateRotation() {
    //   // Rotate the loader smoothly using Tween.js
    //   const rotationDuration = 4; // Duration of rotation in seconds
    //   const targetRotationX = loader.rotation.x + Math.PI * 2; // Rotate 360 degrees
    //   const targetRotationY = loader.rotation.y + Math.PI * 2; // Rotate 360 degrees

    //   // Create the rotation tweens for X and Y axes
    //   const tweenX = new TWEEN.Tween(loader.rotation)
    //     .to({ x: targetRotationX }, rotationDuration * 1000)
    //     .easing(TWEEN.Easing.Linear.None);

    //   const tweenY = new TWEEN.Tween(loader.rotation)
    //     .to({ y: targetRotationY }, rotationDuration * 1000)
    //     .easing(TWEEN.Easing.Linear.None);

    //   // Chain the tweens for smooth rotation on both axes
    //   tweenX.chain(tweenY);

    //   // Start the rotation
    //   tweenX.start();
    // }
    window.addEventListener('resize', () => {
      // update display width and height
      var width = window.innerWidth
     var height = window.innerHeight
      // update camera aspect
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      // update renderer
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.render(scene, camera)
   })
    const animate = () => {
      requestAnimationFrame(animate);
      rotationAngle += 0.01;
      scene.rotation.y = rotationAngle;
      controls.update();

      // You can add any animation or updates to the 3D model here

      renderer.render(scene, camera);
    };

    animate();
    // animateRotation();
  }

  componentWillUnmount() {
    // Perform any cleanup here, e.g., remove event listeners, dispose of objects
  }

  render() {
    return (
      <div id="three-container" ref={(ref) => (this.threeContainer = ref)}></div>
    );
  }
}

export default ThreeScene;
