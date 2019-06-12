window.addEventListener('DOMContentLoaded', function(){

    let desenhos = [
        "./img/charlieelola.jpg",
        "./img/deondevem.jpg",
        "./img/pequenourso.jpg"
    ]

    let botao = document.getElementById("botao");
    botao.addEventListener("click", function(){

        document.querySelector("#lugarFoto").src = desenhos[0];
        setTimeout(function(){document.querySelector("#lugarFoto").src = desenhos[1];}, 2000);
        setTimeout(function(){document.querySelector("#lugarFoto").src = desenhos[2];}, 4000);
        
        setTimeout(function(){document.querySelector("#resposta").innerHTML = `<p>Charlie e Lola</p> <p> De Onde Vem </p> <p>Pequeno Urso</p>`;}, 6000);
    
    })
})