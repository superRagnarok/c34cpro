class Block{
    constructor(x,y,w,h){
 var options={
     density: 0.2,
     friction: 1,
     restitution: 0.8
 }
 this.body=Bodies.rectangle(x,y,w,h,options);
 this.width=w;
 this.height=h;
 World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
rectMode(CENTER);
fill("red");
rect(0,0,this.width,this.height);
pop();
    }
}