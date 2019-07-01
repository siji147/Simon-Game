function pressButton(color) {
    $(`#${color}`).on("click", function () {
        var audio = new Audio(`sounds/${color}.mp3`);
        audio.play();
        $(`#${color}`).addClass("pressed").delay(100).removeClass("pressed");
    });
}

pressButton('green');
pressButton('red');
pressButton('yellow');
pressButton('blue');