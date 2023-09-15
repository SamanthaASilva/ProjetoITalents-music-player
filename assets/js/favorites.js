
function playMusic(number, li) {
    if (document.querySelector('.bi-pause') == null) {
        const music = document.getElementsByClassName('bi-caret-right-fill')[number];
        music.classList.remove('bi-caret-right-fill');
        document.getElementsByTagName('i')[li].classList.add('bi-pause');
    }
    else {
        if (document.getElementsByTagName('i')[li-1].classList.contains('bi-pause')) {
            document.getElementsByTagName('i')[li-1].classList.add('bi-caret-right-fill');
        }
        const paused = document.querySelector('.bi-pause');
        paused.classList.remove('bi-pause');
        document.getElementsByTagName('i')[li].classList.add('bi-caret-right-fill');
    }
}

function favoriteMusic(li) {
    const favorite = document.getElementsByClassName('bi-heart-fill')[li];
    const notFavorite = document.getElementsByClassName('div-music')[li-2];
    notFavorite.style.display = 'none';
}