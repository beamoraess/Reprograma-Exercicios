import React from 'react';
import { Link } from 'react-router-dom'
import "./menu.css"

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            aberto: false,
        }
    }

    handleMenu = e => {
        this.setState(prevState => {
            return{aberto: !prevState.aberto}
        })
    }


    render() {
        let classOption = "navbar-menu__opcoes"
        let classButton = "navbar-menu__botao"

        if(this.state.aberto) {
            classOption += " navbar-menu__opcoes--aberto "
            classButton += " navbar-menu__botao--aberto "
        }
    return (
        <div className="navbar-menu navbar-link">
            <a className={classButton} onClick={this.handleMenu} >Menu</a>
            <ul className={classOption}>
                <li><Link to="/"className="navbar-links__ativo">Home</Link></li>
                <li><Link to="/cadastro" className="navbar-links__ativo">Cadastro</Link></li>
                <li><Link to="/chat" className="navbar-links__ativo">Chat</Link></li>
            </ul>
        </div>
    )
    }
}

export default Menu;