'use strict'

const getOutput = document.querySelector("#getOutput");
const getOutput2 = document.querySelector("#getOutput2");
const getOutput3 = document.querySelector("#getOutput3");
const getOutput4 = document.querySelector("#getOutput4");
const getOutput5 = document.querySelector("#getOutput5");
const getOutput6 = document.querySelector("#getOutput6");

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

    //  Create request
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

// Delete request
document.querySelector("#deleteForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = this;

    const songId = form.songId.value;
    axios
        .delete(`http://localhost:8080/removeSong/${songId}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.songId.focus();
            getPlaylist();
        })
        .catch(err => console.error(err));
});


// find by artist request
const getArtist = () => {
    axios
        .get("http://localhost:8080/getByArtist/{artist}")
        .then(response => {
            console.log(response);
            const artist = response.data;

            getOutput.innerHTML = "";
            for (let song of artist) {
                const songContainer = document.createElement("div");
               
                const songArtistName = document.createElement("p");
                songArtistName.innerText = `Artist: ${song.artistName}`;
                songContainer.appendChild(songArtistName);

                const songTitle = document.createElement("p");
                songTitle.innerText = `Title: ${song.title}`;
                songContainer.appendChild(songTitle);

                const songAlbumName = document.createElement("p");
                songAlbumName.innerText = `Album: ${song.albumName}`;
                songContainer.appendChild(songAlbumName);

                const songGenre = document.createElement("p");
                songGenre.innerText = `Genre: ${song.genre}`;
                songContainer.appendChild(songGenre);

                const songReleaseDate = document.createElement("p");
                songReleaseDate.innerText = `Release date: ${song.releaseDate}`;
                songContainer.appendChild(songReleaseDate);



                getOutput2.appendChild(songContainer);
            }
        }).catch(err => console.error(err));
}






