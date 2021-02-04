import React from 'react';
import {lazy, Suspense} from 'react';
import Menu from '../../component/menu/menu';
import Footer from '../../component/footer/footer';
import Formulario3 from '../../component/form/from3';
import Emotion from '../../component/form/emotion/emotion';
import telefonista from '../../assts/banner/telefonista.png';

import './index.css';

const Contact = lazy(()=>import('../../component/contact/contact'))

function Contatos(){

return(
    <div >

    <Menu />
    <br/><br/><br/><br/>

        <div className=" container justify-content-center ">
            <img id="img1" src={telefonista} alt="contato"/>
        </div>
        <br/><br/><br/>

        <div className="container">
            <div className="border justify-content-center p-5">
            <Suspense fallback={<p>carregando..</p>}>
                <Contact />
            </Suspense>
                
            </div>
        </div>

        <div className="row justify-content-center ">                
            <div className="col-sm-12 col-md-10 col-lg-8">
                <br/><br/><br/><br/>
                <h2 className="title text-secondary "> <b>Deixe aqui seu feedback</b> </h2>
                <Emotion/>
                 <hr/>
                <Formulario3 />           
               
            </div>
        </div>

        <Footer/>

    </div>
)
};

export default Contatos;