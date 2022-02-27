 //Importing necessary modules
 
//  import * as THREE from 'three';
import * as THREE from 'https://unpkg.com/three@0.125.2/build/three.module.js';
//  import oc from 'three-orbit-controls'
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

 
 const canvasContainer = document.getElementById('canvasid')

 //Creating a scene
 var scene = new THREE.Scene();
 
 //Initialising a camera and setting it up
  var camera = new THREE.PerspectiveCamera (75, canvasContainer.offsetWidth/canvasContainer.offsetHeight, 0.1, 10000);
  scene.add(camera);
  camera.position.set(-500,900,-1700);
 
 //Initialising a renderer and setting it up
  var renderer = new THREE.WebGLRenderer ({
    antialias : true,
        canvas : document.querySelector('canvas')
  });
  renderer.setSize (canvasContainer.offsetWidth,canvasContainer.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio)

 
 //EventListener for resizing
  window.addEventListener('resize', ()=>{window.location.reload()});
 
 // //Axis helper
 //   const axis = new THREE.AxesHelper( 1000 );
 //   scene.add( axis );
 
 // //Adding controls for user interaction
  var controls = new OrbitControls(camera, renderer.domElement);
 
 // //Creating all the objects and setting their position in scene
  var geometry_s = new THREE.SphereGeometry(5000, 64,64);
  var material_s = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('galaxy_starfield.png'), side: THREE.DoubleSide});
  var starfield = new THREE.Mesh (geometry_s, material_s);
  scene.add(starfield);
 
  var sun_geom = new THREE.SphereGeometry (170, 32, 32);
  var sun_mat = new THREE.MeshBasicMaterial ({map : new THREE.TextureLoader().load('sun_detailed.jpg'), side: THREE.DoubleSide});
  var sun = new THREE.Mesh (sun_geom, sun_mat);
  sun.position.set(0,0,0);
  scene.add(sun);
 
  var mer_geom = new THREE.SphereGeometry (30, 12, 12);
  var mer_mat = new THREE.MeshPhongMaterial ({map : new THREE.TextureLoader().load('mercury.jpg'), side: THREE.DoubleSide, color: 0xaaaaaa,
  shininess: 25});
  var mer = new THREE.Mesh (mer_geom, mer_mat);
  mer.position.set(400,0,0);
  scene.add(mer);
 
  var ven_geom = new THREE.SphereGeometry (50, 24, 24);
  var ven_mat = new THREE.MeshPhongMaterial ({map : new THREE.TextureLoader().load('venus.jpg'), side: THREE.DoubleSide, color: 0xaaaaaa,
  shininess: 25});
  var ven = new THREE.Mesh (ven_geom, ven_mat);
  ven.position.set(600,0,0);
  scene.add(ven);
 
  var earth_geom = new THREE.SphereGeometry (60, 32, 32);
  var earth_mat = new THREE.MeshPhongMaterial ({map : new THREE.TextureLoader().load('earth_terrain_4k.jpg'), side: THREE.DoubleSide, color: 0xaaaaaa,
  shininess: 25});
  var earth = new THREE.Mesh (earth_geom, earth_mat);
  earth.position.set(800,0,0);
  scene.add(earth);
 
  var geometry_m = new THREE.SphereGeometry (20 , 32 , 32);
  var material_m = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('moon_4k.jpg'), side: THREE.FrontSide, color: 0xaaaaaa, shininess:25});
  var moon = new THREE.Mesh(geometry_m, material_m);
  moon.position.set(800,0,0);
  earth.add(moon);
 
  var mar_geom = new THREE.SphereGeometry (60, 32, 32);
  var mar_mat = new THREE.MeshPhongMaterial ({map : new THREE.TextureLoader().load('mars.jpg'), side: THREE.DoubleSide, color: 0xaaaaaa,
  shininess: 25});
  var mar = new THREE.Mesh (mar_geom, mar_mat);
  mar.position.set(1000,0,0);
  scene.add(mar);
 
  var jup_geom = new THREE.SphereGeometry (130, 64, 64);
  var jup_mat = new THREE.MeshPhongMaterial ({map : new THREE.TextureLoader().load('jupiter.jpg'), side: THREE.DoubleSide, color: 0xaaaaaa,
  shininess: 25});
  var jup = new THREE.Mesh (jup_geom, jup_mat);
  jup.position.set(1400,0,0);
  scene.add(jup);
 
  var sat_geom = new THREE.SphereGeometry (50, 32, 32);
  var sat_mat = new THREE.MeshPhongMaterial ({map : new THREE.TextureLoader().load('saturn.jpg'), side: THREE.DoubleSide, color: 0xaaaaaa,
  shininess: 25});
  var sat= new THREE.Mesh (sat_geom, sat_mat);
  sat.position.set(1800,0,0);
  scene.add(sat);
 
 //  var geometry_r = new THREE.RingGeometry (60 , 80 , 32);
 //  var material_r = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('saturnringcolor.jpg'), side: THREE.DouleSide, color: 0xaaaaaa, shininess:25});
 //  var ring = new THREE.Mesh(geometry_r, material_r);
 //  ring.position.set(1800,0,0);
 //  sat.add(ring);
 
 var geometry_r = new THREE.RingGeometry( 80, 95, 62 );
 var texture_r = new THREE.TextureLoader().load( 'saturnring.jpg' );
 var material_r = new THREE.MeshLambertMaterial( { side: THREE.DoubleSide, map: texture_r} );
 var ring = new THREE.Mesh( geometry_r, material_r );
 // ring.rotateOnWorldAxis( new THREE.Mesh( 1800, 0, 0 ), Math.PI/2 );
 // ring.rotateOnWorldAxis( new THREE.Mesh( 0, 0, 1 ), 0.383972 );
 // ring.rotate.z( Math.PI/2 );
 ring.rotation.x = Math.PI/2;
 sat.add(ring);
 
 
 
  var ura_geom = new THREE.SphereGeometry (85, 32, 32);
  var ura_mat = new THREE.MeshPhongMaterial ({map : new THREE.TextureLoader().load('uranus.jpg'), side: THREE.DoubleSide, color: 0xaaaaaa,
  shininess: 25});
  var ura = new THREE.Mesh (ura_geom, ura_mat);
  ura.position.set(2200,0,0);
  scene.add(ura);
 
  var nep_geom = new THREE.SphereGeometry (90, 32, 32);
  var nep_mat = new THREE.MeshPhongMaterial ({map : new THREE.TextureLoader().load('neptune.jpg'), side: THREE.DoubleSide, color: 0xaaaaaa,
  shininess: 25});
  var nep = new THREE.Mesh (nep_geom, nep_mat);
  nep.position.set(3200,0,0);
  scene.add(nep);
 
 
 
 
 //Setting up lighting
  const light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );
 
  const light_p = new THREE.PointLight( 0xffffff, 6, 4000 );
  light_p.position.set( 0, 0, 0 );
  scene.add( light_p );
 
 //Function for building orbits for planets
 
 var orbits = function(name, radius, delta){
   var theta =0;
   var diff = 2 * Math.PI / delta;
   var material_o = new THREE.MeshBasicMaterial({color: 0xffffff,side:THREE.DoubleSide});
   var geometry_o = new THREE.RingGeometry(radius, radius+6,32);
    //for (theta; theta<= 2 * Math.PI; theta+=diff){
    //   geometry_o.vertices.push(new THREE.Vector3(radius * Math.cos(theta)*1.8, 0, radius * Math.sin(theta)));
   // }
   var orbit = new THREE.Mesh(geometry_o, material_o);
   orbit.rotation.x  = Math.PI/2;
   scene.add(orbit);
 }
 
 //   var orbits = function(name, radius, delta){
 //     var theta =0;
 //     var diff = 2 * Math.PI / delta;
 //     var material_o = new THREE.MeshBasicMaterial({color: 0xffffff,side:THREE.DoubleSide});
 //     var geometry_o = new THREE.RingGeometry(800, radius+6,32);
 //      //for (theta; theta<= 2 * Math.PI; theta+=diff){
 //      //   geometry_o.vertices.push(new THREE.Vector3(radius * Math.cos(theta)*1.8, 0, radius * Math.sin(theta)));
 //     // }
 //     var orbit = new THREE.Mesh(geometry_o, material_o);
 //     orbit.rotation.x  = Math.PI/2;
 //     scene.add(orbit);
 // }
 
  orbits(mer,3200,3000);
 //Making the planet revolve around the sun in their respective orbit
  var theta_mer = 0;
  var revolution_mer = function(radius, delta, name){
     var diff = 2 * Math.PI/delta;
      name.position.x = radius * Math.cos(theta_mer) ;
      name.position.z = radius * Math.sin(theta_mer);
     
      theta_mer+=diff;
 
  }
 
  orbits(ven,2200,3000);
 //Making the planet revolve around the sun in their respective orbit
  var theta_ven = 0;
  var revolution_ven = function(radius, delta, name){
     var diff = 2 * Math.PI/delta;
      name.position.x = radius * Math.cos(theta_ven) ;
      name.position.z = radius * Math.sin(theta_ven);
     
      theta_ven+=diff;
 
  }
  orbits(earth,1800,3000);
 //Making the planet revolve around the sun in their respective orbit
  var theta_earth = 0;
  var revolution_earth = function(radius, delta, name){
     var diff = 2 * Math.PI/delta;
      name.position.x = radius * Math.cos(theta_earth) ;
      name.position.z = radius * Math.sin(theta_earth);
     
      theta_earth+=diff;
  }
 
  var theta_m = 0;
 
  var revolution_moon = function(radius, delta, name){
     var mtheta = 2 * Math.PI/delta;
     name.position.x = radius * Math.cos(theta_m) * 1.2;
      name.position.z = radius * Math.sin(theta_m);
     
      theta_m+=mtheta;
      }
     
      orbits(mar,1400,3000);
 //Making the planet revolve around the sun in their respective orbit
  var theta_mar = 0;
  var revolution_mar = function(radius, delta, name){
     var diff = 2 * Math.PI/delta;
      name.position.x = radius * Math.cos(theta_mar) ;
      name.position.z = radius * Math.sin(theta_mar);
     
      theta_mar+=diff;
  }
 
  orbits(jup,1000,3000);
 //Making the planet revolve around the sun in their respective orbit
  var theta_jup = 0;
  var revolution_jup = function(radius, delta, name){
     var diff = 2 * Math.PI/delta;
      name.position.x = radius * Math.cos(theta_jup) ;
      name.position.z = radius * Math.sin(theta_jup);
     
      theta_jup+=diff;
  }
 
  orbits(sat,800,3000);
 //Making the planet revolve around the sun in their respective orbit
  var theta_sat = 0;
  var revolution_sat = function(radius, delta, name){
     var diff = 2 * Math.PI/delta;
      name.position.x = radius * Math.cos(theta_sat) ;
      name.position.z = radius * Math.sin(theta_sat);
     
      theta_sat+=diff;
  }
  
  orbits(ura,600,3000);
 //Making the planet revolve around the sun in their respective orbit
  var theta_ura = 0;
  var revolution_ura = function(radius, delta, name){
     var diff = 2 * Math.PI/delta;
      name.position.x = radius * Math.cos(theta_ura) ;
      name.position.z = radius * Math.sin(theta_ura);
     
      theta_ura+=diff;
  }
 
  orbits(nep,400,3000);
 //Making the planet revolve around the sun in their respective orbit
  var theta_nep = 0;
  var revolution_nep = function(radius, delta, name){
     var diff = 2 * Math.PI/delta;
      name.position.x = radius * Math.cos(theta_nep) ;
      name.position.z = radius * Math.sin(theta_nep);
     
      theta_nep+=diff;
  }
 
 //Using Raycaster to select objects in scene with mouse
  const raycaster = new THREE.Raycaster();//3D
  const mouse = new THREE.Vector2();//2D
 
  function onMouseMove(event){
     
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
     mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
     
  }
 
  window.addEventListener('click', onMouseMove, false);
 
 //Declaring a function to follow planets
  var FollowPlanet = function(name){
     camera.position.x = name.position.x + 100;
      camera.position.y = name.position.y + 100;
      camera.position.z = name.position.z + 100;
     
      camera.lookAt(name.position);
  }
 
 //Event listener to come out of following the planet
  var mer_flag = 0;
  var ven_flag = 0;
  var earth_flag = 0;
  var mar_flag = 0;
  var jup_flag = 0;
  var sat_flag = 0;
  var ura_flag = 0;
  var nep_flag = 0;
 
 
  document.addEventListener("keydown", function(event) {
     if(event.keyCode === 27){
         //Esc key was pressed
         console.log('esc working');
         
         mer_flag=0;
         ven_flag=0;
         earth_flag=0;
         mar_flag=0;
         jup_flag=0;
         sat_flag=0;
         ura_flag=0;
         nep_flag=0;
         
          
          document.getElementById('mer_text').style.display = 'none';
          document.getElementById('ven_text').style.display = 'none';
          document.getElementById('earth_text').style.display = 'none';
          document.getElementById('mar_text').style.display = 'none';
          document.getElementById('jup_text').style.display = 'none';
          document.getElementById('sat_text').style.display = 'none';
          document.getElementById('ura_text').style.display = 'none';
          document.getElementById('nep_text').style.display = 'none';
 
    }
  });
 
 
 
 function animate(){
     //Rotating the earth about itself and revolution
      
      mer.rotation.y += 0.01;
      revolution_mer(400, 300, mer);
      ven.rotation.y += 0.01;
      revolution_ven(600, 800, ven);
      earth.rotation.y += 0.01;
      revolution_earth(800, 1000, earth);
      mar.rotation.y += 0.01;
      revolution_moon(90, 1000, moon);
      revolution_mar(1000, 2000, mar);
      jup.rotation.y += 0.01;
      revolution_jup(1400, 4000, jup);
      sat.rotation.y += 0.01;
      revolution_sat(1800, 7000, sat);
      ura.rotation.y += 0.01;
      revolution_ura(2200, 8000, ura);
      nep.rotation.y += 0.01;
      revolution_nep(3200, 10000, nep);
      
     
    
     //Updating the renderer
      renderer.render(scene,camera);
      requestAnimationFrame(animate);
 }
 animate();
 
