'use strict'

const getOutput = document.querySelector("#getOutput");



//  Create request
document.querySelector("#PlaylistForm").addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("THIS:", this);
    const form = this;

    const data = {
        artistName: form.artistName.value,
        title: form.title.value,
        albumName: form.albumName.value,
        genre: form.genre.value,
        releaseDate: form.releaseDate.value
    };

    console.log("DATA: ", data);


    axios
        .post("http://localhost:8080/createSong", data)
        .then(res => {
            getPlaylist();
            form.reset();
            form.artistName.focus();
            console.log(res);
        })
        .catch(err => console.error(err));

});



// get all request       
const getPlaylist = () => {
    axios
        .get("http://localhost:8080/getAllSongs")
        .then(res => {
            console.log(res);
            const playlist = res.data;

            getOutput.innerHTML = "";
            for (let song of playlist) {
                const songCol = document.createElement("div");
                songCol.classList.add("col");

                const songCard = document.createElement("div");
                songCard.classList.add("card");

                const songBody = document.createElement("div");
                songBody.classList.add("card-body");

                const songArtistName = document.createElement("h5");
                songArtistName.classList.add("card-title");
                songArtistName.innerText = song.artistName;
                songBody.appendChild(songArtistName);

                const songTitle = document.createElement("p");
                songTitle.classList.add("card-text");
                songTitle.innerText = `Title: ${song.title}`;
                songBody.appendChild(songTitle);

                const songAlbumName = document.createElement("p");
                songAlbumName.classList.add("card-text");
                songAlbumName.innerText = `Album: ${song.albumName}`;
                songBody.appendChild(songAlbumName);

                const songGenre = document.createElement("p");
                songGenre.classList.add("card-text");
                songGenre.innerText = `Genre: ${song.genre}`;
                songBody.appendChild(songGenre);

                const songReleaseDate = document.createElement("p");
                songReleaseDate.classList.add("card-text");
                songReleaseDate.innerText = `Release date: ${song.releaseDate}`;
                songBody.appendChild(songReleaseDate);

                const songDelete = document.createElement("button");
                songDelete.innerText = "delete";
                songDelete.classList.add("btn", "btn-danger");
                songDelete.addEventListener("click", () => {
                    axios
                        .delete(`http://localhost:8080/removeSong/${song.id}`)
                        .then(res => getPlaylist())
                        .catch(err => console.error(err))
                });
                songBody.appendChild(songDelete);
                songCard.appendChild(songBody);
                songCol.appendChild(songCard);

                getOutput.appendChild(songCol);
            }
        }).catch(err => console.error(err));
};

getPlaylist();


// Get by ID request
document.querySelector("#getSongById").addEventListener("submit", function (event) {
    event.preventDefault();


    const form = this;
    const songId = form.songId.value;
    axios
        .get(`http://localhost:8080/getSongById/${songId}`)
        .then(res => {
            const trackId = res.data;
            console.log(res);
            form.reset();
            form.songId.focus();
          
            getOutput.innerHTML = "";
               
                const songCol = document.createElement("div");
                songCol.classList.add("col");

                const songCard = document.createElement("div");
                songCard.classList.add("card");

                const songBody = document.createElement("div");
                songBody.classList.add("card-body");

                const songArtistName = document.createElement("h3");
                songArtistName.classList.add("card-title");
                songArtistName.innerText = trackId.artistName;
                songBody.appendChild(songArtistName);

                const songTitle = document.createElement("p");
                songTitle.classList.add("card-text");
                songTitle.innerText = `Title: ${trackId.title}`;
                songBody.appendChild(songTitle);

                const songAlbumName = document.createElement("p");
                songAlbumName.classList.add("card-text");
                songAlbumName.innerText = `Album: ${trackId.albumName}`;
                songBody.appendChild(songAlbumName);

                const songGenre = document.createElement("p");
                songGenre.classList.add("card-text");
                songGenre.innerText = `Genre: ${trackId.genre}`;
                songBody.appendChild(songGenre);

                const songReleaseDate = document.createElement("p");
                songReleaseDate.classList.add("card-text");
                songReleaseDate.innerText = `Release date: ${trackId.releaseDate}`;
                songBody.appendChild(songReleaseDate);

                songCard.appendChild(songBody);
                songCol.appendChild(songCard);

                getOutput.appendChild(songCol);
                console.log(songCol);
            
            
        })
        .catch(err => console.error(err));
});  
      
document.querySelector("#getSongByTitle").addEventListener("submit", function (event) {
    event.preventDefault();

// get by title request
    const form = this;
    const songTitle = form.songTitle.value;
    axios
        .get(`http://localhost:8080/getByTitle/${songTitle}`)
        .then(res => {
            const trackTitle = res.data;
            console.log(res);
            form.reset();
            form.songTitle.focus();
          
            getOutput.innerHTML = "";
               
                const songCol = document.createElement("div");
                songCol.classList.add("col");

                const songCard = document.createElement("div");
                songCard.classList.add("card");

                const songBody = document.createElement("div");
                songBody.classList.add("card-body");

                const songArtistName = document.createElement("h3");
                songArtistName.classList.add("card-title");
                songArtistName.innerText = trackTitle.artistName;
                songBody.appendChild(songArtistName);

                const songTitle = document.createElement("p");
                songTitle.classList.add("card-text");
                songTitle.innerText = `Title: ${songTitle.title}`;
                songBody.appendChild(songTitle);

                const songAlbumName = document.createElement("p");
                songAlbumName.classList.add("card-text");
                songAlbumName.innerText = `Album: ${trackTitle.albumName}`;
                songBody.appendChild(songAlbumName);

                const songGenre = document.createElement("p");
                songGenre.classList.add("card-text");
                songGenre.innerText = `Genre: ${trackTitle.genre}`;
                songBody.appendChild(songGenre);

                const songReleaseDate = document.createElement("p");
                songReleaseDate.classList.add("card-text");
                songReleaseDate.innerText = `Release date: ${trackTitle.releaseDate}`;
                songBody.appendChild(songReleaseDate);

                songCard.appendChild(songBody);
                songCol.appendChild(songCard);

                getOutput.appendChild(songCol);
                console.log(songCol);
            
            
        })
        .catch(err => console.error(err));
}); 
// // get by genre request
// document.querySelector("#getByGenre").addEventListener("submit", function (event) {
//     event.preventDefault();


//     const form = this;
//     const song = form.song.value;
   
//     axios
//         .get(`http://localhost:8080/getByGenre/${genre}`)
//         .then(res => {
//             const songGenre = res.data;
//             console.log(res);
//             form.reset();
//             form.songId.focus();

//             getOutput.innerHTML = "";
//             for (let genre of song) {
               
//                 const songCol = document.createElement("div");
//                 songCol.classList.add("col");

//                 const songCard = document.createElement("div");
//                 songCard.classList.add("card");

//                 const songBody = document.createElement("div");
//                 songBody.classList.add("card-body");

//                 const songArtistName = document.createElement("h3");
//                 songArtistName.classList.add("card-text");
//                 songArtistName.innerText = songGenre.artistName;
//                 songBody.appendChild(songArtistName);

//                 const songTitle = document.createElement("p");
//                 songTitle.classList.add("card-text");
//                 songTitle.innerText = `Title: ${songGenre.title}`;
//                 songBody.appendChild(songTitle);

//                 const songAlbumName = document.createElement("p");
//                 songAlbumName.classList.add("card-text");
//                 songAlbumName.innerText = `Album: ${songGenre.albumName}`;
//                 songBody.appendChild(songAlbumName);

//                 const songGenre = document.createElement("p");
//                 songGenre.classList.add("card-text");
//                 songGenre.innerText = `Genre: ${songGenre.genre}`;
//                 songBody.appendChild(songGenre);

//                 const songReleaseDate = document.createElement("p");
//                 songReleaseDate.classList.add("card-text");
//                 songReleaseDate.innerText = `Release date: ${songGenre.releaseDate}`;
//                 songBody.appendChild(songReleaseDate);

//                 songCard.appendChild(songBody);
//                 songCol.appendChild(songCard);

//                 getOutput.appendChild(songCol);
//                 console.log(songCol);
//             }
            
//         })
//         .catch(err => console.error(err));
// });
    
