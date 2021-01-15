const express = require('express')
const routes = express.Router();


//      rota simples 
routes.get('/',(req,res)=>{
    res.send('SEJA BEM VINDO!');
})

//   funçao de query
const ControleAPI = require("./models/modelSql");

// rotas pra mostrar os dados como um objeto json     
routes.get('/api/produtos', ControleAPI.produtos);
routes.get('/api/comentarios', ControleAPI.comentarios);

// rota ultilizada para enviar dados para banco de dados 
routes.post('/api/recebimento', ControleAPI.insert);

module.exports= routes;
