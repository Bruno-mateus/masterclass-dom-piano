//get all keys 
const keys = document.querySelectorAll(".key")


function playNotes(event) {
    let audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)
    const existKey = key;
    if (!existKey) {
        return;
    }
    const playAudio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)

    //playAudio
    addPressKey(key)

    playAudio.currentTime = 0;
    playAudio.play();
}

function addPressKey(key) {
    key.classList.add('playing')
}

function removePressKey(event) {
    event.target.classList.remove('playing')
}

function getKeyCode(event) {
    //GET KEYCODE
    let keyCode;

    const isKeyboard = event.type === 'keydown'; //this is boolean
    isKeyboard ? keyCode = event.keyCode : keyCode = event.target.dataset.key;
    return keyCode;
}
//click with mouse
keys.forEach((key) => {
        key.addEventListener('click', playNotes)
        key.addEventListener("transitionend", removePressKey)


    })
    //keybord type
window.addEventListener('keydown', playNotes)