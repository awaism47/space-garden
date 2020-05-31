/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Networking = require('Networking');

//url
const url= 'https://awais-space-apps.glitch.me/weather'



//Get current location
function getGeoLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess,onError);
  }else{
    console.log('not supported');
  }
}

function onSuccess(position){

  const {lat,lon}=position.coords;
  console.log(lat);
}

function onError(error){
  console.log(error);
}

//access text // NOTE:
var garden_text=Scene.root.find('2dText0')
garden_text.text= "You can grow potato"

// networking function to fetch data
Networking.fetch(url).then(function(result){
    if((result.status>=200)&&(result.status<300)){
      return result.json;
    } else {
      throw new Error('HTTP Status Code: '+ result.status);
    }
  }).then(function(json){
    chosenResponse=json.data;
    garden_text.text="ready";
  }).catch(function(error){
    garden_text.text='failed to start';
  })

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
