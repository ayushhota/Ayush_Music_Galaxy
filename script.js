// console.log("this is the music website");

// Initialize the variables
songIndex = 0;
let audioElement = new Audio('Run Free.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songListPlay = document.getElementsByClassName('songListPlay');
let songItemPlay = document.getElementsByClassName('songItemPlay');

let songs = [
    {songName: "Run Free", filePath: "1.mp3", coverPath: "cover1.jpg"},
    {songName: "Safari", filePath: "2.mp3", coverPath: "cover2.jpg"},
    {songName: "Sugar & Brownies", filePath: "3.mp3", coverPath: "cover3.jpg"},
    {songName: "Alone Pt 2", filePath: "4.mp3", coverPath: "cover4.jpg"},
    {songName: "Queen Of Hearts", filePath: "5.mp3", coverPath: "cover5.jpg"},
    {songName: "August Diaries", filePath: "6.mp3", coverPath: "cover6.jpg"},
    {songName: "Lean On", filePath: "7.mp3", coverPath: "cover7.jpg"},
    {songName: "Ignite", filePath: "8.mp3", coverPath: "cover8.jpg"},
]

// songItems.forEach((element, i)=>{
//     document.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     document.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

//handle play/pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //Update seekbaar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

// change seek bar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1
    }
    audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})