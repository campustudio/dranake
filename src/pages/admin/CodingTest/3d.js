import React, { Component } from 'react';
// import { OBJViewer, STLViewer } from 'react-stl-obj-viewer';
// import Loader from 'react-stlloader-component';
// import STLViewer from 'stl-viewer'
import Jsc3dViewer from 'react-jsc3d';
import moment from 'moment';

/**
 * Coding Test Demos
 * 1. recursion
 */
export default class CodingTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('moment() ', moment());
    console.log('moment().format() ', moment().format('YYYY-MM-DD'));
  }

  render() {
    return (
      <div className="test-stl">
        CodingTest
        <STLViewer
          file={new File(['./wheel.stl'], 'wheel.stl')}
          onSceneRendered={() => console.log('loaded')}
        />
        <Loader
          url="./wheel.stl"
        />
        <STLViewer
          url="./wheel.stl"
          model="./wheel.stl"
          width={400}
          height={400}
          modelColor='#B92C2C'
          backgroundColor='#EAEAEA'
          rotate={true}
          orbitControls={true}
        />
        <Jsc3dViewer sceneUrl="./Astronaut.glb" mouse="pan" progressBar />
        <stl-part-viewer src="./wheel.stl"></stl-part-viewer>
        <model-viewer src="./Astronaut.glb" alt="A 3D model of an astronaut" auto-rotate camera-controls></model-viewer>
        <model-viewer src="./scene.glb" alt="A 3D model of an astronaut" auto-rotate camera-controls></model-viewer>
        <model-viewer src="./scene.gltf" alt="A 3D model of an astronaut" auto-rotate camera-controls></model-viewer>
      </div>
    );
  }
}
