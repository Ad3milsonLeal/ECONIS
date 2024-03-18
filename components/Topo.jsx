import { useState } from "react";
import Contato from "./Contato.jsx"
import Loja from "./Loja.jsx"
import "../css/Topo.css"
import Time from "./Time.jsx";
import Formulario from "./Formulario.jsx";

function Topo() {

    const [secaoAtual,setSecaoAtual]= useState('HOME');
    const cliqueSecao=(secao) => {
        setSecaoAtual(secao);
    };
    return (
        <header>
          <center>
          <img src="logo.png" alt="logo" />
          <h3> Siga nosso Instagram: @econis conheça nossas novidades e entre em contato.</h3>
            <nav>
                <ul>
                  <button onClick={() => cliqueSecao ('Home')} className='botao-menu' > HOME </button>                  
                  <button onClick={() => cliqueSecao ('Faca parte de nosso time')} className='botao-menu' > Faça parte de nosso time </button>
                  <button onClick={() => cliqueSecao ('Formulario')} className='botao-menu' > Faça seu crediário</button>
                  <button onClick={() => cliqueSecao ('Conheca nosso site')} className='botao-menu' >  Contato</button>
                  <button onClick={() => cliqueSecao ('Bahia - loja fisica')} className='botao-menu' > Bahia - Loja Fisica </button>
                </ul>
            </nav>
          </center>
            <div>
            {secaoAtual==='Faca parte de nosso time'&&(
                <div className='secao'>
                <Time/>
                {}
                </div>
                )}
                 {secaoAtual==='Formulario'&&(
                <div className='secao'>
                <Formulario/>
                {}
                </div>
                )}
            {secaoAtual==='Conheca nosso site'&&(
                <div className='secao'>
                <Contato/>
                {}
                </div>
                )}
                 {secaoAtual==='Bahia - loja fisica'&&(
               <center>
                 <div className='secao'>
                    <Loja/>
                {}
                </div>
               </center>
                )}
          
            <div/>
            
        </div>
            
      
        </header>
      
        );

}
export default Topo;
