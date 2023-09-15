
const pauseMusic = () => {
    const paused= document.getElementsByClassName('bi-pause-circle')[0];
    paused.classList.remove('bi-pause-circle');
    document.getElementsByTagName('li')[10].classList.add('bi-play-circle');
}


const pauseOne = document.getElementsByClassName('bi-pause-circle')[0];
pauseOne.addEventListener('click', pauseMusic)