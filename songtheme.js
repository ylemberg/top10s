/*
* Add individual wrapper
* Each wrapper contains a song, image, and artist/title
*/

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
    if (data.initialCrsl) {
        soundManager.setup({
            url: 'musicplayer/soundmanager/swf/'
        });
        //Generate the proper theme buttons at the top of the page
        listThemeBtns(theme, data.initialCrsl);

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
        data.initialCrsl = false;
    } else {
    	//Have to reboot music player if already created before
        soundManager.reboot();
        //Generate the proper theme buttons at the top of the page
        listThemeBtns(theme, data.initialCrsl);

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
}