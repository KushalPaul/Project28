class Tree {
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
      this.image = loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var treepos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(treepos.x, treepos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 600,460,400,440);
    }
  };