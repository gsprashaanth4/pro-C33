class snow
{
    constructor(x,y)
    {
        var options = {isStatic:false , restitution:1.1 , friction:0.1};
        this.body = Bodies.circle(x,y, random(6,10) ,options);
        this.radius = random(6,10);
        World.add(world,this.body);
    }

    bounceoff()
    {
        if(this.body.position.y>550)
        {
            Matter.Body.setPosition(this.body, {x:random(0,600) , y:random(0,600)});
        }
    }
    
    display()
    {
        var pos = this.body.position;
        strokeWeight(1);
        stroke("white");
        fill("white");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}