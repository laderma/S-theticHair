(function () {
    // Set cookie if tracking parameter was found in the called url
    if (document.URL.indexOf("kennstDuEinenSemTracking=active") != -1) {
        var expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = "kennstDuEinenSemTracking=1;expires=" + expirationTime.toGMTString() + ";path=/";
    }
    // Cookie found, try to replace the content a the requested elements
    if (document.cookie.indexOf("kennstDuEinenSemTracking=1") != -1) {
        $('.tracking1').html('0221 – 96887935');
        $('.tracking2').html('0211 - 94629230');
        $('.tracking3').html('0711 - 20529676');
    }
})();