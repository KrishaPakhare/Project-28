class Throw{
    constructor(bodyA,pointB){
        var option ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness:0.04,
            length:3,

        }
        this.pointB=pointB;
        this.throw = Constraint.create(option)
        World.add(world,this.throw);
    }
    fly(){
        this.throw.bodyA=null;
    }

    launch(bodyA){
        this.throw.bodyA = bodyA;
    }

    display(){
        
        if(this.throw.bodyA){
        var pointA = this.throw.bodyA.position
        var pointB = this.pointB
        strokeWeight(4)
        line (pointA.x , pointA.y, pointB.x , pointB.y)
     }
    }


    
}