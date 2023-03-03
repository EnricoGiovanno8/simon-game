let selectedColours = [];
let gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

const play = () => {
    $('#level-title').text(`Level ${gamePattern.length + 1}`)
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    for (let i = 0; i < gamePattern.length; i++) {
        setTimeout(() => {
            $('#' + gamePattern[i]).fadeIn(100).fadeOut(100).fadeIn(100);

            const audio = new Audio('sounds/' + gamePattern[i] + '.mp3');
            audio.play();
        }, (i + 1) * 1000);
    }
}

const resetGame = () => {
    const audio = new Audio('sounds/wrong.mp3');
    audio.play();
    selectedColours = [];
    gamePattern = [];
    $('#level-title').text('Game Over, Press Any Key to Restart')
}

$(document).keypress(() => {
    if (gamePattern.length === 0 || $('#level-title').text() === 'Game Over, Press Any Key to Restart') {
        play();
    }
})

$(".btn").click((e) => {
    if (gamePattern[selectedColours.length] === e.target.id) {
        selectedColours.push(e.target.id);
        $('#' + e.target.id).fadeIn(100).fadeOut(100).fadeIn(100);
        const audio = new Audio('sounds/' + e.target.id + '.mp3');
        audio.play();
        if (gamePattern.length === selectedColours.length) {
            play();
            selectedColours = [];
        }
    } else {
        resetGame()
    }
});