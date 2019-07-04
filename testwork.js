// var rand = (Math.floor(Math.random() * 4)) + 1;
// console.log(rand);

function blinkRandomColor() {

    let color = {
        'green': 0,
        'red': 1,
        'yellow': 2,
        'blue': 3
    }

    var randomColor = (Math.floor(Math.random() * 4)) + 1;

    return Object.keys(color)[randomColor - 1];
}

console.log(blinkRandomColor());