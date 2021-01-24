// this is my coding project for tick tock, hope you enjoy :)

var hr, mn, sc;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,400);

angleMode(DEGREES);

}

function draw() {
  background("black");  
  
  //making the arcs start at the top
  translate(200,200);
  rotate(-90);

  //making the hour, minute, and second variables
  hr = hour();
  mn = minute();
  sc = second();

  // making the second arc
  strokeWeight(9);
  noFill()
  stroke(255,0,0);
  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  //making the second hand
  push();
  rotate(scAngle);
  strokeWeight(5);
  stroke(255,0,0);
  line(0,0,110,0);
  pop();

  //making the minute hand
  strokeWeight(9);
  stroke(0,255,0);
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  push();
  strokeWeight(5)
  rotate(mnAngle);
  stroke(0,255,0);
  line(0,0,80,0);
  pop();

  strokeWeight(9);
  stroke(0,0,255);
  hrAngle = map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  strokeWeight(5);
  rotate(hrAngle);
  stroke(0,0,255);
  line(0,0,50,0);
  pop();
  
  
  drawSprites();
}
