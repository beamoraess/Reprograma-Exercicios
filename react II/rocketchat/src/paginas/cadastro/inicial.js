import React from "react"
import Globo from "../../image/globe.png"
import Astronauta from "../../image/astronaut.png"


function Inicial(props) {
    return (
        <div className="pagina">
        <h1>Escolha qual tipo de cadastro</h1>
        <div className="pagina__botao">
            <button className="botao-icone">
                <img src={Astronauta} className="botao-image" alt="icone globo"></img>    
                <span>Pessoa Física</span> 
            </button>
            <button className="botao-icone">
                <img src={Globo} className="botao-image" alt="icone austronauta"></img>
                <span>Pessoa Juridica</span>
            </button>
        </div>
    </div>
    )
}







export default Inicial