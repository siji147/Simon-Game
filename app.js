function pressButton(color) {
    $(`#${color}`).on("click", function () {
        var audio = new Audio(`sounds/${color}.mp3`);
        audio.play();
        $(`#${color}`).fadeOut(100, function () {
            $(`#${color}`).addClass("pressed")
        }).fadeIn(100, function () {
            $(`#${color}`).removeClass("pressed")
        });
        // addClass("pressed");
        // $(`#${color}`).delay(1000).removeClass("pressed");
        // $(`#${color}`).removeClass("pressed");
    });
}

pressButton('green');
pressButton('red');
pressButton('yellow');
pressButton('blue');

// .fadeOut(100).fadeIn(100)