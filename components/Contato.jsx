import { useState } from "react";
import '../css/Contato.css'
function Contato() {
return(
   <center>
     <div className="tel">
        
        <nav>
        <button className="botao">WhatsApp Web</button> <button className="botao">Recursos</button> <button className="botao">Privacidade</button> <button className="botao">Central de Ajuda</button> <button className="botao">Blog</button> <button className="botao">P/Empresas</button></nav>    


            <img src="nina.jpg" alt="nina" className="nina" />
        <h2>Nina éconis</h2>

        <button>
        <a href=" https://wa.me/c/557534210308" target="_blank">
        INICIAR A CONVERSA
        </a>
    </button>

                
                <h2>Econis.alagoinhas vendas on-line</h2>
        <h2>Ainda não tem o WhatsApp?</h2>
                    <button> 
                    <a href="https://www.whatsapp.com/" target="_blank">
                    Fazer donwload do WhatsApp
                    </a>
                    </button> 

                
    </div>
   </center>
);
}
export default Contato;
