var songsAdded = 0;

var cruising = [];
var cruisingAlbumCovers = ["beautyinthedark_mosdef.jpg", "bounce_logic.jpg", "cantdowithoutyou_caribou.jpg", "cutiepie_oneway.jpg",
    "dontaskwhy_moonboots.jpg", "ezra_flume.jpg", "funkyride_outkast.jpg", "gdup_thaeastsidaz.jpg", "glamorouslifestyle_thejacka.jpg",
    "gold_lapalux.jpg", "goodtimes_jamiexx.png", "hazeusview_joeybadass.jpg", "hellobrooklyn20_jayz.jpg", "icecreamtruck_domkennedy.jpg",
    "littledeath_lupefiasco.jpg", "loveisalligot_feedme.jpg", "luchini_camplo.jpg", "moneyonthefloor_bigkrit.jpg", "mrmetoo_clipse.jpg",
    "roundhere_memphisbleek.jpg", "shenevaseen_macdre.jpg", "sprinkleme_e40.jpg", "stillcallin_domkennedy.jpg",
    "summerbreeze_sealsandcrofts.jpg", "thatsthewayoftheworld_earthwindandfire.jpg", "theciscokid_war.jpg", "thenth_overwerk.jpg",
    "vicecity_jayrock.jpg", "wecanfreakit_kurupt.jpg", "welcome2thahouse_thaeastsidaz.jpg", "whatsagirltodo_fatimayamaha.jpg"
];
var cruisingMP3s = ["beautyinthedark_mosdef_song", "bounce_logic_song", "cantdowithoutyou_caribou_song",
    "cutiepie_oneway_song", "dontaskwhy_moonboots_song", "ezra_flume_song", "funkyride_outkast_song",
    "gdup_thaeastsidaz_song", "glamorouslifestyle_thejacka_song", "gold_lapalux_song", "goodtimes_jamiexx_song",
    "hazeusview_joeybadass_song", "hellobrooklyn20_jayz_song", "icecreamtruck_domkennedy_song",
    "littledeath_lupefiasco_song", "loveisalligot_feedme_song", "luchini_camplo_song", "moneyonthefloor_bigkrit_song",
    "mrmetoo_clipse_song", "roundhere_memphisbleek_song", "shenevaseen_macdre_song", "sprinkleme_e40_song",
    "stillcallin_domkennedy_song", "summerbreeze_sealsandcrofts_song", "thatsthewayoftheworld_earthwindandfire_song",
    "theciscokid_war_song", "thenth_overwerk_song", "vicecity_jayrock_song", "wecanfreakit_kurupt_song",
    "welcome2thahouse_thaeastsidaz_song", "whatsagirltodo_fatimayamaha_song"
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
var introspecMP3s = ["67_mellowhype_song", "acidrain_chancetherapper_song", "aintgonletup_dgyola_song",
    "amongthesleep_cage_song", "becauseigothigh_afroman_song", "bookofsoul_absoul_song", "exhibitc_jayelectronica_song",
    "feelingitintheair_beaniesigel_song", "guarantees_atmosphere_song", "heatunderababyseat_lupefiasco_song",
    "hereforyou_eyedea_song", "highsandlows_kidcudi_song", "imag_lilkeke_song", "justamoment_nas_song",
    "lalala_lilwayne_song", "likeme_joeybadass_song", "lilghettoboys_drdre_song", "limos_vincestaples_song",
    "nikki_logic_song", "ratchets_joemoses_song", "reallybe_yg_song", "somanytears_2pac_song", "songcry_jayz_song",
    "sunday_earlsweatshirt_song", "thewaters_mickjenkins_song", "thisismylife_slimthug_song", "thuggin_jay305_song",
    "tivstip_ti_song", "u_kendricklamar_song", "wetdreamz_jcole_song", "whatsthatsmell_bg_song",
    "whenthegundraws_pharoahemonch_song", "wordsineversaid_lasers_song", "youreeverything_bunb_song"
];
var introspecCaptions = ["67, Mellowhype", "Acid Rain, Chance the Rapper", "Aint Gon Let Up, DG Yola", "Among the Sleep, Cage",
    "Because I Got High, Afroman", "Book of Soul, Ab-Soul", "Exhibit C, Jay Electronica", "Feel It In The Air, Beanie Sigel",
    "Guarantees, Atmosphere", "Heat Under a Baby Seat, Lupe Fiasco", "Here For You, Eyedea", "Highs and Lows, Kid Cudi", "Im a G, Lil Keke",
    "Just a Moment, Nas", "La La La, Lil Wayne", "Like Me, Joey Bada$$", "Lil Ghetto Boys, Dr. Dre", "Limos, Vince Staples", "Nikki, Logic",
    "Ratchets, Joe Moses", "Really Be, YG", "So Many Tears, 2pac", "Song Cry, Jay Z", "Sunday, Earl Sweatshirt",
    "The Water[s], Mick Jenkins", "This is My Life, Slim Thug", "Thuggin, Jay 305", "T.I. Vs. T.I.P., T.I.", "u, Kendrick Lamar",
    "Wet Dreamz, J. Cole", "Whats That Smell, B.G.", "When The Gun Draws, Pharaoahe Monch", "Words I Never Said, Lupe Fiasco",
    "Youre Everything, Bun B"
];

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

var summer = [];
var summerAlbumCovers = ["bedpeace_jheneaiko.png", "californiadreamin_themamaandpapas.jpg", "cinema_skrillex.jpg",
    "daydreamin_lupefiasco.jpg", "dointime_sublime.jpg", "goodtime_crystalcastles.png", "heyma_camron.jpg", "iwantyou_bestcoast.jpg",
    "loveandhappiness_algreen.jpg", "misirlou_dickdale.jpg", "mobbininmyoldschool_lilbruce.jpg", "playnogames_liljon.jpg",
    "roasted_currensy.jpg", "silversoul_beachhouse.png", "simplybeautiful_algreen.jpg", "stylo_gorillaz.jpg", "sunshine_atmosphere.jpg",
    "swisha_ratatat.png", "thattree_snoopdogg.jpg", "thegirls_calvinharris.png", "thisistheshack_warreng.jpg", "tonight_lykkeli.jpeg",
    "tropicana_ratatat.png", "walkinthepark_beachhouse.png", "weekendwars_mgmt.jpg", "wildfire_sbtrkt.jpg"
];
var summerMP3s = ["bedpeace_jheneaiko_song", "californiadreamin_themamaandpapas_song", "cinema_skrillex_song",
    "daydreamin_lupefiasco_song", "dointime_sublime_song", "goodtime_crystalcastles_song", "heyma_camron_song",
    "iwantyou_bestcoast_song", "loveandhappiness_algreen_song", "misirlou_dickdale_song",
    "mobbininmyoldschool_lilbruce_song", "playnogames_liljon_song", "roasted_currensy_song", "silversoul_beachhouse_song",
    "simplybeautiful_algreen_song", "stylo_gorillaz_song", "sunshine_atmosphere_song", "swisha_ratatat_song",
    "thattree_snoopdogg_song", "thegirls_calvinharris_song", "thisistheshack_warreng_song", "tonight_lykkeli_song",
    "tropicana_ratatat_song", "walkinthepark_beachhouse_song", "weekendwars_mgmt_song", "wildfire_sbtrkt_song"
];
var summerCaptions = ["Bed Peace, Jhene Aiko", "California Dreaming, The Mamas and Papas", "Cinema, Skrillex", "Daydreamin, Lupe Fiasco",
    "Doin Time, Sublime", "Good Time, Crystal Castles", "Hey Ma, Camron", "I Want You, Best Coast", "Love and Happiness, Al Green",
    "Misirlou, Dick Dale", "Mobbin In My Old School, Lil Bruce", "Play No Games, Lil Jon", "Roasted, Curren$y", "Silver Soul, Beach House",
    "Simply Beautiful, Al Green", "Stylo, Gorillaz", "Sunshine, Atmosphere", "Swisha, Ratatat", "That Tree, Snoop Dogg",
    "The Girls, Calvin Harris", "This is the Shack, Warren G", "Tonight, Lykke Li", "Tropicana, Ratatat", "Walk in the Park, Beach House",
    "Weekend Wars, MGMT", "Wildfire, SBTRKT"
];
generateListTheme(cruising, cruisingAlbumCovers, cruisingMP3s, cruisingCaptions, 'cruising');
generateListTheme(introspec, introspecAlbumCovers, introspecMP3s, introspecCaptions, 'introspectivehiphop');
generateListTheme(night, nightAlbumCovers, nightMP3s, nightCaptions, 'night');
generateListTheme(summer, summerAlbumCovers, summerMP3s, summerCaptions, 'summer');
//addWrappers(cruising);
//addWrappers(introspec);
addWrappers(night);
//addWrappers(summer);

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
    debugger;
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
