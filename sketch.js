let x = 200;
let y =250

var numeroLineas=8;
var r1=35;   //Radio1 
var r2=135;  //Radio2

function setup() {
  cigarette=loadImage("cigarette.png")
  createCanvas(700, 700);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
if(mouseX<900&&mouseX>-250){
   if (x > 198) {
     x -= 2;
   } else if (x < 198) {
     x += 2;
   }
   x += floor(movedX / 3);}
  if(mouseY<800&&mouseY>0){
   if (y > 248) {
     y -= 2;
   } else if (x < 248) {
     y += 2;
   }
   y += floor(movedY / 5);}
  //237, 34, 93
   background(177, 250, 238);
strokeWeight(6);
stroke(63, 252, 221);
 line(0,0,x,y)
  strokeWeight(1);
  line(-8,0,x-8,y)
   strokeWeight(20);
  line(30,404,x,y);
  line(90,0,x,y);
  strokeWeight(14);
  line(150,400,x,y);
   strokeWeight(5);
  line(170,400,x+8,y+4);
   stroke(177, 250, 238);
  line(35,400,x+5,y);
 
  
  

   stroke(0);
    noStroke();
fill(56, 214, 188);
  ellipse(x, y, 200, 200);
  
  strokeWeight(7);
       stroke(177, 250, 238);
      
  Angle4= 360/10; //10=point
  //i=angle
  for (i=270;i<630;i=i+Angle4){
  	x1 = cos(radians(i)) * 100; //convert angle to radians for x and y coordinates
  	y1 = sin(radians(i)) * 100;
  	line(x, y, x-x1, y-y1);
  }
  fill(0);
   ellipse(x, y, 50, 50);
  noFill();
  strokeWeight(3);
  fill(66, 245, 215);
  ellipse(x, y, 100, 100); 
  noFill();
   strokeWeight(1);
   stroke(177, 250, 238);
  ellipse(x,y,150,150)
  stroke(81, 201, 187);
  ellipse(x,y,205,205)
 

  
  strokeWeight(1);
 
 stroke(75, 125, 117);

  Angle= 360/70; //50=point
  //i=angle
  for (i=270;i<630;i=i+Angle){
  	x1 = cos(radians(i)) * 50; //convert angle to radians for x and y coordinates
  	y1 = sin(radians(i)) * 50;
  	line(x, y, x-x1, y-y1); //draw a line from each point back to the centre
  }
  stroke(92, 181, 167);
  Angle2= 360/100;
   for (i=270;i<630;i=i+Angle2){
  	x1 = cos(radians(i)) * 35; //convert angle to radians for x and y coordinates
  	y1 = sin(radians(i)) * 35;
  	line(x, y, x-x1, y-y1); //draw a line from each point back to the centre
  }
    stroke(0);
  Angle3= 360/200;
   for (i=270;i<630;i=i+Angle2){
  	x1 = cos(radians(i)) * 25; 
  	y1 = sin(radians(i)) * 25;
  	line(x, y, x-x1, y-y1); 
  }
  

  
stroke(0)
  strokeWeight(3);
  //upper space
  fill(255);
    beginShape();
  vertex(0,80);
    vertex(30,63);
    vertex(80,50);
    vertex(0,0);
  endShape();
  beginShape();
  vertex(0,0);
    vertex(80,50);
    vertex(170,50);
  vertex(200,30);
    vertex(185,0);
  endShape();
   beginShape();
  vertex(0,0);
    vertex(80,50);
    vertex(170,50);
  vertex(200,30);
    vertex(185,0);
  endShape();
   beginShape();
    vertex(170,50);
  vertex(200,30);
    vertex(185,-10);
  vertex(350,-10);
  vertex(300,84);
  endShape();
  
   beginShape();
  vertex(360,-10);
  vertex(300,84);
   vertex(406,140);
   vertex(406,0);
   endShape();
  //down
   beginShape();
  vertex(-5,400);
  vertex(-5,370);
   vertex(140,400);
   endShape();
  
  fill(0);
     beginShape();
   vertex(350,-10);
  vertex(360,-10);
  vertex(300,84);
  endShape();
       beginShape();
   vertex(350,-10);
  vertex(360,-10);
  vertex(300,84);
  endShape();
 
  noFill();
  strokeWeight(15);
    bezier(-100, 200, 0,0, 200,0, 500,200);
   bezier(-100,320,0,390,200,410,500,460);
  
  
  
  
  
//background
	noStroke();
fill(52, 17, 77)
  beginShape();
  vertex(400,0);
   vertex(width,0);
   vertex(width,height);
   vertex(400,400);
  endShape();
  
   beginShape();
  vertex(0,400);
   vertex(0,height);
   vertex(width+5,height);
   vertex(405,400);
  endShape();
  
  fill(28, 10, 41)
   beginShape();
  vertex(400,0);
   vertex(420,0);
   vertex(420,420);
   vertex(400,400);
  endShape();
  
  fill(110, 67, 140)
     beginShape();
  vertex(0,400);
   vertex(0,420);
   vertex(420,420);
   vertex(400,400);
  endShape();
  fill(28, 10, 41);
   beginShape();
  vertex(637,150);
   vertex(610,230);
   vertex(550,700);
  vertex(600,700);
  vertex(610,680);
  vertex(590,650);
   vertex(640,350);
  
  endShape();
  
  image(cigarette,510,120,460,1700);
 }