class Bin{
    constructor(x, y, width,height) {

        var bin_options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Bodies.rectangle(x, y,width,height, bin_options);
        this.width = width;
        this.height = height; 
        World.add(world,this.body);
    }

    display(){
        push();
            translate(this.body.position.x, this.body.position.y);
            rect(0,0,this.width,this.height);
        pop();
    }  
}  