require('dotenv').load();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoute = require('./routes/adminRoute');

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuração de acesso
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
})

//Rotas
app.use('/admin', adminRoute);

module.exports = app;