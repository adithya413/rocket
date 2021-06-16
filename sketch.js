var bgImage;
var rocketImage,rocket
var asteroidsImage,asteroidsImage2,asteroidsImage3
var laserImage;
var blastImage;
var bulletsound;
var rockGroup,laserGroup

function preload(){
     bgImage=loadImage("1.jpg")
     rocketImage=loadImage("rocket.png")
     asteroidsImage=loadImage("asteroids.png")
asteroidsImage2=loadImage("blue comet.png")
asteroidsImage3=loadImage("fire meteor.png")
laserImage=loadImage("laser.png")
blastImage=loadImage("blast.png")

}

function setup(){
    createCanvas(displayWidth,displayHeight);
rocket=createSprite(300,300)
rocket.addImage(rocketImage)

rocket.scale=0.5
rockGroup=new Group();
laserGroup=new Group();


}

function draw(){
    background(bgImage)
    rocket.x=mouseX;
    rocket.y=mouseY;
    if (keyDown("space")){
spawnlaser();


    }
spawnAsteroids()
for(var i=0;i<rockGroup.length;i++){


if (rockGroup.get(i).isTouching(laserGroup)){
rockGroup.get(i).setAnimationEach(blastImage)
}
}

    drawSprites();

}
function spawnAsteroids(){
    if (frameCount%100===0){
        var asteroids=createSprite(20,0);
        asteroids.x=Math.round(random(50,displayWidth-50))
        asteroids.velocityY=2;
        var r=Math.round(random(1,3));
        if (r===1){

        
        asteroids.addImage(asteroidsImage)
        asteroids.scale=0.3
        }
        else if (r===2){
            asteroids.addImage(asteroidsImage2)
asteroids.scale=0.7
           
        }
        else{
            asteroids.addImage(asteroidsImage3)
            asteroids.scale=0.9
        }
        rockGroup.add(asteroids)
      
        
    }

}
function spawnlaser(){
    laser=createSprite(300,300)
    laser.x=rocket.x;
    laser.y=rocket.y
    laser.velocityY=-5
    laserGroup.add(laser)
    laser.addImage(laserImage)
    
}