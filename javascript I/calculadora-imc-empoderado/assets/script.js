function calculoIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif");
    var resultado = peso / (altura * altura);
    var gif;
    var text;
    var cssclass;
    console.log("O seu IMC é " + resultado.toFixed(2))

    if(resultado < 18){
    text = "Uma Deusa! 💃";
    gif = '<img src="https://media.giphy.com/media/kr50wczz3ez9C/giphy.gif" alt="">';
    cssclass = "linha1";
}
    else if(resultado >= 18 && resultado < 25){
      text = "Uma louca! 🧚";
      gif = '<img src="https://media.giphy.com/media/yliFuJ98lafBe/giphy.gif" alt="">';
      cssclass = "linha2";
    }

    else if(resultado >= 25 && resultado < 30){
       text = "Uma feiticeira! 🧙‍";
       gif = '<img src="https://media.giphy.com/media/iSqCZ0HYzI23K/giphy.gif" alt="">';
       cssclass = "linha3";
    }

    else if(resultado >= 30 && resultado < 40){
    text = "Ela é Demais! 🧜‍";
    gif = '<img src="https://media.giphy.com/media/4WFEWXcpT9DlxkuCoK/giphy.gif" alt="">';
    cssclass = "linha4";
}

    else{
        text = "Meu Deus, ela é demais! 👸";
        gif = '<img src="https://media.giphy.com/media/CO8wN7YrZ3X0Y/giphy.gif" alt="">';
        cssclass = "linha5";
    }

    resposta.innerHTML = resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
    
}