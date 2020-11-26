class Mango {

    constructor(x,y){
    var options ={
     isStatic:true,
     restitution:0,
     friction:1
    
    }
     
     this.width = 40;
     this.height = 40;
     this.image = loadImage("mango.png");
     this.body = Bodies.rectangle(x,y,this.width,this.height,options);
     World.add(world,this.body);

     }
     
     display(){

    var pos = this.body.position;
     translate(pos.x,pos.y);
     rotate(this.body.angle);
     imageMode(CENTER);
     image(this.image,0,0,this.width,this.height);

     }

}