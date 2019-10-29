var img;

// set up unit spacing and canvas size

var canvasWidth = 260;
var canvasHeight = 142;
var logoHeight = 30; 
var calcUnit = logoHeight*0.375;

// load images
function preload() {
  img = loadImage('data/test_IG.png');
}

function setup() {
  createCanvas(canvasWidth,canvasHeight, SVG);
  background(255);
  noStroke();
  smooth();
  noLoop();
}

function draw () {
  // for the unit to have follow logo's proportion
  for (var i = 0; i < canvasWidth; i=i+calcUnit) {
    for (var j = 0; j < canvasHeight; j=j+calcUnit) {
  
      // get current color
      img.loadPixels();
      var c = color(img.get(i, j)); 
    
      // greyscale conversion
      var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);
      
      // greyscale to rectangle size
      var rectWidth = map(greyscale, 0, 255, calcUnit/9, calcUnit/45);
      var rectLength = map(greyscale, 0, 255, calcUnit/1.5, calcUnit/7.5);
      rectMode(CENTER);  
      fill(0);  
      rect(i, j, rectWidth, rectLength); 
      rect(i+calcUnit/2, j+calcUnit/2, rectLength, rectWidth); 
    }
  }
  // export to svg
  save();
}