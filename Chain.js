class Chain{
        constructor(bodyA,bodyB){
            var options = {
                bodyA : bodyA,
                bodyB : bodyB,
                lenght : 40,
                stiffness : 0.5
            } 
            this.body = Constraint.create(options);
            World.add(world,this.body);
        }

        display() {
        stroke("lightBlue");
        //line(bird.ody.position.x,bird)
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y);
        }
}