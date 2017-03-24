var x = 0;
var speed = 3;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(50);
    //i wrote this so the background changes to pink when clicked
    if(mouseIsPressed){
      background(255, 99, 135);
   }
   
   //makes outline white, 6px thick, no clor inside shapes
  stroke(255);
  strokeWeight(6);
  noFill();
   
  if(mouseY<100){
      fill(66, 116, 244);
  }
  else{
      noFill();
  }
  //a circle
  ellipse(x,200,100,100);
   
  //this code is going to get the circle to move on its own 
  if(x<width){
  x = x + speed;
  }
  
  if(x>width || x<0){
      console.log("CIRCLE IS OFF THE SCREEN!!!!")
      speed = speed * -1;
      
  }
  x = x + speed;
  console.log(x);
}
    