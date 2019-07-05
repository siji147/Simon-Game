// var rand = (Math.floor(Math.random() * 4)) + 1;
// console.log(rand);

function randomColor() {

    let color = {
        'green': 0,
        'red': 1,
        'yellow': 2,
        'blue': 3
    }

    var randomColor = (Math.floor(Math.random() * 4));

    return Object.keys(color)[randomColor];
}

console.log(randomColor());