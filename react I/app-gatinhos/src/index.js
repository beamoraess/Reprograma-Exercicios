import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import * as serviceWorker from './serviceWorker';


class Comentario extends React.Component {
    render() {
    return (
        <div className='comentario'>
            <img className='comentario__perfil' src={props.imagem}></img>
            <div>
                <h2 className='comentário_nome'>{props.nome}</h2>
                <h3 className='comentario_subtitulo'>{props.subtitulo}</h3>
                <hr/>
                <p>{props.comentario}</p>
            </div>
            <div></div>
        </div>
    )}
}

// function App (props){
//     return (
//         <div>
//             <Comentario
//             imagem= 'https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg'
//             nome='Beatriz'
//             subtitulo='Maravilhosa'
//             comentario='lorem ipsulum bal jbdp.'/>

//             <Comentario 
//             imagem= 'https://www.bitcao.com.br/blog/wp-content/uploads/2017/06/wsi-imageoptim-vacinas-para-gatos-720x445.jpg'
//             nome='Mellina'
//             subtitulo='Sed ut perspiciatis unde omnis iste natus error.'
//             comentario='bla bla bla bla'/>
            
//         </div>

//     )
// }

class App extends React.Component {
    render(){
        return (
            <div>
            <Comentario
            imagem= 'https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg'
            nome='Beatriz'
            subtitulo='Maravilhosa!'
            comentario='lorem ipsulum bal jbdp.'/>

            <Comentario 
            imagem= 'https://www.bitcao.com.br/blog/wp-content/uploads/2017/06/wsi-imageoptim-vacinas-para-gatos-720x445.jpg'
            nome='Mellina'
            subtitulo='Sed ut perspiciatis unde omnis iste natus error.'
            comentario='bla bla bla bla'/>
            
        </div>
        )}
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();