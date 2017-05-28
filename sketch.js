function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background('#FBE571');
  //background("red");
}
var x = 100,
      y = 100,
      dia = 100;

function draw() {
  
  fill('lightblue');
  stroke('white');
  /*
  fill('lightblue');
  stroke('white');
  ellipse(50, 50, 50, 50);  
  */
   background('#FBE571');
  
  x = x + 5;    
  ellipse(x, y, dia, dia);    
  
  
  
  fill('white');
  noStroke();
  ellipse(x + (dia*0.2), y-(dia*0.2), dia/12, dia/8);    
  
  
}