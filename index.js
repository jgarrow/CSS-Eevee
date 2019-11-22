window.addEventListener('load', e => {
    const openEyes = document.querySelector('.eyes');
    const closedEyes = document.querySelector('.closed-eyes');
    const blinkEyes = document.querySelector('.blink');
    const tail = document.querySelector('.tail');
    const leftEar = document.querySelector('.leftEar');
    const rightEar = document.querySelector('.rightEar');

    const head = document.querySelector('.head');

    function petAnimations() {
        openEyes.classList.remove('is-visible');
        blinkEyes.classList.remove('is-visible');
        closedEyes.classList.add('is-visible');
        tail.classList.add('is-being-pet');
        leftEar.classList.remove('twitch');
        rightEar.classList.remove('twitch');
        // console.log('petting Eevee');
    }

    function notPettingAnimations() {
        openEyes.classList.add('is-visible');
        blinkEyes.classList.add('is-visible');
        closedEyes.classList.remove('is-visible');
        tail.classList.remove('is-being-pet');
        leftEar.classList.add('twitch');
        rightEar.classList.add('twitch');
        // console.log('Not petting Eevee');
    }

    // close eyes when petting head
    head.addEventListener('mousedown', petAnimations);
    document.addEventListener('mouseup', notPettingAnimations);
});