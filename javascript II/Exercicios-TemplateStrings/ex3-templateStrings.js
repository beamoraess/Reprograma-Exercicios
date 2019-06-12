var usuarios = [
    {
      nome: 'Bruna',
      habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
      nome: 'Gabriela',
      habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
  ];

function mostreTexto(usuarios){
    for(let texto of usuarios) {
        console.log ( `A ${texto.nome} possui as habilidades: 
        ${texto.habilidades.join(" - ")}`
        );
    }
}