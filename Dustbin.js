class Dustbin
{
    constructor(x,y,w,h)
    {
        var options=
        {
            isStatic:true
        }
        this.bodies=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.bodies);
        this.w=w;
        this.h=h;
    }
    display()
    {
        push();
        fill("red");
        rectMode(CENTER);
        rect(this.bodies.position.x,this.bodies.position.y,this.w,this.h);
        pop();
    }

}