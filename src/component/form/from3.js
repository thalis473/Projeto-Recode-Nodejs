import React from 'react';
import {lazy, Suspense} from 'react';

//Code Splitting e Lazy Loading.
const Comentarios= lazy(()=>import("../comentarios/comentarios"))

   export default function Formulario3() {

    const [form,setForm]=React.useState({
        nome:"",
        msg:""
    });

   

    // funçao pegando os dados dos inputs
        function Controle({target}){
            const{id,value} = target    
            setForm({...form,[id]:value})
            console.log({[id]:value})
            
        }

        
// enviando pro back
      function envio (event){
            event.preventDefault()
            fetch('http://localhost:4000/api/recebimento',{
                method:"POST",
                headers:{
                    "content-Type":"application/json"},
                body:JSON.stringify(form) //transforme em json
            }).then((res)=>{
                setForm(res)
              console.log(res)
                setForm({nome:'', msg:''});
            })
        }

            
        return(     
        
        <div>

            <form  onSubmit={envio} >

                <div className="container form-row text-uppercase text-info">
                    <div className="form-goup col-sm ">
                        <br/>
                        <label htmlFor="nome"> <b>Nome</b> </label>
                        <input id="nome" 
                        type="text" 
                        className="form-control" 
                        name="nome"
                        id="nome" 
                        onChange={Controle}
                        value={form.nome} 
                        placeholder="digite aqui" 
                        />
                    </div>

                    <div className="form-goup col-sm">
                        <br/>
                        <label htmlFor="sobrenome"> <b>Sobrenome</b></label>
                        <input id="sobrenome" 
                        type="text"
                        className="form-control" 
                        name="sobrenome" 
                        placeholder="sobrenome"/>
                    </div>
                </div>
                    
                <div className=" container form-row text-uppercase text-info">
                        <div className="form-goup col-sm">
                        <br/>
                        <label htmlFor="Cidade"> <b>Cidade</b></label>
                        <input id="cidade" type="text" 
                        className="form-control" 
                        name="cidade" 
                        placeholder="cidade" 
                        />
                    </div>

                    <div className="form-group col-sm">
                        <br/>
                        <label htmlFor="telefone"><b>Telefone</b></label>
                        <input id="telefone" 
                        type="number" 
                        className="form-control" 
                        name="numero" 
                        placeholder="(ddd)xxx-xxx " 
                        />
                        </div>
                </div>

                <div className=" container form-row justify-content-center text-uppercase text-info">
                    <div className="form-group ">
                        <br/>
                        <label htmlFor="msg"><b>Comentário</b></label>
                        <br/>
                    <textarea 
                    id="msg" 
                    type="text" 
                    rows="6" cols="38" 
                    name="msg" 
                    value={form.msg} 
                    id="msg" 
                    onChange={Controle}
                    placeholder="comente aqui" >
                    </textarea>
                    </div>                    
                </div>
                    <hr/>
                    <div className="container form-row justify-content-center">
                     <button id="btn" type="submit"  className="btn btn-primary" >Enviar</button> 

                </div>
                <br/><br/><br/>
            </form>
            <div className="row">
                <div className="col-lg-12 col-md-12 mx-auto">
                <Suspense fallback={<p>Carregando..</p>}>
                    <Comentarios />
                </Suspense>
                    
            
                </div>
            </div>
        </div>
        )
    };


     /*  const controleEnvio = async(evento) => {
            evento.preventDefault();
    
           const url = "http://localhost/testePHP/backeletroRecodeJoin/apiformulario.php";
           const dados = new FormData(evento.target);/* FormData nao pode mudar
           const cabecalho = {
              // method: "POST", /*explicando e metodo de envio
               body: dados, /* variavel dados
           };
            
           const resposta = await fetch(url, cabecalho);
           const resultado = await resposta;
          
       };
           */        