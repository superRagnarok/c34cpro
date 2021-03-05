class Ball{
    constructor(x,y,r){
 var options={
     density: 1,
     frictionAir: 0.0005
 }
 this.image= loadImage("Superhero-01.png");
 this.body=Bodies.circle(x,y,r-200,options);
this.r=r;
 World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        //rotate(this.body.angle);
imageMode(CENTER);
fill("lime");
image(this.image,0,0,this.r,this.r-180);
pop();
    }
}