const { query } = require("../config/database_conexao"); //Query pushada


//    Mostrar a api
   const produtos =(req, res)=>{
        query("SELECT * FROM eletrorecode.produtos join valores on produtos.id_produtos =valores.id_valores;", function (error, result, field) {
         // console.log(result); test

            if(error){
                res.json(error); //mostrar na tela o erro
            }else{
                res.json(result); //mostra o resultado na tela 
            };
        })
    }

    const comentarios =(req, res)=>{
        query("SELECT * FROM  comentarios", 
        function (error, result, field){           
            if(error){
                res.json(error); 
            }else{
                res.json(result); 
            };  
        })
    }

//   inserir dados no BD

const insert =(req,res)=>{
     let dados=[]
     dados.push({
        nome:req.body.nome,
        msg:req.body.msg  
    })
    const sqlInsert ="INSERT INTO comentarios SET ?;"
    query( sqlInsert,dados,()=>{
        dados=[] 
    });     
    }
        


module.exports = {
    produtos,
    comentarios,
    insert
};
