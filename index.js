const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const route = express.Router();
const { getCountDown, getCountUp, getCountLeft, getCountRight, getCountDiagonalUpLeft, getCountDiagonalUpRight, getCountDiagonalDownLeft, getCountDiagonalDownRight } = require('./Movements');
const Coordinates = require('./Coordinates');

app.set('port', process.env.PORT || 3000);
app.use(route);
app.use(cors());
app.use(morgan('dev'));



route.get('/', (req, res) => {
    const { turno, estado } = req.query;
    if(estado.length < 65){
        
        let array = new Array(8);
        for(let i = 0; i < 8; i++){
            array[i] = new Array(8);
        }

    
        console.log("Turno: " + (turno === '1' ? "Blanco" : "Negro"));
        
        //asignacion de la matriz 
        let x = 0;
        let y = 0;
        for(let i = 0; i < estado.length; i++){
            array[x][y] = estado[i];
            x++;
            if(x == 8){
                y++;
                x = 0;
            }
        }
    
        //capturar la informacion de cuantas fichas puedo comer para cada direccion
        var ultimaCoordenada = new Coordinates(0,0,0);
        for(let y = 0; y < array.length; y++){              //filas 
            for(let x = 0; x < array.length; x++){          //columnas
                if(array[x][y] == turno){
                    console.log("analizando ficha en coordenada: ", x, y)
                    let cantFichasAbajo = getCountDown(array, x, y, turno);
                    let cantFichasArriba = getCountUp(array, x, y, turno);
                    let cantFichasIzquierda = getCountLeft(array, x, y, turno);
                    let cantFichasDerecha = getCountRight(array, x, y, turno); 
                    let cantFichasIzquierdaArriba = getCountDiagonalUpLeft(array, x, y, turno);
                    let cantFichasDerechaArriba = getCountDiagonalUpRight(array, x, y, turno);
                    let cantFichasIzquierdaAbajo = getCountDiagonalDownLeft(array, x, y, turno);
                    let cantFichasDerechaAbajo = getCountDiagonalDownRight(array, x, y, turno); 

                    if(cantFichasAbajo.getCantidad > ultimaCoordenada.getCantidad){
                        ultimaCoordenada = cantFichasAbajo;
                    }
                    if (cantFichasArriba.getCantidad > ultimaCoordenada.getCantidad){
                        ultimaCoordenada = cantFichasArriba;
                    }
                    if (cantFichasDerecha.getCantidad > ultimaCoordenada.getCantidad){
                        ultimaCoordenada = cantFichasDerecha;
                    }
                    if (cantFichasIzquierda.getCantidad > ultimaCoordenada.getCantidad){
                        ultimaCoordenada = cantFichasIzquierda;
                    }
                    if (cantFichasIzquierdaArriba.getCantidad > ultimaCoordenada.getCantidad){
                        ultimaCoordenada = cantFichasIzquierdaArriba;
                    }
                    if (cantFichasDerechaArriba.getCantidad > ultimaCoordenada.getCantidad){
                        ultimaCoordenada = cantFichasDerechaArriba;
                    }
                    if (cantFichasIzquierdaAbajo.getCantidad > ultimaCoordenada.getCantidad){
                        ultimaCoordenada = cantFichasIzquierdaAbajo;
                    }
                    if (cantFichasDerechaAbajo.getCantidad > ultimaCoordenada.getCantidad){
                        ultimaCoordenada = cantFichasDerechaAbajo;
                    }
                }
            }
        }        
        console.log("Mejor jugada: ", ultimaCoordenada.getX, ultimaCoordenada.getY)
        res.send(ultimaCoordenada.getX.toString() + ultimaCoordenada.getY.toString() + "")
    }else{
        res.send("Matriz con dimensiones incorrectas.")
    }
});

app.listen(app.get('port'), () =>{
    console.log("app running in port 3000")
});