function pressButton(color) {
    $(`#${color}`).on("click", function () {
        var audio = new Audio(`sounds/${color}.mp3`);
        audio.play();

        $(this).addClass("pressed").delay(50).queue(function () {
            $(this).removeClass("pressed").dequeue();
        })
        // $(`#${color}`).fadeOut(50, function () {
        //     $(`#${color}`).addClass("pressed")
        // }).fadeIn(50, function () {
        //     $(`#${color}`).removeClass("pressed")
        // });

    });
}

// .addClass("error").delay(1000).queue(function(){
//     $(this).removeClass("error").dequeue();


pressButton('green');
pressButton('red');
pressButton('yellow');
pressButton('blue');

// .fadeOut(100).fadeIn(100)