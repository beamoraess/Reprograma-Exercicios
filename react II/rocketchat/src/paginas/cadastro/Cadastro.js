import React from 'react';
import "./cadastro.css"
import Inicial from "./inicial"
import PessoaFisica from "./PessoaFisica"

class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="cadastro">
               <Inicial />
           </div>
        )
     }
}


export default Cadastro;