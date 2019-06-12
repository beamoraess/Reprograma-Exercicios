import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let contadorNum = 9;

const nome = {
    primeiroNome: 'Jessikita',
    sobreNome: 'Lopes'
}

function nomeCompleto(nome){
    if(nome) {
        return nome.primeiroNome + ' ' + nome.sobreNome;
    } else{
        return 'deconhecida';
    }
}

function contador(){
     if(contadorNum == 0)
        return "contador iniciado"
    else { 
        return "contador nao inicado"
     }
}

function verificaNum(contador){
    if(contador === 0){
        return <p>contador não iniciado</p>
    } else {
        return <p>contador iniciado</p>
    }
}

const template = 
                <div className='contador'>
                    <h1>Count: {contadorNum}</h1> 
                    <h2>Oi, {nome.primeiroNome}</h2>
                    <h3>Olá, {nomeCompleto(null)}</h3>
                     <div>
                        <button>+1</button>
                        <button>-1</button>
                        <button>reset</button>
                    </div>
                    {verificaNum(contadorNum)}
                </div>

ReactDOM.render(template, document.getElementById('root'));