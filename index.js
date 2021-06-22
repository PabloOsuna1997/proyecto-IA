const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const route = express.Router();

app.use(route);
app.use(cors());
app.use(morgan('dev'));

route.get('/', (req, res) => {
    console.log("turno" + req.query.turno);
    console.log("estado" + req.query.estado);
    res.send("Hello world ")
})

app.listen(3000, () =>{
    console.log("app running in port 3000")
})