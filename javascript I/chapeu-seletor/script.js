let casas = [
    "Grifinória ❤️",
    "Sonserina 💚",
    "Corvinal 💜",
    "Lufa-Lufa 💛"
];

function casaHogwarts(){
    // função que sorteia as frases do Array
    var random = Math.floor(Math.random() * 4);
    document.getElementById("texto").innerHTML = casas[random];
}