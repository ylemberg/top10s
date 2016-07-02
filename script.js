//Object where all music data is stored
var data = {};
initData(data);

//Event listeners for theme buttons
var btn_cruising = document.querySelector("#cruising");
var btn_ihh = document.querySelector("#introspectivehiphop");
var btn_night = document.querySelector("#night");
var btn_summer = document.querySelector("#summer");

btn_cruising.addEventListener("click", function() {
    addWrappers(data.cruising);
});
btn_ihh.addEventListener("click", function() {
    addWrappers(data.introspec);
});
btn_night.addEventListener("click", function() {
    addWrappers(data.night);
});
btn_summer.addEventListener("click", function() {
    addWrappers(data.summer);
});

/*
* Create object with theme images/mp3s/captions
*/
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

function initData(dat) {
    dat.initialCrsl = true;
    initCruising(dat);
    initIntrospec(dat);
    initNight(dat);
    initSummer(dat);
}

function initCruising(da) {
    da.cruising = [];
    var cruisingTxt = readTextFile("cruising.txt");
    var cruisingInfo = themeInfo(cruisingTxt);
    generateListTheme(da.cruising, cruisingInfo[0], cruisingInfo[1], cruisingInfo[2], 'cruising');
}

function initIntrospec(da) {
    da.introspec = [];
    var introspecTxt = readTextFile("introspec.txt");
    var introspecInfo = themeInfo(introspecTxt);
    generateListTheme(da.introspec, introspecInfo[0], introspecInfo[1], introspecInfo[2], 'introspectivehiphop');
}

function initNight(da) {
    da.night = [];
    var nightTxt = readTextFile("night.txt");
    var nightInfo = themeInfo(nightTxt);
    generateListTheme(da.night, nightInfo[0], nightInfo[1], nightInfo[2], 'night');
}

function initSummer(da) {
    da.summer = [];
    var summerTxt = readTextFile("summer.txt");
    var summerInfo = themeInfo(summerTxt);
    generateListTheme(da.summer, summerInfo[0], summerInfo[1], summerInfo[2], 'summer');
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
        document.getElementById(data.inView).style = "background-color:#FFFFFF; color: #000000";
    }
    data.inView = theme[0].name;
}

/*
* Read .txt file
*/
function readTextFile(file) {
    var txt = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                txt += rawFile.responseText;
            }
        }
    };
    rawFile.send(null);
    return txt;
}

/*
* Generate theme info from the .txt file
*/
function themeInfo(txt) {
    txt = txt.replace(/ /g, "");
    var albCovers_bgn = txt.indexOf(":") + 1;
    var albCovers_end = txt.substr(albCovers_bgn, txt.indexOf("MP3S")).lastIndexOf(".jpg") + 4;
    var albumCovers = txt.slice(albCovers_bgn, albCovers_bgn + albCovers_end).split(",");
    txt = txt.substr(albCovers_end, txt.length);
    var mp3s_bgn = txt.indexOf(":") + 1;
    var mp3s_end = txt.substr(mp3s_bgn, txt.indexOf("Captions")).lastIndexOf("song") + 4;
    var mp3s = txt.slice(mp3s_bgn, mp3s_bgn + mp3s_end).split(",");

    txt = txt.substr(mp3s_end, txt.length);
    var cptns_bgn = txt.indexOf(":") + 1;
    var captions = txt.slice(cptns_bgn, txt.length).split(",");
    return [albumCovers, mp3s, captions];
}
