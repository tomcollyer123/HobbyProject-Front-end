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





