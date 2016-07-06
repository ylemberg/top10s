class Theme {

    constructor() {
        this.data = {};
        this.initData();
    }

    /*
     * Create object with theme images/mp3s/captions
     */
    generateListTheme(theme, albumcovers, mp3s, captions, name) {
        for (var iDx = 0; iDx < albumcovers.length; iDx++) {
            var themeObj = {
                "albumcover": albumcovers[iDx],
                "mp3": mp3s[iDx],
                "caption": captions[iDx],
                "name": name
            };
            theme.push(themeObj);
        }
    }

    initData() {
        this.initialCrsl = true;
        this.initCruising();
        this.initIntrospec();
        this.initNight();
        this.initSummer();
    }

    initCruising() {
        //Array of objects in which each object has an album cover, mp3, caption, and name
        this.cruising = [];
        var cruisingTxt = this.readTextFile("txt/cruising.txt");
        var cruisingInfo = this.themeInfo(cruisingTxt);
        this.generateListTheme(this.cruising, cruisingInfo[0], cruisingInfo[1], cruisingInfo[2], 'cruising');
    }

    initIntrospec() {
        //Array of objects in which each object has an album cover, mp3, caption, and name
        this.introspec = [];
        var introspecTxt = this.readTextFile("txt/introspec.txt");
        var introspecInfo = this.themeInfo(introspecTxt);
        this.generateListTheme(this.introspec, introspecInfo[0], introspecInfo[1], introspecInfo[2], 'introspectivehiphop');
    }

    initNight() {
        //Array of objects in which each object has an album cover, mp3, caption, and name
        this.night = [];
        var nightTxt = this.readTextFile("txt/night.txt");
        var nightInfo = this.themeInfo(nightTxt);
        this.generateListTheme(this.night, nightInfo[0], nightInfo[1], nightInfo[2], 'night');
    }

    initSummer() {
        //Array of objects in which each object has an album cover, mp3, caption, and name
        this.summer = [];
        var summerTxt = this.readTextFile("txt/summer.txt");
        var summerInfo = this.themeInfo(summerTxt);
        this.generateListTheme(this.summer, summerInfo[0], summerInfo[1], summerInfo[2], 'summer');
    }

    /*
     * Read .txt file
     */
    readTextFile(file) {
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
    themeInfo(txt) {
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
}
