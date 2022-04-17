class Link
{
  constructor(bodyA, bodyB)
  {
      var lastLink = bodyA.body.bodies.length-2
      this.link = Constraint.create(
          {
              bodyA:bodyA.body.bodies[lastLink], 
              bodyB:bodyB, 
              stiffness : 0.01,
              length:-6
          }
      )
      World.add(world, this.link);
  }
}