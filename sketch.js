const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;





function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground(450,400,900,40);

  for(var k=0; k <=width; k=k+80){

    divisions.push(new Divisionss(k,-divisionHeight/2, 10, divisionHeight));

  }


  for(var j = 40; j <=width; j=j+50){

    plinkos.push(new plink(j, 75));

  }
  
  for(var j = 15; j <=width-10; j=j+50){

    plinkos.push(new plink(j, 175));

  }
  for(var j = 40; j <=width; j=j+50){

    plinkos.push(new plink(j, 275));

  }

  for(var j = 15; j <=width-10; j=j+50){

    plinkos.push(new plink(j, 375));

  }

  for(var k=0; k<width; k=k + 80){

    divisions.push(new Divisionss (k, height-divisionHeight/2,10, divisionHeight));

  }

  
  if(frameCount%60===0){

    particles.push(new parti(random(width/2, width/2+10), 10,10));


  }


 




}

function draw() {
  background(0); 
  
  ground.display();

// Text ("size of particle is : ",200,300 );

  for(var j = 0; j <=particles.length; j++){

    particles[j].display();

  }

  for(var k = 0; k <=divisions.length; k++){

    divisions[k].display();

  }

  drawSprites();
}