class Candy {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.2,
        'friction':0.5,
        'density':0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    var randomnum = Math.round(random(1,6));
    this.image = loadImage("images/Candy"+randomnum+".png");
    World.add(world, this.body);
    this.Visiblity = 255;
  }

  display(){
    //console.log(this.body.speed);

    if(this.body.speed < 10){
       var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    else{
      World.remove(world, this.body);
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      this.Visiblity = this.Visiblity - 50;
      tint(255,this.Visiblity);      
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
    

}

score(){
  if(this.Visiblity<0 && this.Visiblity>-1500 /*|| this.body.position.x>800*/){
    score = score+10;
  }
}

}
