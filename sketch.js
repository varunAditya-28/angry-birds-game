const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig2,pig3;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(430,320,70,70);
    box2 = new Box(650,320,70,70);
    pig1 = new Pig(540,350);
    log1 = new Log(760,290,730, PI/2);

    box3 = new Box(870,320,70,70);
    box4 = new Box(1090,320,70,70);
    pig2 = new Pig(760, 350);
    pig3 = new Pig(980,350);
    pig4 = new Pig(650,270);
    pig5 = new Pig(870,270);
    pig6 = new Pig(760,220)

    log3 =  new Log(760,240,510, PI/2);

    box5 = new Box(540,270,70,70);
    box6 = new Box(760,270,70,70);
    box7 = new Box(980,270,70,70);
    box8 = new Box(650,220,70,70);
    box9 = new Box(870,220,70,70);
    box10 = new Box(760,180,70,70)
    log4 = new Log(760,200,290, PI/2);
   // log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    log4.display();
    //log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
if(keyCode===32){
slingshot.attach(bird.body);    
}
}