var car, wall;
var speed, weight; 

function setup() {
  createCanvas(1600,400);

  car = createSprite(20,200,50,50);
  wall = createSprite(1200,200,60,100);

  car.velocityX = random(7);

  speed = random(55,90);
  weight = random(400,1500);
  
}

function draw() {
  background("black");
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityx = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation>100)
      {
       car.shapeColor = color("yellow");
       wall.shapeColor = color("white");
      }
    if (deformation < 150 && deformation > 150)
    {
      car.shapeColor = color("green");
       wall.shapeColor = color("white");
    } 
    if (deformation<200)
      {
       car.shapeColor = color("red");
       wall.shapeColor = color("white");
      } 
  }

  drawSprites();
}