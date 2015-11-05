var songsAdded = 0;
var night = [];
var nightAlbumCovers = ["4am_kaskade.jpg", "1970somethin_thenotoriousbig.jpg", "asongforourfathers_explosionsinthesky.jpg",
    "astronauts_oneeskimo.jpg",
    "boadicea_enya.jpg", "copernicuslanding_kidcudi.jpeg", "driveslow_kanyewest.jpg", "fastlife_koolgrap.jpg", "frosti_bjork.jpeg",
    "gooutside_cults.jpg", "intheairtonight_philcollins.png", "istilldo_thecranberries.jpg", "jabber_bluefoundation.jpg",
    "madeyoulook_nas.jpg", "midnightcity_m83.jpg", "nightcall_kavinsky.png", "nightsout_metronomy.jpg", "nightsoutro_metronomy.jpg",
    "pastmistake_tricky.jpg", "sevenmonths_portishead.png", "sierraleone_mteden.jpg", "sohigh_dojacat.jpg",
    "thedistrictsleepsalonetonight_thepostalservice.jpg", "thegreatgiginthesky_pinkfloyd.png", "thehours_beachhouse.png",
    "thesideshow_traxamillion.jpg"
];
var nightMP3s = ["4am_kaskade_song", "1970somethin_thenotoriousbig_song", "asongforourfathers_explosionsinthesky_song",
    "astronauts_oneeskimo_song", "boadicea_enya_song", "copernicuslanding_kidcudi_song", "driveslow_kanyewest_song",
    "fastlife_koolgrap_song", "frosti_bjork_song", "gooutside_cults_song", "intheairtonight_philcollins_song",
    "istilldo_thecranberries_song", "jabber_bluefoundation_song", "madeyoulook_nas_song", "midnightcity_m83_song",
    "nightcall_kavinsky_song", "nightsout_metronomy_song", "nightsoutro_metronomy_song", "pastmistake_tricky_song",
    "sevenmonths_portishead_song", "sierraleone_mteden_song", "sohigh_dojacat_song",
    "thedistrictsleepsalonetonight_thepostalservice_song", "thegreatgiginthesky_pinkfloyd_song", "thehours_beachhouse_song",
    "thesideshow_traxamillion_song"
];
var nightCaptions = ["4AM, Kaskade", "1970 Somethin, The Notorious B.I.G.", "A Song For Our Fathers, Explosions In The Sky",
    "Astronauts, One Eskimo", "Boadicea, Enya", "Copernicus Landing, Kid Cudi", "Drive Slow, Kanye West", "Fast Life, Kool G. Rap",
    "Frosti, Bjork", "Go Outside, Cults", "In The Air Tonight, Phil Collins", "I Still Do, The Cranberries",
    "Jabber, Blue Foundation", "Made You Look, Nas", "Midnight City, M83", "Nightcall, Kavinsky", "Nights Out, Metronomy",
    "Nights Outro, Metronomy", "Past Mistake, Tricky", "Seven Months, Portishead", "Sierra Leone, Mt. Eden", "So High, Doja Cat",
    "The District Sleeps Alone Tonight, The Postal Service", "The Great Gig in the Sky, Pink Floyd", "The Hours, Beach House",
    "The Sideshow, Traxamillion"
];

var cruising = [];
var cruisingAlbumCovers = ["beautyinthedark_mosdef.jpg", "bounce_logic.jpg", "cantdowithoutyou_caribou.jpg", "cutiepie_oneway.jpg",
    "dontaskwhy_moonboots.jpg", "ezra_flume.jpg", "funkyride_outkast.jpg", "gdup_thaeastsidaz.jpg", "glamorouslifestyle_thejacka.jpg",
    "gold_lapalux.jpg", "goodtimes_jamiexx.png", "hazeusview_joeybadass.jpg", "hellobrooklyn20_jayz.jpg", "icecreamtruck_domkennedy.jpg",
    "littledeath_lupefiasco.jpg", "loveisalligot_feedme.jpg", "luchini_camplo.jpg", "moneyonthefloor_bigkrit.jpg", "mrmetoo_clipse.jpg",
    "roundhere_memphisbleek.jpg", "shenevaseen_macdre.jpg", "sprinkleme_e40.jpg", "stillcallin_domkennedy.jpg",
    "summerbreeze_sealsandcrofts.jpg", "thatsthewayoftheworld_earthwindandfire.jpg", "theciscokid_war.jpg", "thenth_overwerk.jpg",
    "vicecity_jayrock.jpg", "wecanfreakit_kurupt.jpg", "welcome2thahouse_thaeastsidaz.jpg", "whatsagirltodo_fatimayamaha.jpg"
];
var cruisingMP3s = ["beautyinthedark_mosdef_song.mp3", "bounce_logic_song.mp3", "cantdowithoutyou_caribou_song.mp3",
    "cutiepie_oneway_song.mp3", "dontaskwhy_moonboots_song.mp3", "ezra_flume_song.mp3", "funkyride_outkast_song.mp3",
    "gdup_thaeastsidaz_song.mp3", "glamorouslifestyle_thejacka_song.mp3", "gold_lapalux_song.mp3", "goodtimes_jamiexx_song.mp3",
    "hazeusview_joeybadass_song.mp3", "hellobrooklyn20_jayz_song.mp3", "icecreamtruck_domkennedy_song.mp3",
    "littledeath_lupefiasco_song.mp3", "loveisalligot_feedme_song.mp3", "luchini_camplo_song.mp3", "moneyonthefloor_bigkrit_song.mp3",
    "mrmetoo_clipse_song.mp3", "roundhere_memphisbleek_song.mp3", "shenevaseen_macdre_song.mp3", "sprinkleme_e40_song.mp3",
    "stillcallin_domkennedy_song.mp3", "summerbreeze_sealsandcrofts_song.mp3", "thatsthewayoftheworld_earthwindandfire_song.mp3",
    "theciscokid_war_song.mp3", "thenth_overwerk_song.mp3", "vicecity_jayrock_song.mp3", "wecanfreakit_kurupt_song.mp3",
    "welcome2thahouse_thaeastsidaz_song.mp3", "whatsagirltodo_fatimayamaha_song.mp3"
];
var cruisingCaptions = ["Beauty in the Dark, Mos Def", "Bounce, Logic", "Cant Do Without You, Caribou", "Cutie Pie, One Way",
    "Dont Ask Why, Moon Boots", "Ezra, Flume", "Funky Ride, Outkast", "Gd Up, Tha Eastsidaz", "Glamarous Lifestyle, The Jacka",
    "Gold, Lapalux", "Good Times, Jamie XX", "Hazeus View, Joey Bada$$", "Hello Brooklyn 2.0, Jay Z", "Ice Cream Truck, Dom Kennedy",
    "Little Death, Lupe Fiasco", "Love is All I Got, Feed Me", "Luchini, Camp Lo", "Money On The Floor, Big K.R.I.T", "Mr. Me Too, Clipse",
    "Round Here, Memphis Bleek", "She Neva Seen, Mac Dre", "Sprinkle Me, E-40", "Still Callin, Dom Kennedy",
    "Summer Breeze, Seals and Crofts", "Thats the Way of the World, Earth Wind and Fire", "The Cisco Kid, War", "The Nth, OVERWERK",
    "Vice City, Jay Rock", "We Can Freak It, Kurupt", "Welcome 2 Tha House, Tha Eastsidaz", "Whats a Girl to Do, Fatima Yamaha"
];

var introspec = [];
var introspecAlbumCovers = ["67_mellowhype.png", "acidrain_chancetherapper.jpg", "aintgonletup_dgyola.jpg", "amongthesleep_cage.jpg",
    "becauseigothigh_afroman.jpg", "bookofsoul_absoul.jpg", "exhibitc_jayelectronica.jpg", "feelingitintheair_beaniesigel.jpg",
    "guarantees_atmosphere.jpg", "heatunderababyseat_lupefiasco.jpg", "hereforyou_eyedea.jpg", "highsandlows_kidcudi.jpg",
    "imag_lilkeke.jpg", "justamoment_nas.jpg", "lalala_lilwayne.jpg", "likeme_joeybadass.jpg", "lilghettoboys_drdre.jpg",
    "limos_vincestaples.jpg", "nikki_logic.jpg", "ratchets_joemoses.jpg", "reallybe_yg.jpg", "somanytears_2pac.jpg", "songcry_jayz.jpg",
    "sunday_earlsweatshirt.jpg", "thewaters_mickjenkins.jpeg", "thisismylife_slimthug.jpg", "thuggin_jay305.jpg", "tivstip_ti.jpg",
    "u_kendricklamar.png", "wetdreamz_jcole.jpg", "whatsthatsmell_bg.jpg", "whenthegundraws_pharoahemonch.jpg", "wordsineversaid_lasers.jpg",
    "youreeverything_bunb.jpg"
];
var introspecMP3s = ["67_mellowhype_song.mp3", "acidrain_chancetherapper_song.mp3", "aintgonletup_dgyola_song.mp3",
    "amongthesleep_cage_song.mp3", "becauseigothigh_afroman_song.mp3", "bookofsoul_absoul_song.mp3", "exhibitc_jayelectronica_song.mp3",
    "feelingitintheair_beaniesigel_song.mp3", "guarantees_atmosphere_song.mp3", "heatunderababyseat_lupefiasco_song.mp3",
    "hereforyou_eyedea_song.mp3", "highsandlows_kidcudi_song.mp3", "imag_lilkeke_song.mp3", "justamoment_nas_song.mp3",
    "lalala_lilwayne_song.mp3", "likeme_joeybadass_song.mp3", "lilghettoboys_drdre_song.mp3", "limos_vincestaples_song.mp3",
    "nikki_logic_song.mp3", "ratchets_joemoses_song.mp3", "reallybe_yg_song.mp3", "somanytears_2pac_song.mp3", "songcry_jayz_song.mp3",
    "sunday_earlsweatshirt_song.mp3", "thewaters_mickjenkins_song.mp3", "thisismylife_slimthug_song.mp3", "thuggin_jay305_song.mp3",
    "tivstip_ti_song.mp3", "u_kendricklamar_song.mp3", "wetdreamz_jcole_song.mp3", "whatsthatsmell_bg_song.mp3",
    "whenthegundraws_pharoahemonch_song.mp3", "wordsineversaid_lasers_song.mp3", "youreeverything_bunb_song.mp3"
];
var introspecCaptions = ["67, Mellowhype", "Acid Rain, Chance the Rapper", "Aint Gon Let Up, DG Yola", "Among the Sleep, Cage",
    "Because I Got High, Afroman", "Book of Soul, Ab-Soul", "Exhibit C, Jay Electronica", "Feel It In The Air, Beanie Sigel",
    "Guarantees, Atmosphere", "Heat Under a Baby Seat, Lupe Fiasco", "La La La, Lil Wayne", "Like Me, Joey Bada$$",
    "Lil Ghetto Boys, Dr. Dre", "Limos, Vince Staples", "Just a Moment, Nas", "Nikki, Logic", "Ratchets, Joe Moses", "Really Be, YG",
    "So Many Tears, 2pac", "Song Cry, Jay Z", "Sunday, Earl Sweatshirt", "The Water[s], Mick Jenkins", "This is My Life, Slim Thug",
    "Thuggin, Jay 305", "T.I. Vs. T.I.P., T.I.", "u, Kendrick Lamar", "Wet Dreamz, J. Cole", "Whats That Smell, B.G.",
    "When The Gun Draws, Pharaoahe Monch", "Words I Never Said, Lupe Fiasco", "Youre Everything, Bun B"
];
generateListTheme(night, nightAlbumCovers, nightMP3s, nightCaptions, 'night');
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
    image.setAttribute('src', "albumcovers/" + song.name + '/' + song.albumcover);
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
    source.setAttribute('src', "mp3s/" + song.name + '/' + song.mp3 + ".mp3");
    aud.appendChild(source);
    d.appendChild(aud);
    item.appendChild(d);
}

function generateListTheme(theme, albumcovers, mp3s, captions, name) {
    for (iDx = 0; iDx < albumcovers.length; iDx++) {
        var themeObj = {
            "albumcover": albumcovers[iDx],
            "mp3": mp3s[iDx],
            "caption": captions[iDx],
            "name": name
        };
        theme.push(themeObj);
    }
}
