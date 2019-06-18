import React from 'react';
import Home from './paginas/home/Home'
import Cadastro from './paginas/cadastro/Cadastro'
import Chat from './paginas/chat/Chat'
import Nav from './componentes/nav/Nav'
import { Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Switch>
    <div>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/chat" component={Chat} />
    </div>
    </Switch>
  );
}

export default App;
