class Mango{
  constructor(x, y, r) {
      var options = {
          'isStatic':true,
          'restitution':0,
          'friction':1
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y,this.r/3,options);
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var paperpos = this.body.position
      push()
      translate(paperpos.x, paperpos.y);
      rectMode(CENTER);
      strokeWeight(0);
      fill("darkgreen");
      ellipse(0,0,this.r,this.r)
      imageMode(CENTER);
      image(this.image, 0, 0, 40, 40);
      pop()
    }
}