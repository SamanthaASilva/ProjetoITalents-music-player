function addMusicPlaylist(li) {
    const favorite = document.getElementsByClassName('bi-heart-fill')[li];

    if(favorite.style.color == '' ||  favorite.style.color == 'rgb(255, 255, 255)'){
        favorite.style.color = 'rgb(253,40,141)';
    }
    else {
        favorite.style.color = 'rgb(255, 255, 255)'
    }
    const artistNameFavorite = document.getElementsByClassName('music-artist-name')[li-2];
    artistNameFavorite.textContent;
    const musicNameFavorite = document.getElementsByClassName('music-name')[li-2];
    musicNameFavorite.textContent;

    var favoriteMusic = localStorage;
    favoriteMusic.setItem('musicName', musicNameFavorite);
    var favoriteArtist = localStorage;
    favoriteArtist.setItem('musicArtist', artistNameFavorite);
}


const openMenuMusics = (li) => {
    var li = localStorage.getItem('li', li);
    const modalAddPlaylist =document.querySelector('.div-option');
    if (modalAddPlaylist.style.display == 'flex') {
        modalAddPlaylist.style.display = 'none';
    }
    else {
        modalAddPlaylist.style.display = 'flex';
    }
}

const openAddPlaylist = () => {
    const addPlaylist = document.querySelector('.div-modal-addPlaylist')
    if (addPlaylist.style.display == 'flex') {
        addPlaylist.style.display = 'none';
    }
    else {
        addPlaylist.style.display = 'flex';
    }
}

const closeModal = () => {
    const menuMusic = document.querySelector('.div-option')
    menuMusic.style.display = 'none';
    const modalAddPlaylist = document.querySelector('.div-modal-addPlaylist')
    modalAddPlaylist.style.display = 'none';
}

function playMusic(number, li) {
    if (document.querySelector('.bi-caret-right-fill') == null) {
        const music = document.getElementsByClassName('bi-caret-right-fill')[number];
        music.classList.remove('bi-caret-right-fill');
        document.getElementsByTagName('i')[li].classList.add('bi-pause');
    }
    else {
        if (document.getElementsByTagName('i')[li - 1].classList.contains('bi-pause')) {
            document.getElementsByTagName('i')[li - 1].classList.add('bi-caret-right-fill');
        }
        const paused = document.querySelector('.bi-pause');
        paused.classList.remove('bi-pause');
        document.getElementsByTagName('i')[li].classList.add('bi-caret-right-fill');
    }
}

const openModalAddPlaylist = document.querySelector('#addPlaylist')
openModalAddPlaylist.addEventListener('click', openAddPlaylist)