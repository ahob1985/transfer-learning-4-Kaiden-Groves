// Author:

// Global UI Variables
let canvasDiv;

let canvas;

let textDiv;

let textP;

let sliderDiv;

let slider;

let sadSpan;

let happySpan;

let buttonDiv;

let addExampleButton;

let trainButton;
//let canvasDiv;

// Global ML Variables
let featureExtractor;

let predictor;

let video;

let isModelReady;

let isTrainingComplete;

let addedExamples;
//let featureExtractor;

function setup() {

}

function draw() {

}

function buildInput() {
  sliderDiv = createDiv();
  sadSpan = createSpan("Sad");sadSpan.parent(sliderDiv);
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.parent(sliderDiv);
  addExampleButton.mousePressed(function () {

  addedExamples++;

  textP.html("Added Examples: " + addedExamples);

  predictor.addImage(canvas, slider.value());

  });
  trainButton.mousePressed(function () {

  buttonDiv.style("display", "none");

  sliderDiv.style("display", "none");

  predictor.train(whileTraining);

  });
}

function videoReady() {
  featureExtractor = ml5.featureExtractor("MobileNet", featureExtractorLoaded);
}

function featureExtractorLoaded() {
  predictor = featureExtractor.regression(canvas, modelReady);
}

function modelReady() {
  sliderDiv.style("display", "block");

  buttonDiv.style("display", "block");
}

function whileTraining(loss) {
  if(isTrainingComplete) {

  predictor.predict(canvas, gotResults);

  }
}

function gotResults(error, results) {
  if(error) {

  console.error(error);

  } else {

  //console.log(results);

  let value;

  

  }
  if(error) {

  console.error(error);

  if(error) {

  console.error(error);

  } else {

  //console.log(results);

  let value = floor(results.value * 100);

  textP.html("Happiness: " + value + "%");

  }
}
