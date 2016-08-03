var SM = (function () {

    var my = {};

    my.get = function (key) {
        return localStorage.getItem(key);
    }

    ...

    return my;

}());

var GB = (function (SM) {
    var my = {};

    my.blockTheseSites = {
        "facebook.com       : "facebook",
        "teenvogue.com"      : "SciFi Blog",
        "gmail.com"       : "Gadget Blog",
        ...
    }

    if (!SM.get("blocklist")) {
        SM.put("blocklist", JSON.stringify(my.blockTheseSites));
    }

    my.getBlockedSites = function () {
        return JSON.parse(SM.get("blocklist"));
    }

    my.setWatchThisInstead = function (value) {
        ...
    }

    my.getWatchThisInstead = function () {
        return SM.get("instead");        
    }

    my.addBlockedSite = function (site) {
        my.blockedSites = JSON.parse(SM.get("blocklist"));
        my.blockedSites[site] = "Custom Add";
        SM.put("blocklist", JSON.stringify(my.blockedSites));
    }

    my.removeBlockedSite = function (site) {
        my.blockedSites = JSON.parse(SM.get("blocklist"));
        delete my.blockedSites[site];
        SM.put("blocklist", JSON.stringify(my.blockedSites));
    }

    return my;
}(SM));
 
 