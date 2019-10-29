var img;

// set up unit spacing and canvas size

var col = 90;
var row = 63;
var calcUnit = 11.339;
var verticalPadding = 1;
var horizontalPadding = 1;

var canvasWidth = calcUnit*col+verticalPadding*2;
var canvasHeight = calcUnit*row+horizontalPadding*2; 

// load images
function preload() {
  img = loadImage('data/menu.1029-radial.png');
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
  for (var i = verticalPadding+calcUnit; i < canvasWidth; i=i+calcUnit) {
    for (var j = horizontalPadding+calcUnit/2; j < canvasHeight-horizontalPadding; j=j+calcUnit) {
  
      // get current color
      img.loadPixels();
      var c = color(img.get(i, j)); 
    
      // greyscale conversion
      var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);
      
      // greyscale to rectangle size
      var rectWidth = map(greyscale, 0, 255, calcUnit/9, calcUnit/36);
      var rectLength = map(greyscale, 0, 255, calcUnit/1.5, calcUnit/7.5);
      rectMode(CENTER);  
      fill(0);
      if (i < canvasWidth-calcUnit) {
        rect(i, j, rectWidth, rectLength);
      }
      if (j < canvasHeight-horizontalPadding-calcUnit) {
        rect(i-calcUnit/2, j+calcUnit/2, rectLength, rectWidth);  
      }
    }
  }
  
  // export to svg
  save();
}
