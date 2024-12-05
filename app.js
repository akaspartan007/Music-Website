const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "imag/1.jpg",
    },
    {
        id: 2,
        songName: `Faded<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "imag/2.jpg",
    },
    {
        id: 3,
        songName: `On & On<br>
        <div class="subtitle">Cartoon</div>`,
        poster: "imag/3.jpg",
    },
    {
        id: 4,
        songName: `Mortals<br>
        <div class="subtitle">Warriyo</div>`,
        poster: "imag/4.jpg",
    },
    {
        id: 5,
        songName: `Agar Tum Saath Ho<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "imag/5.jpg",
    },
    {
        id: 6,
        songName: `Suna Hai<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "imag/6.jpg",
    },
    {
        id: 7,
        songName: `Dilbar<br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "imag/7.jpg",
    },
    {
        id: 8,
        songName: `Duniya<br>
        <div class="subtitle">Abhijit Vaghani</div>`,
        poster: "imag/8.jpg",
    },
    {
        id: 9,
        songName: `Lagdi Lohore Di<br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "imag/9.jpg",
    },
    {
        id: 10,
        songName: `Putt Jatt Da<br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster: "imag/10.jpg",
    },
    {
        id: 11,
        songName: `Baarishein<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "imag/11.jpg",
    },
    {
        id: 12,
        songName: `Vaaste<br>
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "imag/12.jpg",
    },
    {
        id: 13,
        songName: `Mohhabat Ne<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "imag/13.jpg",
    },
    {
        id: 14,
        songName: `Bachke Bachke<br>
        <div class="subtitle">Karan Aujla</div>`,
        poster: "imag/14.jpg",
    },
    {
        id: 15,
        songName: `Admirin You<br>
        <div class="subtitle">Karan Aujla</div>`,
        poster: "imag/15.jpg",
    },
    {
        id: 16,
        songName: `High Heels<br>
        <div class="subtitle">Honey Singh</div>`,
        poster: "imag/16.jpg",
    },
    {
        id: 17,
        songName: `Sitaarey<br>
        <div class="subtitle">Jaz Dhami</div>`,
        poster: "imag/17.jpg",
    },
    {
        id: 18,
        songName: `Bewafa<br>
        <div class="subtitle">Imran Khan</div>`,
        poster: "imag/18.jpg",
    },
    {
        id: 19,
        songName: `One Down<br>
        <div class="subtitle">Honey Singh</div>`,
        poster: "imag/19.jpg",
    },
    {
        id: 20,
        songName: `Mitwa<br>
        <div class="subtitle">Shankar Mahadevan</div>`,
        poster: "imag/20.jpg",
    },
    {
        id: 21,
        songName: `Wakhra Swag<br>
        <div class="subtitle">Navv Inder</div>`,
        poster: "imag/21.jpg",
    },
    {
        id: 22,
        songName: `Ku Ku Ku<br>
        <div class="subtitle">J Starr</div>`,
        poster: "imag/22.jpg",
    },
    {
        id: 23,
        songName: `Mera Deewana<br>
        <div class="subtitle">Amrinder Gill</div>`,
        poster: "imag/23.jpg",
    },
    {
        id: 24,
        songName: `Kabhi Na Kabhi<br>
        <div class="subtitle">Aditya Narayan</div>`,
        poster: "imag/24.jpg",
    },
    {
        id: 25,
        songName: `Desi Hip Hop<br>
        <div class="subtitle">Bohemia</div>`,
        poster: "imag/25.jpg",
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-circle');
        masterPlay.classList.remove('bi-pause-circle');
    }
})


let index = 0;
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `imag/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-circle')
        masterPlay.classList.add('bi-pause-circle')
    })
});




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 215; // we can keep 330 alos as an option 
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 215; // 3 tiles if we keep 330 and 2 tiles or songs when we keep 215
})

// just for smooth scrolling
// pop_song_right.addEventListener('click', () => {
//     pop_song.scrollTo({
//         left: pop_song.scrollLeft += 215,
//         behavior: 'smooth'
//     })
// })
// pop_song_left.addEventListener('click', () => {
//     pop_song.scrollTo({
//         left: pop_song.scrollLeft -= 215,
//         behavior: 'smooth'
//     })
// })

let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let artist_box = document.getElementsByClassName('item')[0];

pop_artist_left.addEventListener('click', () => {
    artist_box.scrollLeft -= 215;
})

pop_artist_right.addEventListener('click', () => {
    artist_box.scrollLeft += 215;
})