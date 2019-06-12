let frases = [
    "É certo.",
    "É decididamente assim.",
    "Sem dúvida.",
    "Sim, definitivamente.",
    "Você pode confiar nele.",
    "Como eu vejo, sim.",
    "Mais provável.",
    "Parece bom.",
    "Sim.",
    "Sinais apontam para sim.",
    "Tente novamente.",
    "Pergunte depois.",
    "É melhor não dizer agora.",
    "Não é possível prever agora.",
    "Concentre-se e pergunte novamente.",
    "Não conte com isso.",
    "Minha resposta é não.",
    "Minhas fontes dizem que não.",
    "Acho melhor não pensar nisso.",
    "Muito duvidoso."
];

let botao = document.getElementById('btn-resposta');
botao.addEventListener('click', function(){
    let sorteio = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('texto').innerHTML = sorteio;
});