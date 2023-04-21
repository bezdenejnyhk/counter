function createCounter() {
    const counterText = document.querySelector('.counter__text');
    let counter = 0;

    function render() {
        counterText.textContent = counter;
    }

    function increaseCounter() {
        counter++;
        render();
    }

    function decreaseCounter() {
        counter -= 1;
        render();
    }

    function resetCounter() {
        counter = 0;
        render();
    }

    return {
        increaseCounter,
        decreaseCounter,
        resetCounter
    }
}

const increaseButton = document.querySelector('.btns__btn_increase');
const decreaseButton = document.querySelector('.btns__btn_decrease');
const resetButton = document.querySelector('.btns__btn_reset');

const myCounter = createCounter();

increaseButton.addEventListener('click', function () {
    myCounter.increaseCounter();
});

decreaseButton.addEventListener('click', function () {
    myCounter.decreaseCounter();
});

resetButton.addEventListener('click', function () {
    myCounter.resetCounter();
});