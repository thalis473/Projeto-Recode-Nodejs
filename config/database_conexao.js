const mysql =require('mysql2');

//     conexão com o banco de dados colocado numa variavel chamada db
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "eletrorecode",
    password: "",
    user: "root",
  });

  // 2parametros  codig sql /  funçao a ser realizada
  const query = (sql, callBack) => {
    return connection.query(sql, callBack);
  };
  
//exportando a query não a conexao 

module.exports = {
    connection,
    query,
  };












/*const Conexao= mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'',
    database:'recode_eletro',
})


module.exports= Conexao;*/




/*const Sequelize =require('sequelize'); //importei a biblioteca sequelize
//                              database     usuario   senha
const Conexao = new Sequelize('recode_eletro','root' , '', {
    host:'localhost', 
    dialect:'mysql2'//tipo do banco de dados
})

Conexao.authenticate()
.then(()=>{
        console.log("conectado com sucesso!")
    }).catch((erro)=>{
        console.log("falha ao se conectar: "+erro)
})

module.exports = Conexao;*/
