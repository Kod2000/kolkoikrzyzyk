console.log('hello world!');

var isGameActive = false;
var table = [];
var xOrO //x-false o-true
function onFieldClick(event) {
    console.log(event)
}

function newGame() {
    isGameActive = true;
    xOrO = false;
    table.push([undefined, undefined, undefined]);
    table.push([undefined, undefined, undefined]);
    table.push([undefined, undefined, undefined]);
    var game = document.getElementById('game')
    game.style.display = 'block' //zaczyna się wyświetlać "coś"
    alert('game active!');
    document.getElementsByTagName('td')  //Szuka konkretnych tagów htmelowych
    var gameFields = document.getElementsByTagName('td')
    for (var i = 0; gameFields.length > i; i++) {
        gameFields[i].addEventListener('click', onFieldClick)
    }
}
function endGame() {
    isGameActive = false;
    var game1 = document.getElementById('game')
    game1.style.display = 'none'
    alert('game ended!');
}

function fieldcheck(row, col) {
    if (row < 0 || row > 3) {
        throw 'Wartosc wiersza powinien zawierac sie miedzy 1 a 3'
    }
    if (col < 1 || col > 3) {
        throw 'Wartosc kolumny powinien zawierac sie miedzy 1 a 3'
    }
    else {
        var schlagzeug = game[row - 1][col - 1]
        return schlagzeug
    }
}
document.addEventListener('DOMContentLoaded', function (event) {
    var game2 = document.getElementById('game')
    game2.style.display = 'none'
})











