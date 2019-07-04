function pressButton(color) {
    $(`#${color}`).on("click", function () {
        var audio = new Audio(`sounds/${color}.mp3`);
        audio.play();

        $(this).addClass("pressed").delay(50).queue(function () {
            $(this).removeClass("pressed").dequeue();
        })

    });
}

pressButton('green');
pressButton('red');
pressButton('yellow');
pressButton('blue');



function blinkRandomColor() {

    let color = {
        'green': 1,
        'red': 2,
        'yellow': 3,
        'blue': 4
    }

    var randomColor = (Math.floor(Math.random() * 4)) + 1;

    return Object.keys(color)[randomColor - 1]
}


function gameOver() {
    // $("body").css({
    //     "background-color": "red",
    //     "opacity": 0.8
    // }).delay(50).queue(function () {
    //     $(this).css({
    //         "background-color": "#011F3F",
    //         "opacity": 0
    //     }).dequeue();
    // })

}

$("body").on("click", gameOver);