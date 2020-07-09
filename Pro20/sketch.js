var car, wall,speed,weight,actualSpeed;
function setup() {
createCanvas(1600,800);
//car and wall sprites 
car=  createSprite(50, 400, 40, 40);
wall=createSprite(1400,400,30,500);
//speed 1 Unit=3kmph
speed=random (10,30);

weight=random(400,1500)
}

function draw() {
  background(0);
  //moving car towards wall
  car.velocityX=speed; 
  
  //displaying car's speed 
  actualSpeed=Math.round(speed*3)
  text ("Car's speed: "+actualSpeed + " kmph",480,50);
  text("Car's weight: "+Math.round(weight) +"Kgs",660,50)

  //check wheather car is touching the wall and calculate deformation 
  if(wall.x-car.x < car.width/2+wall.width/2){
    text("Car hit the wall ", 480,70)

    //calculating deformation 
    var deformation=(0.5*actualSpeed*actualSpeed*weight)/22500;
    //deciding car's saftey according to deformation 
    if(deformation>180){
      car.shapeColor="red";
      fill ("red")
      text ("This Car is ​lethal ​for the passenger's safety",480,90);
    }
    if(deformation>80 && deformation< 180){
      car.shapeColor="yellow";
      fill ("yellow");
      text ("This Car is ​average ​for the passenger's safety",480,90);
    }
    if(deformation<80){
      car.shapeColor="green";
      fill ("green")
      text ("This Car is ​good ​for the passenger's safety",480,90);
    }
    car.velocityX=0;
  }

text (mouseX +","+mouseY,200,200)
  drawSprites();
}