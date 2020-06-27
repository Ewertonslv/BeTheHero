const express = require("express"); // Importando express

const routes = require('./routes');

const app = express(); //Variavel que armazena a aplicação

app.use(express.json());
app.use(routes);
/*
MEtodos HTTP: 

--> GET: Buscar/listar informaçoes do backend
--> POST: Cria informações no backend     
--> PUT: Altera um informação no backend
--> DELETE: Deleta uma informação do backend


Tipos de Parametros:

--> QUERY PARAMS: Parametros nomeados enviados na rota apos o simbolo de interrogação ("?") / Filtros, paginação 
--> ROUTE PARAMS: parametros ultilizados para identificar recursos 
--> REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
*/



app.listen(3338); //Local da minha aplicação