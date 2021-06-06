const Engine= Matter.engine;
const world= Matter.world;
const Bodies= Matter.bodies;
const Body= Matter.body;
const Render= Matter.render;
var dustbinObj,paperObject,groundObject;
var World
function setup(){
    createCanvas(1600,700);
    rectMode(CENTER);
    engine= Engine.create();
    world=engine.world;
    paperObject= new paper(200,450,70);
    groundObject= new ground(width/2,670,width,20);
    dustbinObj= new dustbin(1200,650);
    //create a ground
    var render= Render.create({
      element:document.body,
      engine:engine,
      options:{
          width:1600,
          height:700,
          wireframes:false
      }


    })
    Engine.run(engine);
    Render.run(render);
}
function draw(){
    rectMod(CENTRE);
    background(230);
    paperObject.display();
    groundObject.display();
    dustbinObj.displayI();}

function keyPressed(){
 if (keyCode ===UP_ARROW){
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
 }
}
    
