// STEPS
// STEP 1: Create a blueprint for gift and create mulitple gifts using it
// STEP 2: Create a blueprint for stars and create multiple stars using it
// Make sure to add stars and gifts to the edges of the tree. Use images in assets folder

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world

function preload(){
  bgImg = loadImage("bg.jpeg")
}

function setup() {
  createCanvas(1000,600);
  
  engine = Engine.create();
  world = engine.world;
  
  tree = createImg("tree.png");
  tree.position(-50,-20)
  tree.size(700,700)

}


function draw() {
  background(bgImg);
  Engine.update(engine);

}

