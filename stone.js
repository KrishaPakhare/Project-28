class Stone{
    constructor(x,y,diametre) {
        var options = {
            isStatic:true,
            restitution:0.8,
            friction:1,
            density:1.2,
        

        }
        this.body = Bodies.circle(x,y,diametre,options)
        this.radius=diametre
        this.image= loadImage("Pluckingmangoes/stone.png")
        World.add(world , this.body)
    }
    display(){
        push ();
        translate (this.body.position.x , this.body.position.y);
        // ellipseMode(RADIUS)
        // ellipse(0,0,this.radius,this.radius)
         imageMode (CENTER);
        image(this.image ,0,0,3*this.radius , 3*this.radius);
        pop ();
    }
}