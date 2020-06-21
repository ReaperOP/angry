const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground
var pig1;
var pig2
var log1;
var log2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,390,1200,10)
    box1 = new Box(700,300,50,50);
    box2 = new Box(920,300,50,50);
   
   
    pig1 = new Pig(810,200)
   
    log1 = new Log(810,260,300,PI/2)
    box3 = new Box(700,240,50,50);
    box4 = new Box(920,240,50,50)
    pig2 = new Pig(810,300)
    log2 = new Log(810,150,300,PI/2)
    box5 = new Box(810,100,50,50)
    log3 = new Log(750,120,150,PI/7)
    log4 = new Log(850,120,150,-PI/7)
    bird1 = new AngryBird(100,300)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
   ground.display();
}