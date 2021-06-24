class Coordinates{
    constructor(x,y,cantidad){
        this.x = x;
        this.y = y;
        this.cantidad = cantidad;
    }

    get getX(){
        return this.x;
    }
    
    get getY(){
        return this.y;
    }
    
    get getCantidad(){
        return this.cantidad;
    }
}


module.exports = Coordinates;