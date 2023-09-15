function playMusic(number, li) {
    if (document.querySelector('.bi-pause-circle') == null) {
        const music = document.getElementsByClassName('bi-play-circle')[number];
        music.classList.remove('bi-play-circle');
        document.getElementsByTagName('i')[li].classList.add('bi-pause-circle');
    }
    else {
        if (document.getElementsByTagName('i')[li - 1].classList.contains('bi-pause-circle')) {
            document.getElementsByTagName('i')[li - 1].classList.add('bi-play-circle');
        }
        const paused = document.querySelector('.bi-pause-circle');
        paused.classList.remove('bi-pause-circle');
        document.getElementsByTagName('i')[li].classList.add('bi-play-circle');
    }
}
