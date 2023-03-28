console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;

let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressBar');
let likeBtn = document.querySelector(".like .fa-heart");
console.log(likeBtn);
// let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songImage = document.getElementById("song-image");
let artistName = document.getElementById("masterArtistName");
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {id:1,songName: "Mother song - Nan paartha mudhal ", filePath: "songs/1.mp3", coverPath: "posters/1.jpg",Lang:"Tamil",Artist:"Yuvan shankar raja, Sid Sriram"},
    {id:2,songName: "Kadhal Ennule", filePath: "songs/2.mp3", coverPath: "posters/2.jpg",Lang:"Tamil",Artist:"Rajesh Murugesan, Ranjith Govind"},
    {id:3,songName: "Nanbiye - Teddy", filePath: "songs/3.mp3", coverPath: "posters/3.jpg",Lang:"Tamil",Artist:"Aniruth Ravichandhar, D.Imman"},
    {id:4,songName: "Ranjithame", filePath: "songs/4.mp3", coverPath: "posters/4.jpg",Lang:"Tamil",Artist:"Vijay Joseph Chandhrasekar, M.M.Manasi"},
    {id:5,songName: "Aval - Manithan", filePath: "songs/5.mp3", coverPath: "posters/5.jpg",Lang:"Tamil",Artist:"Santhosh Narayanan"},
    {id:6,songName: "Ranjhana", filePath: "songs/6.mp3", coverPath: "posters/6.jpg",Lang:"Hindi",Artist:"Jaswinder Singh, A.R.Rahman"},
    {id:7,songName: "Tujme Rab diktha hai", filePath: "songs/7.mp3", coverPath: "posters/7.jpg",Lang:"Hindi",Artist:"Roop Kumar Rathod"},
    {id:8,songName: "Blinding Lights", filePath: "songs/8.mp3", coverPath: "posters/8.jpg",Lang:"English",Artist:"The Weeknd- Abel Makkonen Tesfaye"},
    {id:9,songName: "Unstoppable", filePath: "songs/9.mp3", coverPath: "posters/9.jpg",Lang:"English",Artist:"Sia"},
    {id:10,songName: "Kaadhalaada", filePath: "songs/10.mp3", coverPath: "posters/10.jpg",Lang:"Tamil",Artist:"Pradeep Kumar, Shasha"},
    {id:11,songName: "No Lie", filePath: "songs/11.mp3", coverPath: "posters/11.jpg",Lang:"English",Artist:"Dua lipa,Sanderson"},
    {id:12,songName: "Alone pt-II", filePath: "songs/12.mp3", coverPath: "posters/12.jpg",Lang:"English",Artist:"Alan walker"},
    {id:13,songName: "Yarayum ivlo azhaga", filePath: "songs/13.mp3", coverPath: "posters/13.jpg",Lang:"Tamil",Artist:"Simbu, Vivek-Mervin"},
    {id:14,songName: "Dandelions", filePath: "songs/14.mp3", coverPath: "posters/14.jpg",Lang:"English",Artist:"Ruth.B"},
    {id:15,songName: "Perfect", filePath: "songs/15.mp3", coverPath: "posters/15.jpg",Lang:"English",Artist:"Ed sheeran"},
    {id:16,songName: "Stereo hearts", filePath: "songs/16.mp3", coverPath: "posters/16.jpg",Lang:"English",Artist:"Gym Class Heroes"},
    {id:17,songName: "Idhuvum kadandhu pogum", filePath: "songs/17.mp3", coverPath: "posters/17.jpg",Lang:"Tamil",Artist:"Girish,Sid Sriram"},
    {id:18,songName: "Thousand years", filePath: "songs/18.mp3", coverPath: "posters/18.jpg",Lang:"English",Artist:"Christiana Perri"},
    {id:19,songName: "Oxygen", filePath: "songs/19.mp3", coverPath: "posters/19.jpg",Lang:"Tamil",Artist:"HipHop Tamizha, Sudarshan"},
    {id:20,songName: "Scars to your beautiful", filePath: "songs/20.mp3", coverPath: "posters/20.jpg",Lang:"English",Artist:"Alessia Cara"},
    {id:21,songName: "Without me", filePath: "songs/21.mp3", coverPath: "posters/21.jpg",Lang:"English",Artist:"Hasley"},
    {id:22,songName: "Anbil Avan", filePath: "songs/22.mp3", coverPath: "posters/22.jpg",Lang:"Tamil",Artist:"A.R.Rahman, Chinmayi, Devan"},
    {id:23,songName: "Sirukki vaasam", filePath: "songs/23.mp3", coverPath: "posters/23.jpg",Lang:"Tamil",Artist:"Anand Aravind Aakshan,Swetha Mohan"},
    {id:24,songName: "Porkanda Singam", filePath: "songs/24.mp3", coverPath: "posters/24.jpg",Lang:"Tamil",Artist:"Ravi G, Anirudh Ravichandran"},
    {id:25,songName: "Agalaathey", filePath: "songs/25.mp3", coverPath: "posters/25.jpg",Lang:"Tamil",Artist:"Prithivee, Yuvan Shankar Raja"},
    {id:26,songName: "Undiporaadhey", filePath: "songs/26.mp3", coverPath: "posters/26.jpg",Lang:"Telugu",Artist:"Sid Sriram"},
    {id:27,songName: "Samajavaragamana", filePath: "songs/27.mp3", coverPath: "posters/27.jpg",Lang:"Telugu",Artist:"Sid Sriram"},
    {id:28,songName: "Nenjukulla nee", filePath: "songs/28.mp3", coverPath: "posters/28.jpg",Lang:"Tamil",Artist:"Vijay Prakash, Ajesh"},
    {id:29,songName: "Phir kabhi", filePath: "songs/29.mp3", coverPath: "posters/29.jpg",Lang:"Hindi",Artist:"Arijit Singh"},
    {id:30,songName: "Oh Penne", filePath: "songs/30.mp3", coverPath: "posters/30.jpg",Lang:"Tamil",Artist:"Anirudh Ravichandran, Vishal dadlani"},
    {id:31,songName: "Jab Tak", filePath: "songs/31.mp3", coverPath: "posters/31.jpg",Lang:"Hindi",Artist:"Aniruth Ravichandhar, D.Imman"},
    {id:32,songName: "Kesariya", filePath: "songs/32.mp3", coverPath: "posters/32.jpg",Lang:"Hindi",Artist:"Pritam, Arijith singh, Amitabh"},
    {id:33,songName: "Paramsundari", filePath: "songs/34.mp3", coverPath: "posters/34.jpg",Lang:"Hindi",Artist:"A.R.Rahman, Shreya Ghoshal"},
    {id:34,songName: "Hai rama", filePath: "songs/35.mp3", coverPath: "posters/35.jpg",Lang:"Hindi",Artist:"Hariharan, Swarnalatha"},
    {id:35,songName: "Rataan Lambiyam", filePath: "songs/36.mp3", coverPath: "posters/36.jpg",Lang:"Hindi",Artist:"Tanishk Bagchi, Jubin Nautiyal"},
    {id:36,songName: "Agar Tum Saath Ho", filePath: "songs/37.mp3", coverPath: "posters/37.jpg",Lang:"Hindi",Artist:"Alka Yagnik, Arijith Singh"},
    {id:37,songName: "Ranjha", filePath: "songs/38.mp3", coverPath: "posters/38.jpg",Lang:"Hindi",Artist:"Jasleen Royal, B Preak, Romy"},
    {id:38,songName: "Chilla Chilla", filePath: "songs/39.mp3", coverPath: "posters/39.jpg",Lang:"Tamil",Artist:"Anirudh Ravichandran,Gibran, Vaisakh"},
    {id:39,songName: "Tum Hi Ho", filePath: "songs/40.mp3", coverPath: "posters/40.jpg",Lang:"Hindi",Artist:"Arijit singh"},
    {id:40,songName: "Bekhayali", filePath: "songs/41.mp3", coverPath: "posters/41.jpg",Lang:"Hindi",Artist:"Sachet Tandom"},
    {id:41,songName: "Kurumugil", filePath: "songs/42.mp3", coverPath: "posters/42.jpg",Lang:"Tamil",Artist:"Vishal Chandra sekar, Sai vignesh"},
    {id:42,songName: "Ramuloo Ramulaa", filepath:"songs/43.mp3", coverPath: "posters/43.jpg",Lang:"Telugu",Artist:"Anurag Kulkami, Mangli"},
    {id:43,songName: "Saranga Dariya", filePath: "songs/44.mp3", coverPath: "posters/44.jpg",Lang:"Telugu",Artist:"Mangli"},
    {id:44,songName: "Vachinde", filePath: "songs/45.mp3", coverPath: "posters/45.jpg",Lang:"Telugu",Artist:"MadhuPriya, Ramki"},
    {id:45,songName: "Srivalli", filePath: "songs/46.mp3", coverPath: "posters/46.jpg",Lang:"Telugu",Artist:"Sid Sriram, Allu Arjun"},
    {id:46,songName: "Top Lesi Poddi", filePath: "songs/47.mp3", coverPath: "posters/47.jpg",Lang:"Telugu",Artist:"Sagar, Geetha Madhuri"},
    {id:47,songName: "Inkem Inkem Inkem", filePath: "songs/48.mp3", coverPath: "posters/48.jpg",Lang:"Telugu",Artist:"Sid Sriram"},
    {id:48,songName: "Maate vinadhuga", filePath: "songs/49.mp3", coverPath: "posters/49.jpg",Lang:"Telugu",Artist:"Sid Sriram, Jakes bejoy"},
    
]
let songsArray = [...songs.map((song)=>{
    return song.id
})]
let currentSong = 0
console.log(songsArray);
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=49){
        songIndex = songsArray[currentSong];
    }
    else{
        songIndex = songsArray[currentSong++];
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    songImage.src = songs[songIndex-1].coverPath;
    artistName.innerText = songs[songIndex - 1].Artist;
    likeBtn.setAttribute("data-index",songs[songIndex - 1].id);
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    Array.from(document.querySelectorAll(".play-album")).forEach((e)=>{
        e.classList.remove("stayAtTop");
        e.firstElementChild.classList.add('fa-play');
        e.firstElementChild.classList.remove('fa-pause');
    })
    let play  = document.getElementById(`${songIndex}`);
    play.classList.add("stayAtTop");
    play.firstElementChild.classList.remove('fa-play');
    play.firstElementChild.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = songsArray[currentSong]
    }
    else{
        songIndex = songsArray[--currentSong];
    }
    console.log(songIndex);
    audioElement.src = `songs/${songIndex}.mp3`;
    songImage.src = songs[songIndex -1 ].coverPath;
    artistName.innerText = songs[songIndex -1].Artist;
    likeBtn.setAttribute("data-index",songs[songIndex].id);
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    Array.from(document.querySelectorAll(".play-album")).forEach((e)=>{
        e.classList.remove("stayAtTop");
        e.firstElementChild.classList.add('fa-play');
        e.firstElementChild.classList.remove('fa-pause');
    })
    let play  = document.getElementById(`${songIndex}`);
    play.classList.add("stayAtTop");
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
})

//Navigate b/w pages
document.querySelector('#hm').addEventListener('click', ()=>{
  
    document.getElementById('hm').style.opacity = "1";
    document.getElementById('src').style.opacity = "0.7";
    document.getElementById('lng').style.opacity = "0.7";
    document.getElementById('liksng').style.opacity = "0.7";
    
  
    document.querySelector('.home').style.display = "flex";
    document.querySelector('.search').style.display = "none";
    document.querySelector('.lang').style.display = "none";
    document.querySelector('.liked').style.display = "none";
   
  
  })
  document.querySelector('#src').addEventListener('click', ()=>{
  
    document.getElementById('src').style.opacity = "1";
    document.getElementById('hm').style.opacity = "0.7";
    document.getElementById('lng').style.opacity = "0.7";
    document.getElementById('liksng').style.opacity = "0.7";
  
    document.querySelector('.home').style.display = "none";
    document.querySelector('.search').style.display = "flex";
    document.querySelector('.lang').style.display = "none";
    document.querySelector('.liked').style.display = "none";
  
  
  
  })
  
  document.querySelector('#lng').addEventListener('click', ()=>{
    
    document.getElementById('lng').style.opacity = "1";
    document.getElementById('src').style.opacity = "0.7";
    document.getElementById('hm').style.opacity = "0.7";
    document.getElementById('liksng').style.opacity = "0.7";
  
  
    document.querySelector('.home').style.display = "none";
    document.querySelector('.search').style.display = "none";
    document.querySelector('.lang').style.display = "flex";
    document.querySelector('.liked').style.display = "none";
  
  
  })
  
  document.querySelector('#liksng').addEventListener('click', ()=>{
    document.getElementById('liksng').style.opacity = "1";
    document.getElementById('src').style.opacity = "0.7";
    document.getElementById('lng').style.opacity = "0.7";
    document.getElementById('hm').style.opacity = "0.7";
    document.querySelector('.home').style.display = "none";
    document.querySelector('.search').style.display = "none";
    document.querySelector('.lang').style.display = "none";
    document.querySelector('.liked').style.display = "flex";
    createLikedSongs();
  })

  function createLikedSongs(){
    document.querySelector(".likebody").innerHTML = "";
    let likedSongs = JSON.parse(localStorage.getItem("liked"));
    let resultSongs = songs.filter((song)=>{
        return likedSongs.includes(song.id);
    })
    resultSongs.forEach((song)=>{
        let result = createAlbum(song);
        document.querySelector(".likebody").appendChild(result);
    })
  }
  function createAlbum(songDetails){
    let div = document.createElement("div");
    div.classList.add("album-card");
    let fDiv = document.createElement("div");
    fDiv.classList.add("album-cover-with-icon");
    let sDiv = document.createElement("div");
    sDiv.classList.add("album-deatils");
    let ffDiv = document.createElement("div");
    ffDiv.classList.add("album-cover");
    let fsDiv = document.createElement("div");
    fsDiv.classList.add("play-album");
    fsDiv.id = songDetails.id;
    let img = document.createElement("img");
    img.src = songDetails.coverPath;
    img.setAttribute("draggable",false);
    let i = document.createElement("i");
    i.classList.add("fa-solid" ,"fa-play");
    let played = false;
    fsDiv.addEventListener('click', ()=>{
        currentSong = songDetails.id;
        likeBtn.classList.remove("colorGreen");
        let likedSongs = JSON.parse(localStorage.getItem("liked"));
        if(likedSongs){
            if(likedSongs.includes(songDetails.id)){
                likeBtn.classList.add("colorGreen");
            }
        }
        if(!played){
            Array.from(document.querySelectorAll(".play-album")).forEach((e)=>{
                e.classList.remove("stayAtTop");
                e.firstElementChild.classList.add('fa-play');
                e.firstElementChild.classList.remove('fa-pause');
            })
        }
        if(i.classList.contains("fa-play")){
            fsDiv.classList.add("stayAtTop");
            i.classList.add("colorBlack");
            if(!played){
                played = true;
                audioElement.src = songDetails.filePath;
                songImage.src = songDetails.coverPath;
                artistName.innerText = songDetails.Artist;
                likeBtn.setAttribute("data-index",songDetails.id);
                masterSongName.innerText = songDetails.songName;
                audioElement.currentTime = 0;
                audioElement.play();
                i.classList.remove('fa-play');
                i.classList.add('fa-pause');
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
            }else{
                audioElement.play();
                i.classList.remove('fa-play');
                i.classList.add('fa-pause');
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
            }
        }else{
            fsDiv.classList.remove("stayAtTop");
            i.classList.remove("colorBlack");
            audioElement.pause();
            i.classList.add('fa-play');
            i.classList.remove('fa-pause');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }
        audioElement.onended =()=>{
            console.log("Song ended");
            let nextCard = document.getElementById(`${songDetails.id + 1}`);
            console.log(nextCard);
            nextCard.click();
        }
    })    
    let h3 = document.createElement("h3");
    h3.innerText = songDetails.songName;
    let p = document.createElement("p");
    p.innerText = songDetails.Artist;
    div.appendChild(fDiv);
    div.appendChild(sDiv);
    fDiv.appendChild(ffDiv);
    ffDiv.appendChild(img);
    fsDiv.appendChild(i);
    fDiv.appendChild(fsDiv);
    sDiv.appendChild(h3);
    sDiv.appendChild(p);
    return div;
  }

  window.onload = function(){
    songs.forEach((song)=>{
        let result = createAlbum(song);
        document.querySelector(".home").appendChild(result);
    })

  }

  function filterByLanguage(language){
    return result = songs.filter((song)=>{
        return song.Lang === language;
    })
  }
  function filterByName(name){
    return result = songs.filter((song)=>{
        return song.songName.toLowerCase().includes(name.toLowerCase());
    })
  }
  Array.from(document.querySelectorAll(".playbtn")).forEach((playBtn)=>{
    playBtn.addEventListener("click",function(event){
        let langSpecificSongs = [...filterByLanguage(playBtn.id).map((filter)=>{
            return filter.id
        })]
        songsArray = langSpecificSongs
        currentSong = 0
        songIndex = songsArray[currentSong++];
        audioElement.src = `songs/${songIndex}.mp3`;
        songImage.src = songs[songIndex-1].coverPath;
        artistName.innerText = songs[songIndex - 1].Artist;
        likeBtn.setAttribute("data-index",songs[songIndex - 1].id);
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
  });

  document.querySelector("#srcsng").addEventListener("input",function(){
    document.querySelector('.srcbody').innerHTML = "";
    if(this.value!=""){
        let result= filterByName(this.value);
        result.forEach((res)=>{
            let output = createAlbum(res);
            document.querySelector('.srcbody').appendChild(output);
        })
    }
  })
  document.querySelector(".like").addEventListener("click",function(){
    let likedSongs = JSON.parse(localStorage.getItem("liked"));
    let id = parseInt(likeBtn.getAttribute("data-index"));
    if(likeBtn.classList.contains("colorGreen")){
        likeBtn.classList.remove("colorGreen");
        if(likedSongs){
            let result = likedSongs;
            if(likedSongs.includes(id)){
                result.splice(result.indexOf(id),1);
                // result.push(id);
                localStorage.setItem("liked",JSON.stringify(result));
            }
        }else{
            let likedSongs = [id];
            localStorage.setItem("liked",JSON.stringify(likedSongs));
        }
    }else{
        likeBtn.classList.add("colorGreen");
        if(likedSongs){
            let result = likedSongs;
            if(!likedSongs.includes(id)){
                result.push(id);
                localStorage.setItem("liked",JSON.stringify(result));
            }
        }else{
            let likedSongs = [id];
            localStorage.setItem("liked",JSON.stringify(likedSongs));
        }
    }
    createLikedSongs();
  }) 