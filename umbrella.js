class umbrella
{
    constructor(x,y)
    {
        var options = {isStatic:true , restitution:1.1}
        this.image = loadImage("walking_1.png");
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 300, 300);
    }
}