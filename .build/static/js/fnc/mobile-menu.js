$(document).ready(function () {
    
    $('.sf-menu').clone().appendTo('.mobile-clone-menu').removeClass('sf-menu');
    $('.mobile-clone-menu').find('img').remove();
    
    $("#slidebar").mmenu({
        configuration: {
            pageNodetype: "section"
        }
    });

})