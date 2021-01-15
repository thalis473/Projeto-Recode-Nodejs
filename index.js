const express = require('express');
const app = express();
const routes = require('./routes');

//      importaçoes necessarias para api funcionar
const bodyParser= require('body-parser'); // permite o post
const cors =require('cors'); // autorização da api



app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json()); //permite dados em json
app.use(cors())//liberaçao pra servidor externo


//  rotas
app.use(routes);



//    servidor 
app.listen(4000,()=>{
    console.log('servidor ativo ')
});

