const Coordinates = require("./Coordinates");

function getCountRight(array, x, y, turno){
    let cantidadFichas = 0;
    while(y < 7){
        y++;
        if(array[x][y] == 2){
            return new Coordinates(x,y,cantidadFichas);
        }
        else if(array[x][y] != turno){
            cantidadFichas++;
        }else{
            cantidadFichas = 0;
            break;
        }
    }
    return new Coordinates(x,y,0);    
}

function getCountLeft(array, x, y, turno){
    let cantidadFichas = 0;
    while(y > 0){
        y--;
        if(array[x][y] == 2){
            return new Coordinates(x,y,cantidadFichas);
        }
        else if(array[x][y] != turno){
            cantidadFichas++;
        }else{
            cantidadFichas = 0;
            break;
        }
    }
    return new Coordinates(x,y,0);
}

function getCountUp(array, x, y, turno){
    let cantidadFichas = 0;
    while(x > 0){
        x--;
        if(array[x][y] == 2){
            return new Coordinates(x,y,cantidadFichas);
        }
        else if(array[x][y] != turno){
            cantidadFichas++;
        }else{
            cantidadFichas = 0;
            break;
        }
    }
    return new Coordinates(x,y,0);
}

function getCountDown(array, x, y, turno){
    let cantidadFichas = 0;
    while(x < 7){
        x++;
        if(array[x][y] == 2){
            return new Coordinates(x,y,cantidadFichas);
        }
        else if(array[x][y] != turno){
            cantidadFichas++;
        }else{
            cantidadFichas = 0;
            break;
        }
    }
    return new Coordinates(x,y,0);
}

function getCountDiagonalUpLeft(array, x, y, turno){
    let cantidadFichas = 0;
    while(y > 0){
        y--;
        while(x > 0){
            x--;
            if(array[x][y] == 2){
                return new Coordinates(x,y,cantidadFichas);
            }
            else if(array[x][y] != turno){
                cantidadFichas++;
                break;
            }else{
                return new Coordinates(x,y,0);
            }
        }
    }
    return new Coordinates(x,y,0);    
}

function getCountDiagonalDownLeft(array, x, y, turno){
    let cantidadFichas = 0;
    while(y > 0){
        y--;
        while(x < 7){
            x++;
            if(array[x][y] == 2){
                return new Coordinates(x,y,cantidadFichas);
            }
            else if(array[x][y] != turno){
                cantidadFichas++;
                break;
            }else{
                return new Coordinates(x,y,0);
            }
        }
    }
    return new Coordinates(x,y,0);
}

function getCountDiagonalUpRight(array, x, y, turno){
    let cantidadFichas = 0;
    while(y < 7){
        y++;
        while(x > 0){
            x--;
            if(array[x][y] == 2){
                return new Coordinates(x,y,cantidadFichas);
            }
            else if(array[x][y] != turno){
                cantidadFichas++;
                break;
            }else{
                return new Coordinates(x,y,0);
            }
        }
    }
    return new Coordinates(x,y,0);
}

function getCountDiagonalDownRight(array, x, y, turno){
    let cantidadFichas = 0;
    while(y < 7){
        y++;
        while(x < 7){
            x++;
            if(array[x][y] == 2){
                return new Coordinates(x,y,cantidadFichas);
            }
            else if(array[x][y] != turno){
                cantidadFichas++;
                break;
            }else{
                return new Coordinates(x,y,0);
            }
        }
    }
    return new Coordinates(x,y,0);
}


module.exports = { getCountDown, getCountUp, getCountLeft, getCountRight, getCountDiagonalDownLeft, getCountDiagonalDownRight, getCountDiagonalUpLeft, getCountDiagonalUpRight};