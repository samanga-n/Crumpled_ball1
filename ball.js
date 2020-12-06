class ball {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:3.2
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,r/2,options);
        
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
      
        ellipseMode(CENTER);      
        fill('green');
        ellipse(0,0,this.r,this.r);
        pop();
    }
}