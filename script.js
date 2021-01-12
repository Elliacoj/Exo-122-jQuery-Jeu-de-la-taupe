const holes = $(".hole");
const scoreBoard = $(".score");

let end = 0;

$('button').click(function() {
    end = 0;
    scoreBoard.text(0);
    startGame();
    timer();

    holes.click(function () {
        if(end !== 1) {
            if($(this).hasClass("up")) {
                scoreBoard.text(parseFloat(scoreBoard.text()) + 1);
                $(this).removeClass("up");
            }
        }
    });
});

function startGame() {
    if(end !== 1) {
        let hole = holes[random(6, 0)];
        hole.classList.add("up");

        setTimeout(function () {
            if(hole.classList.contains("up")) {
                hole.classList.remove("up");
            }

            startGame();
        }, random(800, 200));
    }
}

function random(number, numberTwo) {
    return (Math.trunc(Math.random() * number) + numberTwo);
}

function timer() {
    let time = 0;

    function chronometre() {
        let chrono = setTimeout(function () {
            time++;
            console.log(time);
            chronometre();
        }, 1000);

        if(time === 10) {
            clearTimeout(chrono);

            if(holes.hasClass("up")) {
                holes.removeClass("up");
            }

            return end++
        }
    }
    chronometre();
}