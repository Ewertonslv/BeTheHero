const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();



routes.get('/ongs', OngController.index);  //Rota de listagem
routes.post('/ongs', OngController.create); //Rota de criação

routes.get('/incidents', IncidentController.index); 
routes.post('/incidents', IncidentController.create);
module.exports = routes;
