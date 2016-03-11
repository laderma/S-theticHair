$(document).ready(function () {

    $('.choose-location-trigger').on('click', function () {
        $('.window-overlay').fadeIn('slow');
        $('.choose-location-grid').fadeIn('slow');
        $('.choose-location-grid').center();
    })

    $('.close-location-window').on('click', function () {
        $('.window-overlay').fadeOut();
    })

    var hamburg = 'Alsterarkaden 20<br> 20354 Hamburg<br>Tel. <span class="">040 /  703 833 83</span><br><br>';
    var duesseldorf = 'Königsallee 15<br> 40212 Düsseldorf <br>Tel. <span class="tracking2">0211 / 30 04 95 70</span><br><br>';
    var koeln = 'Gladbacher Str. 44<br> 50672 Köln<br>Tel. <span class="tracking1">0221 / 92 28 85 36</span><br><br>';
    var frankfurt = 'Mainzer Landstraße 65<br>60329 Frankfurt am Main<br>Tel. <span class="">069 /  247 488 921 53</span><br><br>';
    var mannheim = 'Fronhofallee 1<br>67098 Bad Dürkheim<br>Tel. <span class="">06322 / 95 83 76 20</span><br><br>';
    var stuttgart = 'Königstraße 4<br> 70173 Stuttgart<br>Tel. <span class="tracking3">0711 / 220 298 25</span><br><br>';
    var muenchen = 'Sendlinger Tor Platz 7<br> 80336 München<br>Tel. <span class="">089 / 590 682 18</span><br><br>';
    var nuernberg = 'Karolinenstrasse 23<br> 90402 Nürnberg<br>Tel. <span class="">0911 / 992 882 94</span><br><br>';
    var berlin = 'Sendlinger Tor Platz 7<br> 80336 München<br>Tel. <span class="">089 / 590 682 18</span><br><br>';

    //Check Cookies
    if (Cookies.get('hamburg') == 1) {
        
        $('.tel-link-content').html('<span class=""> 040 /  703 833 83</span>');
        $('.mobile-bottom-row-text').html('<span class=""> 040 /  703 833 83</span>');
        
    } else if (Cookies.get('duesseldorf') == 1) {
        
        $('.tel-link-content').html('<span class="tracking2">0211 / 30 04 95 70</span>');
        $('.mobile-bottom-row-text').html('<span class="tracking2">0211 / 30 04 95 70</span>');

        if (document.cookie.indexOf("kennstDuEinenSemTracking=1") != -1) {
            $('.tracking1').html('0221 – 96887935');
            $('.tracking2').html('0211 - 94629230');
            $('.tracking3').html('0711 - 20529676');
        }

    } else if (Cookies.get('koeln') == 1) {
        
        $('.tel-link-content').html('<span class="tracking1">0221 / 92 28 85 36</span>');
        $('.mobile-bottom-row-text').html('<span class="tracking1">0221 / 92 28 85 36</span>');

        if (document.cookie.indexOf("kennstDuEinenSemTracking=1") != -1) {
            $('.tracking1').html('0221 – 96887935');
            $('.tracking2').html('0211 - 94629230');
            $('.tracking3').html('0711 - 20529676');
        }
        
    } else if (Cookies.get('frankfurt') == 1) {
        
        $('.tel-link-content').html('<span class="">069 /  247 488 921 53</span>');
        $('.mobile-bottom-row-text').html('<span class="">069 /  247 488 921 53</span>');
        
    } else if (Cookies.get('mannheim') == 1) {
        
        $('.tel-link-content').html('<span class="">06322 / 95 83 76 20</span>');
        $('.mobile-bottom-row-text').html('<span class="">06322 / 95 83 76 20</span>');
        
    } else if (Cookies.get('stuttgart') == 1) {
        
        $('.tel-link-content').html('<span class="tracking3">0711 / 220 298 25</span>');
        $('.mobile-bottom-row-text').html('<span class="tracking3">0711 / 220 298 25</span>');
        
        if (document.cookie.indexOf("kennstDuEinenSemTracking=1") != -1) {
            $('.tracking1').html('0221 – 96887935');
            $('.tracking2').html('0211 - 94629230');
            $('.tracking3').html('0711 - 20529676');
        }
        
    } else if (Cookies.get('muenchen') == 1) {
        
        $('.tel-link-content').html('<span class="">089 / 590 682 18</span>');
        $('.mobile-bottom-row-text').html('<span class="">089 / 590 682 18</span>');
        
    } else if (Cookies.get('nuernberg') == 1) {
        
        $('.tel-link-content').html('<span class="">0911 / 992 882 94</span>');
        $('.mobile-bottom-row-text').html('<span class="">0911 / 992 882 94</span>');
        
    } else {
        
        $('tel-link').html('Standort wählen');
    }

    //Hamburg
    $('.choose-hamburg').on('click', function () {

        $('.location-name').hide().html('<img src="/static/img/icons/s-thetic.png" class="sthetic-icon" />S-thetic Hamburg').fadeIn(1500).addClass('location-name-style');

        $('.location-data').hide().html(hamburg).fadeIn(1500);

        $('.tel-link-content').hide().html('<span class="">040 /  703 833 83</span>').fadeIn();

        $('.location-form').fadeIn(1500);


        Cookies.remove('duesseldorf');
        Cookies.remove('koeln');
        Cookies.remove('frankfurt');
        Cookies.remove('mannheim');
        Cookies.remove('stuttgart');
        Cookies.remove('muenchen');

        Cookies.set('hamburg', '1', {
            expires: 7,
        });

    });

    //Duesseldorf
    $('.choose-duesseldorf').on('click', function () {

        $('.location-name').hide().html('<img src="/static/img/icons/s-thetic.png" class="sthetic-icon" />S-thetic Düsseldorf').fadeIn(1500).addClass('location-name-style');

        $('.location-data').hide().html(duesseldorf).fadeIn(1500);

        $('.tel-link-content').hide().html('<span class="tracking2">0211 / 30 04 95 70</span>').fadeIn(1500);

        if (document.cookie.indexOf("kennstDuEinenSemTracking=1") != -1) {
            $('.tracking1').html('0221 – 96887935');
            $('.tracking2').html('0211 - 94629230');
            $('.tracking3').html('0711 - 20529676');
        }

        $('.location-form').fadeIn(1500);


        Cookies.remove('hamburg');
        Cookies.remove('koeln');
        Cookies.remove('frankfurt');
        Cookies.remove('mannheim');
        Cookies.remove('stuttgart');
        Cookies.remove('muenchen');

        Cookies.set('duesseldorf', '1', {
            expires: 7,
        });

    });

    //Köln
    $('.choose-koeln').on('click', function () {

        $('.location-name').hide().html('<img src="/static/img/icons/s-thetic.png" class="sthetic-icon" />S-thetic Köln').fadeIn(1500).addClass('location-name-style');

        $('.location-data').hide().html(koeln).fadeIn(1500);

        $('.tel-link-content').hide().html('<span class="tracking1">0221 / 92 28 85 36</span>').fadeIn(1500);

        if (document.cookie.indexOf("kennstDuEinenSemTracking=1") != -1) {
            $('.tracking1').html('0221 – 96887935');
            $('.tracking2').html('0211 - 94629230');
            $('.tracking3').html('0711 - 20529676');
        }

        $('.location-form').fadeIn(1500);

        Cookies.remove('hamburg');
        Cookies.remove('duesseldorf');
        Cookies.remove('frankfurt');
        Cookies.remove('mannheim');
        Cookies.remove('stuttgart');
        Cookies.remove('muenchen');

        Cookies.set('koeln', '1', {
            expires: 7,
        });

    });


    //Frankfurt
    $('.choose-frankfurt').on('click', function () {

        $('.location-name').hide().html('<img src="/static/img/icons/s-thetic.png" class="sthetic-icon" />S-thetic Frankfurt').fadeIn(1500).addClass('location-name-style');

        $('.location-data').hide().html(frankfurt).fadeIn(1500);

        $('.tel-link-content').hide().html('<span class="">069 /  247 488 921 53</span>').fadeIn(1500);

        $('.location-form').fadeIn(1500);

        Cookies.remove('hamburg');
        Cookies.remove('duesseldorf');
        Cookies.remove('koeln');
        Cookies.remove('mannheim');
        Cookies.remove('stuttgart');
        Cookies.remove('muenchen');

        Cookies.set('frankfurt', '1', {
            expires: 7,
        });

    });


    //Mannheim
    $('.choose-mannheim').on('click', function () {

        $('.location-name').hide().html('<img src="/static/img/icons/s-thetic.png" class="sthetic-icon" />S-thetic Mannheim').fadeIn(1500).addClass('location-name-style');

        $('.location-data').hide().html(mannheim).fadeIn();

        $('.tel-link-content').hide().html('<span class="tracking_tn03">06322 / 95 83 76 20</span>').fadeIn(1500);

        $('.location-form').fadeIn(1500);

        Cookies.remove('hamburg');
        Cookies.remove('duesseldorf');
        Cookies.remove('koeln');
        Cookies.remove('frankfurt');
        Cookies.remove('stuttgart');
        Cookies.remove('muenchen');

        Cookies.set('mannheim', '1', {
            expires: 7,
        });

    });

    //Stuttgart
    $('.choose-stuttgart').on('click', function () {

        $('.location-name').hide().html('<img src="/static/img/icons/s-thetic.png" class="sthetic-icon" />S-thetic Stuttgart').fadeIn(1500).addClass('location-name-style');

        $('.location-data').hide().html(stuttgart).fadeIn(1500);

        $('.tel-link-content').hide().html('<span class="tracking3">0711 / 220 298 25</span>').fadeIn(1500);

        if (document.cookie.indexOf("kennstDuEinenSemTracking=1") != -1) {
            $('.tracking1').html('0221 – 96887935');
            $('.tracking2').html('0211 - 94629230');
            $('.tracking3').html('0711 - 20529676');
        }

        $('.location-form').fadeIn(1500);

        Cookies.remove('hamburg');
        Cookies.remove('duesseldorf');
        Cookies.remove('koeln');
        Cookies.remove('frankfurt');
        Cookies.remove('mannheim');
        Cookies.remove('muenchen');

        Cookies.set('stuttgart', '1', {
            expires: 7,
        });

    });


    //München
    $('.choose-muenchen').on('click', function () {

        $('.location-name').hide().html('<img src="/static/img/icons/s-thetic.png" class="sthetic-icon" />S-thetic München').fadeIn().addClass('location-name-style');

        $('.location-data').hide().html(muenchen).fadeIn(1500);

        $('.tel-link-content').hide().html('<span class="tracking_tn04">089 / 590 682 18</span>').fadeIn(1500);

        $('.location-form').fadeIn(1500);

        Cookies.remove('hamburg');
        Cookies.remove('duesseldorf');
        Cookies.remove('koeln');
        Cookies.remove('frankfurt');
        Cookies.remove('mannheim');
        Cookies.remove('stuttgart');

        Cookies.set('muenchen', '1', {
            expires: 7,
        });

    });


    //Nuernberg
    $('.choose-nuernberg').on('click', function () {

        $('.location-name').hide().html('<img src="/static/img/icons/s-thetic.png" class="sthetic-icon" />S-thetic Nürnberg').fadeIn().addClass('location-name-style');

        $('.location-data').hide().html(nuernberg).fadeIn(1500);

        $('.tel-link-content').hide().html('<span class="tracking_tn0">0911 / 992 882 94</span>').fadeIn(1500);

        $('.location-form').fadeIn(1500);

        Cookies.remove('hamburg');
        Cookies.remove('duesseldorf');
        Cookies.remove('koeln');
        Cookies.remove('frankfurt');
        Cookies.remove('mannheim');
        Cookies.remove('stuttgart');

        Cookies.set('nuernberg', '1', {
            expires: 7,
        });

    });


})