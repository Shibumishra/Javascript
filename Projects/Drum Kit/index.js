var numberOfDrumButton = document.querySelectorAll(".drum").length;

// Detecting Button Press
for (var i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimaton(buttonInnerHTML);
    });
};



// Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimaton(event.key);
});



// 
function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;

        case 'w':
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 'a':
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;

        case 's':
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;

        case 'd':
            var tom5 = new Audio('sounds/snare.mp3')
            tom5.play();
            break;

        case 'j':
            var tom6 = new Audio('sounds/crash.mp3')
            tom6.play();
            break;

        case 'k':
            var tom7 = new Audio('sounds/kick-bass.mp3')
            tom7.play();
            break;

        case 'l':
            var tom8 = new Audio('sounds/tom-1.mp3')
            tom8.play();
            break;
        default:
            break;
    }
};



function buttonAnimaton(currentKey) {
    var activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}