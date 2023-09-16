const section = document.getElementsByTagName('section')[3];
const apiURL = 'https://api.lyrics.ovh';

async function insertSongsHTML(songLyrics) {
    const countSongs = songLyrics.data.length;
    for (let i = 0; i <= countSongs; i++) {
        section.insertAdjacentElement('afterbegin', document.createElement('div')).classList.add('div-music');
    }
    for (let i = 0; i < countSongs; i++) {
        const div = document.getElementsByClassName('div-music')[i];
        div.insertAdjacentElement('afterbegin', document.createElement('ul')).classList.add('ul-music');
    }
    for (let i = 0; i < countSongs; i++) {
        const ul = document.getElementsByClassName('ul-music')[i];
        ul.insertAdjacentElement('afterbegin', document.createElement('li')).classList.add('lyrics-artist-name');
    }
    for (let i = 0; i < countSongs; i++) {
        const liOne = document.getElementsByClassName('lyrics-artist-name')[i];
        liOne.innerHTML = `<span>${searchMusic.value}</span>`;
        liOne.insertAdjacentElement('afterend', document.createElement('li')).classList.add('lyrics-music-name');
    }
    for (let i = 0; i < countSongs; i++) {
        const liTwo = document.getElementsByClassName('lyrics-music-name')[i];
        liTwo.innerHTML = `<span>${songLyrics.data[i].title}</span>`;
        liTwo.insertAdjacentElement('afterend', document.createElement('li')).innerHTML = `<button class="button-see-lyrics" onclick="seeLyrics(${[i]})">Ver Letra</button>`;

    }
}

async function insertLyricsHTML(artistName, songTitle, songLyrics) {
    const sectionSeeLyrics = document.getElementsByTagName('section')[1];
    const newSection = document.createElement('section');
    sectionSeeLyrics.insertAdjacentElement('afterend', newSection).classList.add('class-see-lyrics');
    const sectionLyrics = document.getElementsByClassName('class-see-lyrics')[0];
    sectionLyrics.innerHTML = `<p id="artist-lyrics">${artistName}</p>`;
    const name = document.getElementById('artist-lyrics');
    name.insertAdjacentElement('afterend', document.createElement('p')).setAttribute('id', 'name-lyrics');
    const artist = document.getElementById('name-lyrics');
    artist.innerHTML = `${songTitle}`
    const songName = document.getElementById('name-lyrics');
    songName.insertAdjacentElement('afterend', document.createElement('p'));
    const lyric = document.getElementsByTagName('p')[2];
    lyric.innerHTML = `<br><br>${songLyrics}`;
}

async function fechLyrics(artist, songTitle) {
    var url = "http://api.vagalume.com.br/search.php"
    +"?art="+artist
    +"&mus="+songTitle
    +"&apiKey="+"b24dff88ff0c11833d0c72dc2136a2e0";
    const responseLyrics = await fetch(url);
    const data = await responseLyrics.json()
    insertLyricsHTML(artist, songTitle, data.mus[0].text);
}

async function fechSongs(song) {
    const response = await fetch(`${apiURL}/suggest/${song}`);
    const data = await response.json()
    insertSongsHTML(data);
}

const searchValue = () => {
    const search = searchMusic.value.trim()
    fechSongs(search);
}

const seeLyrics = (li) => {
    const artistName = document.getElementsByClassName('lyrics-artist-name')[li].textContent;
    const songName = document.getElementsByClassName('lyrics-music-name')[li].textContent;
    section.style.display = 'none';
    fechLyrics(artistName, songName)
}

const search = document.querySelector('.bi-search')
search.addEventListener('click', searchValue)


