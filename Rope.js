class Rope{
    constructor(body1,point2){
        var options={
bodyA: body1,
pointB: point2,
stiffness: 1.2,
length: 430

        }
this.rope= Constraint.create(options);
this.pointB=point2;
World.add(world,this.rope);
    }
    display(){
        push();
stroke("maroon");
strokeWeight(0);
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
pop();

    }
}