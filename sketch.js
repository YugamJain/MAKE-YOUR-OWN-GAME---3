
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var candy1, candy2,candy3;
var backgroundImg,platform;
var eclair, slingshot;
var score = 0;



function preload() {
    bgImg = loadImage("images/bg.jpg");
    candyCrushImg = loadImage("images/Candy_Crush.png");
    candyCrushMusic = loadSound("Candy_crush_music.mp3");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,height,800,20);
    platform = new Ground(150, 305, 300, 170);
    eclair = new Eclair(200,50);

    slingshot = new SlingShot(eclair.body,{x:200, y:50});

    candy1 = new Candy(500,320,70,70);
    candy2 = new Candy(600,320,70,70);
    candy3 = new Candy(700,320,70,70);

    log1 = new Log(450,260,10,70, PI);
    log2 = new Log(550,260,10,70, PI);
    log3 = new Log(650,260,10,70, PI);
    log4 = new Log(750,260,10,70, PI);

    log5 = new Log(600,200,10,350, PI/2);

    candy4 = new Candy(500,180,70,70);
    candy5 = new Candy(600,180,70,70);
    candy6 = new Candy(700,180,70,70);

    log6 = new Log(450,100,10,70, PI);
    log7 = new Log(550,100,10,70, PI);
    log8 = new Log(650,100,10,70, PI);
    log9 = new Log(750,100,10,70, PI);

    log10 = new Log(600,80,10,350, PI/2);

    candy7 = new Candy(500,30,70,70);
    candy8 = new Candy(600,30,70,70);
    candy9 = new Candy(700,30,70,70);

    log11 = new Log(450,20,10,70, PI);
    log12 = new Log(550,20,10,70, PI);
    log13 = new Log(650,20,10,70, PI);
    log14 = new Log(750,20,10,70, PI);

    log15 = new Log(600,0,10,350, PI/2);

    candyCrushMusic.loop();
    
}

function draw(){
    background(bgImg);
    Engine.update(engine);

    fill("white");
    textSize(20);
    text ( "Score  : " +score ,650,50);

   

    ground.display();
    platform.display();
    slingshot.display(); 
    push();
    imageMode(CENTER);
    image(candyCrushImg,150,305,300,200);
    pop();
    eclair.display();
    candy1.display();
    candy2.display();
    candy3.display();
    candy1.score();
    candy2.score();
    candy3.score();
    
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    candy4.display();
    candy5.display();
    candy6.display();
    candy4.score();
    candy5.score();
    candy6.score();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();

    candy7.display();
    candy8.display();
    candy9.display();
    candy7.score();
    candy8.score();
    candy9.score();
    log11.display();
    log12.display();
    log13.display();
    log14.display();
    log15.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(eclair.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(eclair.body, { x :200 , y :50 })
        slingshot.attach(eclair.body);
    }
}