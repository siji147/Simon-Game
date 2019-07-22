var evt = {};


function pressButton(color) {
    $(`#${color}`).on("click", function (ev) {
        let audio = new Audio(`sounds/${color}.mp3`);
        audio.play();
        evt = ev;
        $(this).addClass("pressed").delay(50).queue(function () {
            $(this).removeClass("pressed").dequeue();
        })

    });
}

pressButton('green');
pressButton('red');
pressButton('yellow');
pressButton('blue');



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


function gameOver() {
    $("body").css('background-color', '').addClass("game-over").delay(50).queue(function () {
        $(this).removeClass("game-over").css('background-color', '#011F3F').dequeue();
    })
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();

}


function flashRandomColor() {
    let audio = new Audio(`sounds/${randomColor()}.mp3`);
    audio.play();
    $(`#${randomColor()}`).fadeOut(50).fadeIn(50);
}

// $("body").on("click", gameOver);
// flashRandomColor(randomColor());

// function increaseLevel(level) {
//     level++;
// }

function startGame() {
    let level = 1;
    $(document).on("keypress", function () {

        $("#level-title").text(`Level ${level}`);
        flashRandomColor();
        console.log(evt);
    })
}

startGame();