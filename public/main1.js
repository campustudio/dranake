import * as THREE from '%PUBLIC_URL%/three/build/three.module.js';
import Stats from '%PUBLIC_URL%/three/examples/jsm/libs/stats.module.js';
import { STLLoader } from '%PUBLIC_URL%/three/examples/jsm/loaders/STLLoader.js';
import { OrbitControls } from '%PUBLIC_URL%/three/examples/jsm/controls/OrbitControls.js';

function main1() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas}); // create renderer based on canvas

  const loader = new STLLoader();
  const fov = 35;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // camera.position.z = 2;
  camera.position.set( 3, 0.15, 3 );

  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x72645b );
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
  const material = new THREE.MeshPhongMaterial({color: 0x44aa88});  // greenish blue

  const cube = new THREE.Mesh(geometry, material);
  cube.position.set( 0, 0, 0 );
  // scene.add(cube);

//   function makeInstance(geometry, color, x) {
//     const material = new THREE.MeshPhongMaterial({color});

//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     cube.position.x = x;

//     return cube;
//   }

//   const cubes = [
//     makeInstance(geometry, 0x44aa88,  0),
//     makeInstance(geometry, 0x8844aa, -2),
//     makeInstance(geometry, 0xaa8844,  2),
//   ];

  // ASCII file
  loader.load( './models/stl/ascii/盘子.stl', function ( geometry ) {

    var material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
    geometry.center();
    var mesh = new THREE.Mesh( geometry, material );

    mesh.position.set( -1, 1, 1 );
    // mesh.rotation.set( 0, - Math.PI / 2, 0 );
    // mesh.scale.set( 0.5, 0.5, 0.5 );

    // mesh.castShadow = true;
    // mesh.receiveShadow = true;

    scene.add( mesh );

  } );

  renderer.render(scene, camera);
//   function render(time) {
//     time *= 0.001;  // convert time to seconds

//     // cube.rotation.x = time;
//     // cube.rotation.y = time;

//     cubes.forEach((cube, ndx) => {
//       const speed = 1 + ndx * .1;
//       const rot = time * speed;
//       cube.rotation.x = rot;
//       cube.rotation.y = rot;
//     });

//     renderer.render(scene, camera);

//     requestAnimationFrame(render);
//   }
//   requestAnimationFrame(render);
}

// main1();