class Monster{
    constructor(x,y,r){
        var options={
           density: 0.08,
           friction: 0.0005,
           restitution: 0.8,
           isStatic: true
        }
        this.image=loadImage("Monster-01.png");
        this.body=Bodies.circle(x,y,r-200,options);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
imageMode(CENTER);
image(this.image,0,0,this.r,this.r);
pop();
    }
}