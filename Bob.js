class Bob {
    constructor(x,y,radius) {
      var options = {
          'restitution':1,
		      'friction':0.0,
          'frictionAir':0.0,
          'slop': 1,
          'inertia': Infinity
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(0);
      stroke(255);
      ellipseMode(CENTER);
      ellipse(0,0, this.radius, this.radius);
      pop();
    }
  };