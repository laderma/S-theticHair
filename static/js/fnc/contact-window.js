$(document).ready(function(){
    
    $('.close-contact-window').on('click', function(){
        $('#contact-window-overlay').fadeOut();
    })
    
    $('a[href=#contact-window]').on('click', function(){
        $('#contact-window-overlay').fadeIn('slow');  
        $('#contact-window').fadeIn('slow');  
        $('#contact-window').center();
        $('#contact-window').css({
            "position":"fixed",
        });
    })
})