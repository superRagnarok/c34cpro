const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var backgroundImg;
function preload() {
    backgroundImg= loadImage("GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground();
    block1=new Block(900,100,70,70);
    block2=new Block(900,100,70,70);
    block3=new Block(900,100,70,70);
    block4=new Block(900,100,70,70);
    block5=new Block(900,100,70,70);
    block6=new Block(900,100,70,70);

    block7=new Block(800,100,70,70);
    block8=new Block(800,100,70,70);
    block9=new Block(800,100,70,70);
    block10=new Block(800,100,70,70);
    block11=new Block(800,100,70,70);
    block12=new Block(800,100,70,70);

    block13=new Block(700,100,70,70);
    block14=new Block(700,100,70,70);
    block15=new Block(700,100,70,70);
    block16=new Block(700,100,70,70);
    block17=new Block(700,100,70,70);
    block18=new Block(700,100,70,70);
    block19=new Block(700,100,70,70);
    block20=new Block(700,100,70,70);

    block21=new Block(1000,100,70,70);
    block22=new Block(1000,100,70,70);
    block23=new Block(1000,100,70,70);
    block24=new Block(1000,100,70,70);
    block25=new Block(1000,100,70,70);
    block26=new Block(1000,100,70,70);
    block27=new Block(1000,100,70,70);
    block28=new Block(1000,100,70,70);

    ball= new Ball(300,200,400);

 rope = new Rope(ball.body,{x:300 , y:50});

 monster = new Monster(1500,400,300);



}

function draw(){
    Engine.update(engine);
    background(backgroundImg);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();


    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();

    ball.display();

    rope.display();

    monster.display();

    detectCollision(block1,monster);
    detectCollision(block2,monster);
    detectCollision(block3,monster);
    detectCollision(block4,monster);
    detectCollision(block5,monster);
    detectCollision(block6,monster);
    detectCollision(block7,monster);
    detectCollision(block8,monster);
    detectCollision(block9,monster);
    detectCollision(block10,monster);
    detectCollision(block11,monster);
    detectCollision(block12,monster);
    detectCollision(block13,monster);
    detectCollision(block14,monster);
    detectCollision(block15,monster);
    detectCollision(block16,monster);
    detectCollision(block17,monster);
    detectCollision(block18,monster);
    detectCollision(block19,monster);
    detectCollision(block20,monster);
    detectCollision(block21,monster);
    detectCollision(block22,monster);
    detectCollision(block23,monster);
    detectCollision(block24,monster);
    detectCollision(block25,monster);
    detectCollision(block26,monster);
    detectCollision(block27,monster);
    detectCollision(block28,monster);

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX , y: mouseY});
   // Matter.Body.setStatic(monster.body,false);
}
function detectCollision(block,monster){
    mangoBodyPostion=monster.body.position;
    stoneBodyPosition=block.body.position;
    
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPostion.x,mangoBodyPostion.y);
    if (distance<=monster.r+block.width){
        Matter.Body.setStatic(monster.body,false);
    }
    }