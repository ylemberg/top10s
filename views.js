/*
 * Add individual wrapper
 * Each wrapper contains a song, image, and artist/title
 */

//Variables for event listeners for theme buttons
var btn_cruising = document.querySelector("#cruising");
var btn_ihh = document.querySelector("#introspectivehiphop");
var btn_night = document.querySelector("#night");
var btn_summer = document.querySelector("#summer");
var sm2Player; //SoundManager2 Player 
var itemactive; //div displayng song info

btn_cruising.addEventListener("click", function() {
    addWrappers(songs.cruising);
});
btn_ihh.addEventListener("click", function() {
    addWrappers(songs.introspec);
});
btn_night.addEventListener("click", function() {
    addWrappers(songs.night);
});
btn_summer.addEventListener("click", function() {
    addWrappers(songs.summer);
});

function addCaptions(item, song) {
    var caption = document.createElement('div');
    caption.setAttribute('class', "carousel-caption");
    var songTitle = document.createElement('h3');
    songTitle.innerHTML = song.caption.substring(0, song.caption.indexOf('_'));
    var artist = document.createElement('p');
    artist.innerHTML = song.caption.substring(song.caption.indexOf('_') + 1, song.caption.length);

    caption.appendChild(songTitle);
    caption.appendChild(artist);
    item.appendChild(caption);
}

function addImages(item, song) {
    var image = document.createElement('img');
    image.setAttribute('src', "albumcovers/" + song.name + '/' + song.albumcover);
    item.appendChild(image);
}

function addSongs(item, song) {
    var sm2 = document.createElement('div');
    sm2.setAttribute('class', "sm2-inline-list");
    var ui360 = document.createElement('div');
    ui360.setAttribute('class', "ui360 ui360-vis");
    ui360.setAttribute('style', "margin: 65px 340px; position:absolute; top:0; left:0;");
    var a = document.createElement('a');
    a.setAttribute('href', "mp3s/" + song.name + '/' + song.mp3 + ".mp3");

    ui360.appendChild(a);
    sm2.appendChild(ui360);
    item.appendChild(sm2);
}

function addWrappers(theme) {
    //If creating wrapper from home page
    //Else not creating wrapper for the first time
    if (songs.initialCrsl) {
        soundManager.setup({
            url: 'musicplayer/soundmanager/swf/'
        });
        //Generate the proper theme buttons at the top of the page
        listThemeBtns(theme, songs.initialCrsl);

        //Creating carousel
        var cntr = document.getElementsByClassName("container")[0];
        var carousel = createCrsl(cntr);
        createLarrow(carousel);
        createRarrow(carousel);

        //Creating a wrapper for every song
        for (var iDx = 0; iDx < theme.length; iDx++) {
            var itemDiv = document.createElement('div');
            if (iDx === 0) {
                itemDiv.setAttribute('class', 'item active');
            } else {
                itemDiv.setAttribute('class', 'item');
            }
            carousel.childNodes[0].appendChild(itemDiv);
            addImages(itemDiv, theme[iDx]);
            addCaptions(itemDiv, theme[iDx]);
            addSongs(itemDiv, theme[iDx]);
        }
        songs.initialCrsl = false;
    } else {
        //Have to reboot music player if already created before
        soundManager.reboot();
        //Generate the proper theme buttons at the top of the page
        listThemeBtns(theme, songs.initialCrsl);

        //Creating carousel
        var carousel = document.getElementById("crsl");
        while (carousel.firstChild) {
            carousel.removeChild(carousel.firstChild);
        }

        //Creating a wrapper for every song
        for (var iDx = 0; iDx < theme.length; iDx++) {
            var itemDiv = document.createElement('div');
            if (iDx === 0) {
                itemDiv.setAttribute('class', 'item active');
            } else {
                itemDiv.setAttribute('class', 'item');
            }
            carousel.appendChild(itemDiv);
            addImages(itemDiv, theme[iDx]);
            addCaptions(itemDiv, theme[iDx]);
            addSongs(itemDiv, theme[iDx]);
        }
    }
    nowPlaying();
}

/*
 * Display proper theme buttons
 */
function listThemeBtns(theme, frmHmPage) {
    if (frmHmPage) {
        var themeBtns = document.getElementById("homepage");
        themeBtns.removeChild(themeBtns.firstChild);
        themeBtns.removeChild(themeBtns.firstChild);
        themeBtns.style.margin = "15px auto";
        document.getElementById(theme[0].name).style = "background-color:#1a374c; color:#337ab7";
        document.getElementById(theme[0].name).innerHTML.style = "background-color:#337ab7";
    } else {
        document.getElementById(theme[0].name).style = "background-color:#1a374c; color:#337ab7";
        document.getElementById(songs.inView).style = "background-color:#FFFFFF; color: #000000";
    }
    songs.inView = theme[0].name;
}

/*
 * Setting up event listener for when you play a new song
 */
function nowPlaying() {
    displaySong("initial");

    var left = document.querySelector(".left.carousel-control");
    left.addEventListener("click", function() {
        displaySong("left");
    });
    var right = document.querySelector(".right.carousel-control");
    right.addEventListener("click", function() {
        displaySong("right");
    });
}

/*
 * Display the title/artist for the song that is currently playing
 */
function displaySong(calledBy) {
    var title;
    var artist;
    //Refactor title/artist/sm2Player with less hardcoding
    if (calledBy === "initial") {
        itemactive = document.querySelector(".item.active");
        title = itemactive.children[1].firstChild.innerHTML;
        artist = itemactive.children[1].lastChild.innerHTML;
        sm2Player = document.querySelector(".item.active .ui360");
    } else if (calledBy === "left") {
        sm2Player.removeEventListener("click", displayTitleArtist);
        itemactive = document.querySelector(".item.active");
        if (itemactive.previousSibling) {
            title = itemactive.previousSibling.children[1].firstChild.innerHTML;
            artist = itemactive.previousSibling.children[1].lastChild.innerHTML;
            sm2Player = itemactive.previousSibling.children[2].firstChild.firstChild;
        } else { //Went from first song to the last song
            title = itemactive.parentNode.lastChild.children[1].firstChild.innerHTML;
            artist = itemactive.parentNode.lastChild.children[1].lastChild.innerHTML;
            sm2Player = itemactive.parentNode.lastChild.children[2].firstChild.firstChild;
        }
    } else if (calledBy === "right") {
        sm2Player.removeEventListener("click", displayTitleArtist);
        itemactive = document.querySelector(".item.active");
        if (itemactive.nextSibling) {
            title = itemactive.nextSibling.children[1].firstChild.innerHTML;
            artist = itemactive.nextSibling.children[1].lastChild.innerHTML;
            sm2Player = itemactive.nextSibling.children[2].firstChild.firstChild;
        } else { //Went from last song to the first song
            title = itemactive.parentNode.firstChild.children[1].firstChild.innerHTML;
            artist = itemactive.parentNode.firstChild.children[1].lastChild.innerHTML;
            sm2Player = itemactive.parentNode.firstChild.children[2].firstChild.firstChild;
        }
    }
    //Create new event listener for the new song displayed in view
    sm2Player.addEventListener("click", displayTitleArtist);

    /*
     * Helper function to actually display title/artist
     */
    function displayTitleArtist() {
        var top10Name = document.querySelector(".top-10-name");
        var display = "Now Playing: " + title + " - " + artist;
        if (top10Name.innerHTML !== display) {
            top10Name.innerHTML = display;
        }
    }
}
