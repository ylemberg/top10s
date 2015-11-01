console.log("Pray Yuriy Pray");
var wrappersAdded = 0;
var carousel = document.getElementById("crsl");
var div1 = document.createElement('div');
div1.setAttribute('class', "item active");
var div2 = document.createElement('div');
div2.setAttribute('class', "item");
addWrappers(div1);
addWrappers(div2);

function addWrappers(d) {
    carousel.appendChild(d);
    addImages(d);
    addCaptions(d);
    addSongs(d);
    wrappersAdded++;
    console.log("Wrappers", wrappersAdded);
}

function addImages(d) {
    if (wrappersAdded == 0) {
        var img1 = document.createElement('img');
        img1.setAttribute('src', "albumcovers/4am_kaskade.jpg");
        d.appendChild(img1);
    } else {
        var img2 = document.createElement('img');
        img2.setAttribute('src', "albumcovers/1970somethin_thenotoriousbig.jpg");
        d.appendChild(img2);
    }
}

function addCaptions(d) {
    if (wrappersAdded == 0) {
        var cap1 = document.createElement('div');
        cap1.setAttribute('class', "carousel-caption");
        var songTitle1 = document.createElement('h3');
        songTitle1.innerHTML = "4AM";
        var artist1 = document.createElement('p');
        artist1.innerHTML = "Kaskade";

        cap1.appendChild(songTitle1);
        cap1.appendChild(artist1);
        d.appendChild(cap1);
    } else {
        var cap2 = document.createElement('div');
        cap2.setAttribute('class', "carousel-caption");
        var songTitle2 = document.createElement('h3');
        songTitle2.innerHTML = "1970 Somethin";
        var artist2 = document.createElement('p');
        artist2.innerHTML = "The Notorious B.I.G.";

        cap2.appendChild(songTitle2);
        cap2.appendChild(artist2);
        d.appendChild(cap2);
    }
}

function addSongs(d) {
    var enableControls = function(a) {
        a.controls = true;
        a.load();
    }

    if (wrappersAdded == 0) {
        var d1 = document.createElement('div');
        d1.setAttribute('style', "margin: 350px 325px; position:absolute; top:0; left:0;");
        var aud1 = document.createElement('audio');
        aud1.setAttribute('id', "myAudio");
        enableControls(aud1);
        var source1 = document.createElement('source');
        source1.setAttribute('src', "mp3s/4am_kaskade_song.mp3");
        aud1.appendChild(source1);
        d1.appendChild(aud1);
        d.appendChild(d1);
    } else {
        var d2 = document.createElement('div');
        d2.setAttribute('style', "margin: 350px 325px; position:absolute; top:0; left:0;");
        var aud2 = document.createElement('audio');
        aud2.setAttribute('id', "myAudio");
        enableControls(aud2);
        var source2 = document.createElement('source');
        source2.setAttribute('src', "mp3s/1970somethin_thenotoriousbig_song.mp3");
        aud2.appendChild(source2);
        d2.appendChild(aud2);
        d.appendChild(d2);
    }
}
