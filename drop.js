class drop
{
    constructor(x,y)
    {
        var options = {isStatic:false , restitution:1.1 , friction:0.1};
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
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
        fill("lightblue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}