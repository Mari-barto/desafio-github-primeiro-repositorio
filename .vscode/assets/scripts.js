var currentNunberWhapper = document.getElementById ('currentnunber')
var currentnunber = 0

function increment () {
    currentnunber = currentnunber + 1;
    currentNunberWhapper.innerHTML = currentnunber;
}

function decrement () {
    currentnunber = currentnunber - 1;
    currentNunberWhapper.innerHTML = currentnunber;
}