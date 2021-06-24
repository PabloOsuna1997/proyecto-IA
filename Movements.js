const Coordinates = require("./Coordinates");

function getCountDown(array, x, y, turno){
    let cantidadFichas = 0;
    while(y < 8){
        y++;
        if(array[x][y] == 2){
            break;
        }
        else if(array[x][y] != turno){
            cantidadFichas++;
        }else{
            break;
        }
    }

    return new Coordinates(x,y,cantidadFichas);
}

function getCountUp(array, x, y, turno){
    let cantidadFichas = 0;
    while(y > 0){
        y--;
        if(array[x][y] == 2){
            break;
        }
        else if(array[x][y] != turno){
            cantidadFichas++;
        }else{
            break;
        }
    }
    return new Coordinates(x,y,cantidadFichas);;
}

function getCountLeft(array, x, y, turno){
    let cantidadFichas = 0;
    while(x > 0){
        x--;
        if(array[x][y] == 2){
            break;
        }
        else if(array[x][y] != turno){
            cantidadFichas++;
        }else{
            break;
        }
    }
    return new Coordinates(x,y,cantidadFichas);;
}

function getCountRight(array, x, y, turno){
    let cantidadFichas = 0;
    while(x < 8){
        x++;
        if(array[x][y] == 2){
            break;
        }
        else if(array[x][y] != turno){
            cantidadFichas++;
        }else{
            break;
        }
    }
    return new Coordinates(x,y,cantidadFichas);
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
                break;
            }
        }
    }
    return new Coordinates(x,y,cantidadFichas);
}

function getCountDiagonalUpRight(array, x, y, turno){
    let cantidadFichas = 0;
    while(y > 0){
        y--;
        while(x < 8){
            x++;
            if(array[x][y] == 2){
                return new Coordinates(x,y,cantidadFichas);
            }
            else if(array[x][y] != turno){
                cantidadFichas++;
                break;
            }else{
                break;
            }
        }
    }
    return new Coordinates(x,y,cantidadFichas);
}

function getCountDiagonalDownLeft(array, x, y, turno){
    let cantidadFichas = 0;
    while(y < 8){
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
                break;
            }
        }
    }
    return new Coordinates(x,y,cantidadFichas);
}

function getCountDiagonalDownRight(array, x, y, turno){
    let cantidadFichas = 0;
    while(y < 8){
        y++;
        while(x < 8){
            x++;
            if(array[x][y] == 2){
                return new Coordinates(x,y,cantidadFichas);
            }
            else if(array[x][y] != turno){
                cantidadFichas++;
                break;
            }else{
                break;
            }
        }
    }
    return new Coordinates(x,y,cantidadFichas);
}


module.exports = { getCountDown, getCountUp, getCountLeft, getCountRight, getCountDiagonalDownLeft, getCountDiagonalDownRight, getCountDiagonalUpLeft, getCountDiagonalUpRight};