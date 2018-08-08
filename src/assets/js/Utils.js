export function getUtils() {
    return {
        jstest:function(){
       alert(44444)
        },
        /*
         *@property {[function]} [trimToNull] [Trim to null]
         *@param {[Object]} [val] [String]
         */
        trimToNull: function(val) {
            if (val === "" || val === "null" || typeof val === "undefined")
                return null;
            else
                return val;
        },
        /*
         *@property {[function]} [trimToBlank] [Trim to blank]
         *@param {[Object]} [val] [String]
         */
        trimToBlank: function(val) {
            if (val === null || val === "null" || typeof val === "undefined")
                return "";
            else
                return val;
        },
        /*
         *@property {[function]} [getJSON] [Load json from url]
         *@param {[Object]} [url] [String]
         *@param {[Object]} [callback] [function]
         *@param {[Object]} [errorfn] [function]
         */
        getJSON: function(url, callback, errorfn) {
            $.getJSON(url, function(data) {
                if (callback) {
                    callback(data);
                }
            }).fail(function() {
                if (errorfn) {
                    errorfn();
                }
            });
        },
        /*
         *@property {[function]} [getCookie] [Get cookie by name]
         *@param {[Object]} [name] [String]
         */
        getCookie: function(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        },
        setCookie: function(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            } else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        },
        getRandomId: function() {
            return "elm-" + Math.random().toString(36).substring(7);
        },
        getEmojiDisplay: function(value, lightVariant) {
            var className = "";
            if (value) {
                value = value.toLowerCase();
                switch (value) {
                    case "like":
                        className = "emoji-like";
                        break;
                    case "applause":
                        className = "emoji-applause";
                        break;
                    case "boo":
                        className = "emoji-boo";
                        break;
                    case "chant":
                        className = "emoji-chant";
                        break;
                    case "cheer":
                        className = "emoji-cheer";
                        break;
                    case "cheerio":
                        className = "emoji-cheerio";
                        break;
                    case "disappointed":
                        className = "emoji-disappointed";
                        break;
                    case "gloat":
                        className = "emoji-gloat";
                        break;
                    case "openmouth":
                        className = "emoji-open-mouth";
                        break;
                    case "openmouth":
                        className = "emoji-open-mouth";
                        break;
                    case "stuckouttongue":
                        className = "emoji-stuck-out-tongue";
                        break;
                    case "roar":
                        className = "emoji-roar";
                        break;
                    case "whistle":
                        className = "emoji-whistle";
                        break;
                    case "winking":
                        className = "emoji-winking";
                        break;
                    default:
                        className = "";

                }
            }
            if (className != "" && lightVariant == true) {
                className += "-lite";
            }
            return className;

        },
        getTagDisplay: function(tagArr) {
            if (tagArr) {
                var key, value;
                for (var i = 0; i < tagArr.length; i++) {
                    var splitKey = tagArr[i].indexOf("/");
                    key = tagArr[i].substr(0, splitKey);
                    value = tagArr[i].substr(splitKey + 1);
                    if (key === 'Display') {
                        return value;
                    }
                }
            }
        },
        textTruncate: function(str, numwords) {
            try {
                var strOut = str.split(/\s+/).slice(0, numwords).join(" ");
                return strOut;
            } catch (e) {
                console.log('textTruncate str not found', e);
            }

        },
        // arrFromNumber: function(num) {
        //   var arr = new Array(num)
        //     .join().split(',')
        //     .map(function(item, index) {
        //       return ++index;
        //     });
        //   return arr;
        // },
        timeAgo: function(time) {
            //TODO: need to be fixed, it l be dynamic // ar,en,.. etc
            var language = this.getLanguageFromUrl();
            var timeObj = { 'time': time, 'lang': language };
            var localObj = new MomentLocale(timeObj);
            if (language) {
                timeObj.lang = language;
            }
            switch (timeObj.lang) {
                case 'en':
                    return localObj.en();
                    break;
                case 'ar':
                    return localObj.ar();
                    break;
                case 'es':
                    return localObj.es();
                    break;
                case 'ja':
                    return localObj.ja();
                    break;
                case 'ko':
                    return localObj.ko();
                    break;
                case 'zh-cn':
                    return localObj.zh();
                    break;
                case 'fr':
                    return localObj.fr();
                    break;
                default:
                    return localObj.en();
            }
        },
        timeAgoA: function(time) {
            //TODO: need to be fixed, it l be dynamic // ar,en,.. etc
            var language = this.getLanguageFromUrl();
            var timeObj = { 'time': time, 'lang': language };
            var localObj = new MomentLocaleA(timeObj);
            if (language) {
                timeObj.lang = language;
            }
            switch (timeObj.lang) {
                case 'en':
                    return localObj.en();
                    break;
                case 'ar':
                    return localObj.ar();
                    break;
                case 'es':
                    return localObj.es();
                    break;
                case 'ja':
                    return localObj.ja();
                    break;
                case 'ko':
                    return localObj.ko();
                    break;
                case 'zh-cn':
                    return localObj.zh();
                    break;
                case 'fr':
                    return localObj.fr();
                    break;
                default:
                    return localObj.en();
            }
        },
        getDateFormat: function(time) {
            var language = this.getLanguageFromUrl();
            var timeObj = { 'time': time, 'lang': language };
            var localObj = new MomentLocale(timeObj);
            return localObj.getDateFormat(time);
        },
        getUrl: function() {
            return window.location.protocol + "//" + window.location.host + window.location.pathname;
        },
        createSearchUrl: function(searchTag) {
            var language = "en";
            try {
                if (typeof pageParameter != undefined && pageParameter && pageParameter.language)
                    language = pageParameter.language;
            } catch (e) {
                console.error("Error getting language from sitecore", e);
            }
            if (searchTag) {
                return this.createBaseUrl() + '/' + language + '/search?q=' + searchTag;
            } else {
                return this.createBaseUrl() + '/' + language + '/search';
            }

        },
        createBaseUrl: function() {
            var hostName = window.location.host;
            var protocol = window.location.protocol;
            return protocol + "//" + hostName;
        },
        createDestinationUrl: function(url) {
            //TODO: change language with dynamic value
            if (url && url != "#") {
                if (url.indexOf("http") != -1 || url.indexOf("https") != "-1" || url.indexOf("www") != "-1") {
                    return url;
                } else {
                    var language = "en";
                    return this.createBaseUrl() + (url.charAt(0) === "/" ? "" : "/") + url;
                    //return this.createBaseUrl() + "/" + language + "/" + url;
                }
            } else {
                return "#";
            }
        },
        changeEndPoint: function(url, newValue) {
            if (url) {
                var value = url.substring(url.lastIndexOf('/') + 1);
                url = url.replace(value, newValue);
                return url;
            }
            return "";
        },
        getParameterByName: function(name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },
        getEmojiValue: function(tagArr) {
            if (tagArr) {
                var key, value, emojiFlag = true;
                for (var i = 0; i < tagArr.length; i++) {
                    var splitKey = tagArr[i].indexOf("/");
                    key = tagArr[i].substr(0, splitKey);
                    value = tagArr[i].substr(splitKey + 1).toLowerCase();
                    if (key === 'Emoji') {
                        emojiFlag = false;
                        return value;
                    }
                    if (i == tagArr.length - 1) {
                        if (emojiFlag)
                            return 'like';
                    }
                }
            } else {
                return 'like';
            }
        },
        buildTableUrl: function(selectedYear, selectedLeague) {
            var language = "en";
            try {
                if (typeof pageParameter != undefined && pageParameter && pageParameter.language)
                    language = pageParameter.language;
            } catch (e) {
                console.error("Error getting language from sitecore", e);
            }
            var redirectUrl = "/" + language + "/matches";
            if (selectedYear && selectedYear != "default") {
                redirectUrl += "/" + selectedYear;
            }
            if (selectedLeague && selectedLeague != "default") {
                redirectUrl += "/" + selectedLeague;
            }
            redirectUrl += "/league-table"
            return this.createDestinationUrl(redirectUrl);
        },
        // validateSponsorTag: function(tagArr) {
        //   if (tagArr != null && tagArr != undefined && tagArr != 'undefined' && tagArr != '') {
        //     if (tagArr) {
        //       if (tagArr[0].hasOwnProperty('LightBackImage') && tagArr[0].hasOwnProperty('DarkBackImage')) {
        //         if (tagArr[0].LightBackImage.length > 0 && tagArr[0].DarkBackImage.length > 0) {
        //           return true;
        //         } else {
        //           return false;
        //         }
        //       } else {
        //         return false;
        //       }
        //     } else {
        //       return false;
        //     }
        //   } else {
        //     return false;
        //   }
        // },
        // validateDisplayTag: function(tagArr) {
        //   if (tagArr != null && tagArr != undefined && tagArr != 'undefined' && tagArr != '') {
        //     if (tagArr && tagArr.length > 0) {
        //       if (tagArr[0].hasOwnProperty('Display') && tagArr[0].hasOwnProperty('AppliedTag')) {
        //         if (tagArr[0].Display != null && tagArr[0].Display != undefined && tagArr[0].Display != 'undefined' && tagArr[0].Display != '' && tagArr[0].AppliedTag != null && tagArr[0].AppliedTag != undefined && tagArr[0].AppliedTag != 'undefined' && tagArr[0].AppliedTag != '') {
        //           return true;
        //         } else {
        //           return false;
        //         }
        //       } else {
        //         return false;
        //       }
        //     } else {
        //       return false;
        //     }
        //   } else {
        //     return false;
        //   }

        // },
        validateTime: function(time) {
            if (time != null && time != undefined && time != 'undefined' && time != '') {
                return true;
            } else {
                return false;
            }
        },
        // TODO:- used for styleguide specific code only
        isLocal: function() {
            var host = window.location.hostname;
            if (host && (host === "cms-dev1.mufcplatform.in" || host === "localhost" || host === "cm-dev.mufcplatform.in")) {
                return true;
            }
            return false;
        },
        replaceAll: function(target, search, replacement) {

            return target.replace(new RegExp(search, 'g'), replacement);
        },
        validateObj: function(obj) {
            if (typeof obj != undefined && typeof obj != 'undefined' && obj != null) {
                return true;
            } else {
                return false;
            }
        },
        initMuCrausal: function(selector, cObj) {
            var slider = $(selector).bxSlider({
                minSlides: cObj.minSlides,
                hideControlOnEnd: true,
                hidePagerOnSinglePage: true,
                maxSlides: cObj.maxSlides,
                slideWidth: cObj.slideWidth,
                slideMargin: cObj.slideMargin,
                pager: cObj.pager,
                controls: cObj.controls,
                auto: cObj.auto,
                onSliderLoad: cObj.load,
                onSlideBefore: cObj.before,
                infiniteLoop: cObj.loop,
                moveSlides: cObj.moveSlides,
                useCSS: cObj.useCSS,
                startSlide: cObj.startSlide
            });
            return slider;
        },
        getSponsObject: function(data) {
            var sponsorObj;
            if (data.hasOwnProperty('SponsorResponse')) {
                if (data.SponsorResponse.hasOwnProperty('response')) {
                    if (data.SponsorResponse.response.hasOwnProperty('docs') && data.SponsorResponse.response.docs.length) {
                        sponsorObj = {};
                        var sponsorDocs = data.SponsorResponse.response.docs;
                        for (var i = 0; i < sponsorDocs.length; i++) {
                            if (sponsorDocs[i] && sponsorDocs[i].sponsordetails_s) {
                                for (var sponsorKey in sponsorDocs[i].sponsordetails_s) {
                                    sponsorObj[sponsorKey] = sponsorDocs[i].sponsordetails_s[sponsorKey];
                                }
                            }
                        }
                    }
                }
            }
            return sponsorObj;
        },
        getLanguageFromUrl: function() {
            var url = window.location.href;
            var defLang = "en";
            if (url && url.indexOf("/") != -1) {
                var supportedLang = ["en", "ar", "es", "ja", "ko", "zh", "fr"];
                var splittedArr = url.split("/");
                var lang = splittedArr[3];
                if (lang && supportedLang.indexOf(lang) != -1) {
                    defLang = lang;
                } else if (typeof pageParameter != "undefined" && typeof pageParameter != undefined && pageParameter && pageParameter.language && supportedLang.indexOf(pageParameter.language) != -1) {
                    lang = pageParameter.language;
                    defLang = lang;
                }
                if (defLang === "zh") {
                    defLang = "zh-cn";
                }
            }
            return defLang;
        },
        updateGeoInServices: function(url, geo) {
            if (geo) {
                geo = geo.toLowerCase();
            }
            if (url) {
                var splittedArr = url.split("/");
                splittedArr[6] = geo;
                url = splittedArr.join("/");
            }

            return url;
        },
        replacePX: function(value) {
            if (value && typeof value === 'string' && value.indexOf("px") != -1) {
                return parseInt(value.replace("px", ""));
            }
            return value;
        },
        replaceSpace: function(value, splitChar) {
            if (splitChar === undefined)
                splitChar = "-";
            return value.replace(/\s+/g, splitChar).toLowerCase();;
        },
        initEmojiEffect: function(element, isLight) {
            var $modules = $(element).find('[data-module=emoji]');
            if ($modules != undefined && $modules.length > 0) {
                $modules.filter('[data-module="emoji"]').each(function() {
                    new Animojis($(this)[0], isLight);
                });
            }
        },
        elementInViewport: function(el) {
            var offset = 300; //this.offset;
            var rect = el.getBoundingClientRect();
            return (rect.top >= 0 && rect.left >= 0 && (rect.top - offset) <= (window.innerHeight || document.documentElement.clientHeight));
        },
        processImgOnScroll: function() {
            var _selfObj = this;
            var $modules = $('[data-module]');
            try {
                $modules.filter('[data-module="adaptive"]').each(function() {
                    if ($(this).css('background-image') == 'none') {
                        var imgElm = $(this)[0];
                        if (_selfObj.elementInViewport(imgElm)) {
                            this.el = this;
                            this.imgSrc = $(this.el).data('imgurl');
                            if (this.imgSrc) {
                                this.elImg = $(this.el).find('[data-module="visually-hidden"]');
                                $(this.el).css('background-image', 'url("' + this.imgSrc + '")');
                                $(this.elImg).attr('src', this.imgSrc);
                            }

                        }
                    }
                });
            } catch (e) {
                console.log('image not found');
            }

        },
        updateAdaptiveImg: function() {
            var _selfObj = this;
            $(window).on('scrollstop', function() {
                _selfObj.processImgOnScroll();
            });
            _selfObj.offset = 300;
            _selfObj.processImgOnScroll();
        },
        updateFilterSymbols: function(value) {
            if (value) {
                if (value.indexOf("/") != -1) {
                    value = this.replaceAll(value, "/", "%2F");
                }
                if (value.indexOf(",") != -1) {
                    value = this.replaceAll(value, ",", "_");
                }
                if (value.indexOf("%2c") != -1) {
                    value = this.replaceAll(value, "%2c", "_");
                }
                if (value.indexOf("%2C") != -1) {
                    value = this.replaceAll(value, "%2C", "_");
                }
            }
            return value;
        },
        getAbbrTimeZone: function() {
            try {
                var geoCookie = this.getCookie("geo");
                // geoCookie return country_code eg. "country_code": "GB","country_name": "United Kingdom"
                var zone = new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];
                //if (zone === "GMT" || zone === "GMT+1")
                if (geoCookie && (geoCookie === 'GB' || geoCookie === 'gb'))
                    return zone === "GMT" ? zone : "BST";
                else
                    return "";
            } catch (e) {
                console.error("Error getting time zone");
                return "";
            }
            return "";
        },
        calculateSpotlightTime: function(time, seconds, period) {
            var timeObj = {
                "minute": "00",
                "injuryTime": ""
            };
            if (time && period) {
                if (period) {
                    period = period.toLowerCase();
                }
                if (time) {
                    time = +time;
                    if (seconds) {
                        seconds = +seconds;
                        if (seconds > 0) {
                            time = time + 1;
                        }
                    }
                }
                if (time < 10) {
                    time = "0" + time;
                }
                if (time > 45 && period == "firsthalf" || period == "first half") {
                    timeObj.minute = "45";
                    timeObj.injuryTime = (time - 45);
                } else if (time > 90 && period == "secondhalf" || period == "second half") {
                    timeObj.minute = "90";
                    timeObj.injuryTime = (time - 90);
                    //time = "90 +" + (time - 90);
                } else if (time > 105 && period == "extrafirsthalf") {
                    timeObj.minute = "105";
                    timeObj.injuryTime = (time - 105);
                    //time = "105 +" + (time - 105);
                } else if (time > 120 && period == "extrasecondhalf") {
                    timeObj.minute = "120";
                    timeObj.injuryTime = (time - 120);
                    //time = "120 +" + (time - 120);
                } else {
                    timeObj.minute = time;
                }
            }
            return timeObj;
        },
        updateTicketsUrl: function(url, contentValue) {
            if (url && url.indexOf("eticketing") != -1) {
                var queryStr = "int_source=Manutd.com&int_medium=Referral&int_campaign=Buy_Tickets&int_content=";
                if (url.indexOf("?") != -1) {
                    url = url + "&" + queryStr + contentValue;
                } else {
                    url = url + "?" + queryStr + contentValue;
                }
            }
            return url;
        },
        buildImgUrl: function(relativePath) {
            // Global variable [pageParameter] defined on page.
            var _self = this,
                imgType = "",
                assetsUrl = "";
            if (relativePath) {
                imgType = _self.getImgType(relativePath);

                if (imgType == 'jpeg' || imgType == 'jpg') {
                    assetsUrl = MU.AssetUrlJpeg + relativePath;
                } else {
                    assetsUrl = MU.AssetUrl + relativePath;
                }
            }

            // var assetsUrl = MU.AssetUrl + relativePath;
            return assetsUrl;
        },
        getImgType: function(url) {
            var type = url.split(".").pop();
            return type;
        },
        getSponsorObj: function(type, subtype, contentlevel) {
            // type can be contenttype,blogevents,blogevents
            // subtype ex:Footer
            // child only if subtype is Array
            // variant :1 - light variant
            // variant :2 - dark variant
            var sponsorObj;
            if (contentlevel) {
                return contentlevel;
            }
            if (typeof(Storage) !== "undefined") {
                sponsorObj = sessionStorage.getItem("sponsorObj");
                if (sponsorObj) {
                    sponsorObj = JSON.parse(sponsorObj);
                }
            } else {
                console.info("Storage not supported");
            }

            if (sponsorObj) {
                try {
                    // below code is used for convert upercase property into lowercase
                    var contObj = sponsorObj[type];
                    var sponsorObjElm;
                    subtype = (subtype + "").toLowerCase();
                    for (var p in contObj) {
                        if (contObj.hasOwnProperty(p) && subtype == (p + "").toLowerCase()) {
                            sponsorObjElm = contObj[p];
                            break;
                        }
                    }
                    if (sponsorObjElm) {
                        return sponsorObjElm;
                    }
                    //return sponsorObj[type][subtype];
                } catch (e) {
                    console.error("error getting sponsor", e);
                }
            }

        },
        I18nConstant: function(I18n, scope) {
            var I18nStatsCons = {};
            var I18nStats = I18n.stats,
                I18nStatsAccessibility = I18nStats.accessibility;
            I18nStatsCons.vs = I18nStats.vs;
            I18nStatsCons.percentage = I18nStats.percentage;
            I18nStatsCons.cardtitle = I18nStatsAccessibility.cardtitle;
            I18nStatsCons.by = I18nStatsAccessibility.by;
            I18nStatsCons.Publishedtime = I18nStatsAccessibility.Publishedtime;
            I18nStatsCons.jerseyno = I18nStatsAccessibility.jerseyno;
            I18nStatsCons.Minutesofmatch = I18nStatsAccessibility.Minutesofmatch;
            I18nStatsCons.Versus = I18nStatsAccessibility.Versus;
            I18nStatsCons.from = I18nStatsAccessibility.from;
            I18nStatsCons.againstopponent = I18nStatsAccessibility.againstopponent;
            if (I18nStatsCons) {
                scope.I18nStatsCons = I18nStatsCons;
            }
        },
        accessibilitySpotlight: function(i18n, scope) {
            var spotLightConstants = {};
            spotLightConstants.spotlightCard = i18n.spotlight.accessibility.spotlightCard;
            spotLightConstants.goaldoneby = i18n.spotlight.accessibility.goaldoneby;
            spotLightConstants.penaltyshots = i18n.spotlight.accessibility.penaltyshots;
            spotLightConstants.activitydoneby = i18n.spotlight.accessibility.activitydoneby;
            spotLightConstants.timeago = i18n.spotlight.accessibility.timeago;
            spotLightConstants.cardrecivedby = i18n.spotlight.accessibility.cardrecivedby;
            spotLightConstants.vs = i18n.spotlight.accessibility.vs;
            spotLightConstants.timeRemaining = i18n.spotlight.accessibility.timeRemaining;
            spotLightConstants.hrsTime = i18n.spotlight.accessibility.hrs;
            spotLightConstants.minsTime = i18n.spotlight.accessibility.mins;
            spotLightConstants.timeElapsed = i18n.spotlight.accessibility.timeElapsed;
            spotLightConstants.outOf = i18n.spotlight.accessibility.outOf;
            spotLightConstants.and = i18n.spotlight.accessibility.and;
            spotLightConstants.aggscoreof = i18n.spotlight.accessibility.aggscoreof;
            if (spotLightConstants) {
                scope.spotlightAccessConst = spotLightConstants;
            }
        },
        visibilityHandler: function(visivilityFlag) {
            // Set the name of the "hidden" property and the change event for visibility
            var hidden, visibilityChange;
            if (typeof document.hidden !== "undefined") {
                hidden = "hidden";
                visibilityChange = "visibilitychange";
            } else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
                hidden = "mozHidden";
                visibilityChange = "mozvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
                hidden = "webkitHidden";
                visibilityChange = "webkitvisibilitychange";
            }

            // If the page is hidden, pause the video;
            // if the page is shown, play the video
            function handleVisibilityChange() {
                if (document[hidden]) {
                    visivilityFlag = false;
                    console.log('document is hidden');
                } else {
                    visivilityFlag = true;
                    console.log('document is visible');
                }
            }

            // Warn if the browser doesn't support addEventListener or the Page Visibility API
            if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
                console.log("This browser not supports the Page Visibility API.");
                visivilityFlag = true;
            } else {
                // Handle page visibility change   
                document.addEventListener(visibilityChange, handleVisibilityChange, false);
            }
            return visivilityFlag;
        },
        objectCompare: function(oldObj, newObj, keyCompaire) {
            return _.differenceBy(newObj, oldObj, keyCompaire);
        },
        getSponsorObjModule: function(module, submodule, filter) {

            var sponsorObj;

            if (typeof(Storage) !== "undefined") {
                sponsorObj = sessionStorage.getItem("sponsorObj");

                if (sponsorObj) {
                    sponsorObj = JSON.parse(sponsorObj);
                }
            } else {
                console.info("Storage not supported");
            }

            if (sponsorObj) {
                try {
                    // below code is used for convert upercase property into lowercase
                    var contObj = sponsorObj[module];
                    var sponsorObjElm;
                    submodule = (submodule + "").toLowerCase();
                    for (var p in contObj) {
                        if (contObj.hasOwnProperty(p) && submodule == (p + "").toLowerCase()) {
                            sponsorObjElm = contObj[p];
                            break;
                        }
                    }
                    //if (sponsorObj[module].hasOwnProperty(submodule)) {
                    if (sponsorObjElm) {
                        return sponsorObjElm.length > 0 ? sponsorObjElm[0] : sponsorObjElm; //sponsorObj[module][submodule][0];
                    } else if (filter) {
                        var filterValue = $('header').find("li.selected-nav a").text();
                        if (filterValue) {
                            filterValue = $.trim(filterValue);
                        }
                        return this.getSponsorFilter(submodule, filterValue, sponsorObj);
                    } else {
                        //console.error("error getting sponsor from filter element");
                    }

                } catch (e) {

                }
            }

        },
        getSponsorObjModuleSearch: function(module, submodule, filter) {

            var sponsorObj;

            if (typeof(Storage) !== "undefined") {
                sponsorObj = sessionStorage.getItem("sponsorObj");

                if (sponsorObj) {
                    sponsorObj = JSON.parse(sponsorObj);
                }
            } else {
                console.info("Storage not supported");
            }

            if (sponsorObj) {
                try {
                    // below code is used for convert upercase property into lowercase
                    var contObj = sponsorObj[module];
                    var sponsorObjElm;
                    submodule = (submodule + "").toLowerCase();
                    for (var p in contObj) {
                        if (contObj.hasOwnProperty(p) && submodule == (p + "").toLowerCase()) {
                            sponsorObjElm = contObj[p];
                            break;
                        }
                    }
                    if (sponsorObjElm) {
                        return sponsorObjElm.length > 0 ? sponsorObjElm[0] : sponsorObjElm;
                    }

                    //return sponsorObj[module][submodule][0];
                } catch (e) {
                    if (filter) {
                        var filterValue = $('header').find("li.selected-nav a").text();
                        if (filterValue) {
                            filterValue = $.trim(filterValue);
                        }
                        return this.getSponsorFilter(submodule, filterValue, sponsorObj);
                    } else {
                        console.error("error getting sponsor", e);
                    }
                }
            }

        },
        getSponsorFilter: function(screenname, filter, sponsorObj) {
            try {
                if (screenname && filter) {
                    screenname = screenname.toLowerCase();
                    filter = filter.toLowerCase();
                    switch (screenname) {
                        case "newspage":
                            screenname = "news";
                            break;
                        default:
                            console.error("Invalid screen name");
                    }
                    var key = screenname + "#" + filter;
                    return sponsorObj["filters"][key];
                }
                console.error("screen and filter is required");
            } catch (e) {
                console.error("Error getting filter sponsor ", e);
            }
        },
        findValueByKey: function(data, key) {

            try {
                return _.find(data, ['key', key]);
            } catch (e) {
                console.log('filter not found in ', e);
                return 'all'
            }
        },
        showLoader: function() {
            $('.loader-wrapper').show();
        },
        hideLoader: function() {
            $('.loader-wrapper').hide();
        },
        isImageIntoView: function(elem) {
            var scrollTop = $(window).scrollTop();
            var docTopView = scrollTop == 0 ? scrollTop : scrollTop + $(window).innerHeight() / 2,
                docBottomView = docTopView + $(window).height(),
                elemTop = $(elem).offset().top,
                elemBottom = elemTop + $(elem).height();
            // return ((elemTop <= docBottomView) && (elemTop >= docTopView));
            return (((elemBottom >= docTopView) && (elemTop <= docBottomView)) || ((elemBottom <= docBottomView) && (elemTop >= docTopView)));
        },
        getDictionary: function() {
            var dictionary;
            if (typeof clientDictionary != undefined && typeof clientDictionary != 'undefined') {
                try {
                    var stringDictObject = this.replaceAll(clientDictionary, "&quot;", '"');
                    stringDictObject = stringDictObject.replace(/&#(\d+);/g, function(match, dec) {
                        return String.fromCharCode(dec);
                    });
                    if (stringDictObject) {
                        dictionary = JSON.parse(stringDictObject);
                    }
                } catch (e) {
                    console.error("Error parsing dictionary");
                    return {};

                }
            }
            return dictionary;
        },
        getPeriodForAccessibility: function(period) {
            var fullName = "";
            switch (period) {
                case "PreMatch":
                    fullName = "Pre Match"
                    break;
                case "FullTime":
                case "FullTime90":
                case "FT":
                    fullName = "Full Time"
                    break;
                case "HalfTime":
                    fullName = "Half Time"
                    break;

                case "FirstHalf":
                    fullName = "First Half"
                    break;

                case "SecondHalf":
                    fullName = "Second Half"
                    break;

                case "ExtraHalfTime":
                    fullName = "Extra Half Time"
                    break;

                case "ShootOut", "FullTimePens", "FullTimeAET", "ExtraFullTime":
                    fullName = "Extra Full Time"
                    break;

                default:
                    fullName = "";
            }
            return fullName;
        },
        getAssetUrlJpeg: function() {
            if (typeof MU != undefined && typeof MU != 'undefined') {
                if (MU.hasOwnProperty('AssetUrlJpeg')) {
                    return MU.AssetUrlJpeg;
                } else {
                    return '';
                }
            } else {
                return '';
            }
        },
        isElementInViewPort: function(elm) {
            var x = 1;
            var y = 1;
            var win = $(window);
            var viewport = {
                top: win.scrollTop(),
                left: win.scrollLeft()
            };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            var height = elm.outerHeight();
            var width = elm.outerWidth();
            if (!width || !height) {
                return false;
            }
            var bounds = elm.offset();
            bounds.right = bounds.left + width;
            bounds.bottom = bounds.top + height;
            var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
            if (!visible) {
                return false;
            }
            var deltas = {
                top: Math.min(1, (bounds.bottom - viewport.top) / height),
                bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
                left: Math.min(1, (bounds.right - viewport.left) / width),
                right: Math.min(1, (viewport.right - bounds.left) / width)
            };
            return deltas;
            //return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
        },
        getLineupDest: function(destUrl) {
            var language = "en";
            try {
                if (typeof pageParameter != undefined && pageParameter && pageParameter.language)
                    language = pageParameter.language;

            } catch (e) {
                console.error("Error getting language from sitecore", e);
            }
            return this.createBaseUrl() + '/' + language + destUrl;
        },
        secondaryServiceUrl: function() {
            var url;
            if (typeof MU != undefined && typeof MU != 'undefined') {
                var language = $("html").attr("lang");
                MU.AwsAPIVersion = "v1";
                if (MU && MU.AwsEndPoint && language && MU.AwsAPIVersion) {
                    url = MU.AwsEndPoint + "/" + MU.AwsAPIVersion + "/" + language;
                }
            }
            return url;
        },
        checkCachedStatus: function(status) {
            var allowedStatus = [429, 500, 502, 503, 504];
            if (allowedStatus.indexOf(status) >= 0) {
                return true;
            }
            return false;
        },
        getBuildRevision: function() {
            if (typeof buildrevision != undefined && typeof buildrevision != 'undefined') {
                return "?v=" + buildrevision;
            } else {
                return "?v=" + new Date();
            }
        },
        stopBgScrollAtEnd: function(el) {
            if (el) {
                $(el).off('mousewheel.noEndScrollable').on('mousewheel.noEndScrollable', function(e) {
                    var e0 = e.originalEvent;
                    var delta = e0.wheelDelta || -e0.detail;
                    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                    e.preventDefault();
                });
            }
        },
        updateAtag: function(arrString, i, str) {
            if (i < arrString.length && str) {
                var startTag = arrString[i].startTag;
                var endTag = arrString[i].endTag;
                str = str.replace(new RegExp('a_tag'), startTag);
                str = str.replace(new RegExp('a_tag'), endTag);
                i++;
                return this.updateAtag(arrString, i, str);
            } else {
                return str;
            }
        },
        updateNtag: function(arrString, i, str) {
            if (i < arrString.length && str) {
                str = str.replace(new RegExp('n_tag'), arrString[i]);
                i++;
                return this.updateNtag(arrString, i, str);
            } else {
                return str;
            }
        }
    }
}

export function test(){
    alert(111);
}
