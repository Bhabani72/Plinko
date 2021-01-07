const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var Ground;
var pinko = [];
var particles = [];
var divisions = [];

function setup() {

  createCanvas(1400,630);
  engine = Engine.create();
  world = engine.world;
  
  Ground = new ground(700,630,1400,10);

  for(var d =0;d<=width;d = d+80){
    divisions.push(new line(d,550,5,200));
    
  }  
  
  for(var p = 0;p<=width;p=p+40){
    pinko.push(new fixballs(p,100));
  }
  for(var p = 0;p<=width;p=p+50){
    pinko.push(new fixballs(p,150));
  }
  for(var p = 0;p<=width;p=p+40){
    pinko.push(new fixballs(p,200));
  }
  for(var p = 0;p<=width;p=p+50){
    pinko.push(new fixballs(p,250));
  }
  //console.log(frameCount); 
  Engine.run(engine);
  }

  function draw() {
    background("cyan");

    Ground.display();

    if(frameCount%20 === 0){
      particles.push(new balls(random(width/2-10,width/2+10),5,5));
    }
    for(var l=0;l<pinko.length;l++){
      pinko[l].display();
  
    }
    for(var l=0;l<divisions.length;l++){
      divisions[l].display();
  
    }
    for(var l=0;l<particles.length;l++){
      particles[l].display();
    }

    drawSprites(); 

  }