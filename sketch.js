const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var umbrella
var engine,world
function preload(){
    
}

function setup(){
    createCanvas(800, 700);

	engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella();
    
    Engine.run(engine);
    
}

function draw(){

    drawSprites();
    umbrella.display(100,100,3);
}   

