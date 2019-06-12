var gifs = [
    `<img src="https://media.giphy.com/media/8rEjwH1IgQ6RkayhON/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/mokQK7oyiR8Sk/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/5EJHDSPpFhbG0/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/BdhtvnPILhdYs/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/mokQK7oyiR8Sk/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/iOdDgwtioHQaNdAQvC/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/l4KhKdeCGzp0RORDW/giphy.gif" alt="">`,
    `<img src="https://media.giphy.com/media/Y4pAQv58ETJgRwoLxj/giphy.gif" alt="">`,
];

function sortearGifs() {
    var random = Math.floor(Math.random() * 8);
    document.getElementById('lugarGifs').innerHTML = gifs[random];
};