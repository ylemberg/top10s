var songsAdded = 0;
var night = [];
var nightAlbumCovers = ["4am_kaskade.jpg", "1970somethin_thenotoriousbig.jpg", "asongforourfathers_explosionsinthesky.jpg",
    "astronauts_oneeskimo.jpg",
    "boadicea_enya.jpg", "copernicuslanding_kidcudi.jpeg", "driveslow_kanyewest.jpg", "fastlife_koolgrap.jpg", "frosti_bjork.jpeg",
    "gooutside_cults.jpg", "intheairtonight_philcollins.png", "istilldo_thecranberries.jpg", "jabber_bluefoundation.jpg",
    "madeyoulook_nas.jpg", "midnightcity_m83.jpg", "nightcall_kavinsky.png", "nightsout_metronomy.jpg", "nightsoutro_metronomy.jpg",
    "pastmistake_tricky.jpg", "sevenmonths_portishead.png", "sierraleone_mteden.jpg", "sohigh_dojacat.jpg",
    "thedistrictsleepsalonetonight_thepostalservice.jpg", "thegreatgiginthesky_pinkfloyd.png", "thehours_beachhouse.png",
    "thesideshow_mistahfab.jpg", "traces_thekickdrums.jpg"
];
var nightMP3s = ["4am_kaskade_song", "1970somethin_thenotoriousbig_song", "asongforourfathers_explosionsinthesky_song",
    "astronauts_oneeskimo_song", "boadicea_enya_song", "copernicuslanding_kidcudi_song", "driveslow_kanyewest_song",
    "fastlife_koolgrap_song", "frosti_bjork_song", "gooutside_cults_song", "intheairtonight_philcollins_song",
    "istilldo_thecranberries_song", "jabber_bluefoundation_song", "madeyoulook_nas_song", "midnightcity_m83_song",
    "nightcall_kavinsky_song", "nightsout_metronomy_song", "nightsoutro_metronomy_song", "pastmistake_tricky_song",
    "sevenmonths_portishead_song", "sierraleone_mteden_song", "sohigh_dojacat_song",
    "thedistrictsleepsalonetonight_thepostalservice_song", "thegreatgiginthesky_pinkfloyd_song", "thehours_beachhouse_song",
    "thesideshow_mistahfab_song", "traces_thekickdrums_song"
];
var nightCaptions = ["4AM, Kaskade", "1970 Somethin, The Notorious B.I.G.", "A Song For Our Fathers, Explosions In The Sky",
    "Astronauts, One Eskimo", "Boadicea, Enya", "Copernicus Landing, Kid Cudi", "Drive Slow, Kanye West", "Fast Life, Kool G. Rap",
    "Frosti, Bjork", "Go Outside, Cults", "In The Air Tonight, Phil Collins", "I Still Do, The Cranberries",
    "Jabber, Blue Foundation", "Made You Look, Nas", "Midnight City, M83", "Nightcall, Kavinsky", "Nights Out, Metronomy",
    "Nights Outro, Metronomy", "Past Mistake, Tricky", "Seven Months, Portishead", "Sierra Leone, Mt. Eden", "So High, Doja Cat",
    "The District Sleeps Alone Tonight, The Postal Service", "The Great Gig in the Sky, Pink Floyd", "The Hours, Beach House",
    "The Sideshow, Mistah Fab", "Traces, The Kickdrums"
];
generateListTheme(night, nightAlbumCovers, nightMP3s, nightCaptions);
addWrappers(night);

function addWrappers(theme) {
    var carousel = document.getElementById("crsl");
    for (var iDx = 0; iDx < theme.length; iDx++) {
        var itemDiv = document.createElement('div');
        if (iDx == 0) {
            itemDiv.setAttribute('class', 'item active');
        } else {
            itemDiv.setAttribute('class', 'item');
        }
        carousel.appendChild(itemDiv);
        addImages(itemDiv, theme[iDx]);
        addCaptions(itemDiv, theme[iDx]);
        addSongs(itemDiv, theme[iDx]);
    };
}

function addImages(item, song) {
    var image = document.createElement('img');
    image.setAttribute('src', "albumcovers/" + song.albumcover);
    item.appendChild(image);
}

function addCaptions(item, song) {
    var caption = document.createElement('div');
    caption.setAttribute('class', "carousel-caption");
    var songTitle = document.createElement('h3');
    songTitle.innerHTML = song.caption.substring(0, song.caption.indexOf(','));
    var artist = document.createElement('p');
    artist.innerHTML = song.caption.substring(song.caption.indexOf(',') + 1, song.caption.length);

    caption.appendChild(songTitle);
    caption.appendChild(artist);
    item.appendChild(caption);
}

function addSongs(item, song) {
    if (songsAdded < 5) {
        var enableControls = function(a) {
            a.controls = true;
            a.load();
        }
        var d = document.createElement('div');
        d.setAttribute('style', "margin: 350px 325px; position:absolute; top:0; left:0;");
        var aud = document.createElement('audio');
        aud.setAttribute('id', "myAudio");
        enableControls(aud);
        var source = document.createElement('source');
        source.setAttribute('src', "mp3s/" + song.mp3 + ".mp3");
        aud.appendChild(source);
        d.appendChild(aud);
        item.appendChild(d);
        songsAdded++;
    }
}

function generateListTheme(theme, albumcovers, mp3s, captions) {
    for (iDx = 0; iDx < albumcovers.length; iDx++) {
        var themeObj = {
            "albumcover": albumcovers[iDx],
            "mp3": mp3s[iDx],
            "caption": captions[iDx]
        };
        theme.push(themeObj);
    }
}
