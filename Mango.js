class Mango {
    constructor(x, y , diameter) {
      var options = {
          isStatic : true,
          'restitution':0,
          'friction':0.3,
      }
      this.body = Bodies.circle(x, y,diameter, options);
      this.radius=diameter;
      this.image = loadImage("Pluckingmangoes/mango.png")
      World.add(world, this.body);
      
    }
    display(){
      push ()
      translate(this.body.position.x , this.body.position.y);
       imageMode (CENTER)
       image (this.image , 0,0,2*this.radius,2*this.radius)
      // ellipseMode(RADIUS)
      // ellipse(0,0,this.radius,this.radius)
      pop();
    }
  };