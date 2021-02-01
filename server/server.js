require('dotenv').config();
const bodyParser = require('body-parser');
const { dbConnection } = require('./db/config');
const express = require('express');

const app = express();

dbConnection();

//LECTURA Y PARSEO
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/index'));


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})