var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var redBgroup;
var blueBgroup;
var greenBgroup;
var pinkBgroup;
var bowgamegroup;
var arrowgamegroup;


var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  
  redBgroup = createGroup();
  blueBgroup = createGroup();
  greenBgroup = createGroup();
  pinkBgroup = createGroup();
  bowgamegroup = createGroup();
  arrowgamegroup = createGroup();
  
      
}

function draw() {
  background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
  
  if(keyDown("space")) {
    
    createArrow();
    
  }
  
  if (arrowgamegroup.isTouching(redBgroup)) {
    arrowgamegroup.destroyEach();
    redBgroup.destroyEach();
    score = score+1;
    
  }
  if (arrowgamegroup.isTouching(blueBgroup)) {
    arrowgamegroup.destroyEach();
    blueBgroup.destroyEach();
    score = score+1;
    
  }
  if (arrowgamegroup.isTouching(greenBgroup)) {
    arrowgamegroup.destroyEach();
    greenBgroup.destroyEach();
    score = score+1;
    
  }
  if (arrowgamegroup.isTouching(pinkBgroup)) {
    arrowgamegroup.destroyEach();
    pinkBgroup.destroyEach();
    score = score+1;
    
  }
  
  
  
  
  drawSprites();
  text("Score: "+ score, 300,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redBgroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueBgroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenBgroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkBgroup.add(pink);
}

function createArrow () {
  
  var arrow = createSprite(350, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.velocityX = -4;
  arrow.lifetime = 150;
  arrow.scale = 0.25;
  arrow.y = bow.y
  arrowgamegroup.add(arrow);
  
}
