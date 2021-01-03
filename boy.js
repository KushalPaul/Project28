class Boy {
    constructor(x,y,width,height) {
      var options = {
        'isStatic':true,
        'restitution':0,
        'friction':1.0,
        'density':1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("boy.png");
      World.add(world, this.body);
    }
    display(){
      var boypos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(boypos.x, boypos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 150,600,150,250);
    }
  };