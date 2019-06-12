var endereco = {
    curso: 'Reprograma',  
    local: 'Estação Hack',
    rua: 'Avenida Paulista',
    numero: 1374,
    bairro: 'Bela Vista',
    cidade: 'São Paulo',
    uf: 'SP',
    teste: this.uf
}

  function mostreTexto() {
     return `O curso da ${endereco.curso} acontece na ${endereco.local} que fica localizada em ${endereco.cidade} no bairro ${endereco.bairro} na ${endereco.rua} numero ${endereco.numero}`;
  }
   