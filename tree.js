class Tree {

    constructor(x,y){
    var options ={
     isStatic:false,
     restitution:0,
     friction:1,
     density:1.2
    }
     this.body = Bodies.rectangle(x,y,40,40,options);
     this.width = width;
     this.height = height;
     this.image = loadImage("tree.png");
     World.add(world,this.body)

     }
     
     display(){

     var pos = this.body.position;
     rectMode(CENTER);
     rect(pos.x,pos.y);





     }

}