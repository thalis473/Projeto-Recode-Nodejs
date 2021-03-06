import React from 'react';
import {lazy, Suspense} from 'react';
import Menu from '../../component/menu/menu';
import Footer from '../../component/footer/footer';

//Code Splitting e Lazy Loading.
const Places = lazy(()=>import('../../component/places/places'))

function Lojas(){
    return(
        <div >
        <Menu />
        <br/><br/><br/>

            <section className="container  ">
                <svg width="100px" height="100px" viewBox="0 0 16 16" className=" bi bi-geo-alt-fill" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
            <h3> Encontre a loja mais proxima de você !</h3>
            <hr/>
            <br/><br/><br/><br/>
            <Suspense fallback={<p>Carregando...</p>}>
                <Places />
            </Suspense>
            
            </section>
            <br/>
            <br/>
        <Footer/>
        </div>
    );
};

export default Lojas;