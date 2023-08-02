import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class ThreeScene extends Component {
  componentDidMount() {
    this.initThree();
  }

  initThree() {
  const { modelPath } = this.props;
  const scene = new THREE.Scene();
  scene.background = null; // Set scene background to transparent

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparent background
  renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
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
  // Set camera position
  camera.position.set(0, 1, 3);
  scene.rotation.y = 7 * Math.PI / 4;

  controls.update();
  const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
  scene.add(directionalLight);

  let rotationAngle = 0;

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    rotationAngle += 0.01;
    scene.rotation.y = rotationAngle;
    controls.update();

    // You can add any animation or updates to the 3D model here

    renderer.render(scene, camera);
  };

  animate();
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
