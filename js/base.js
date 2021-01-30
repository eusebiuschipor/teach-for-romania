$(document).ready(function() {
    $('.show-mobile-dropdown-menu').click(function() {
        let element = $(this).parent().parent().children('.dropdown-content');
        let angleUp = 'fa-angle-up';
        let angleDown = 'fa-angle-down';
        
        if (element.css('display') === 'flex') {
            element.css('display', 'none');
            $(this).removeClass(angleUp);
            $(this).addClass(angleDown);
        } else {
            element.css('display', 'flex');
            $(this).removeClass(angleDown);
            $(this).addClass(angleUp);
        }
    });

    $('.hamburger-menu').click(function() {
        let menu = $('.top-bar .content .menu');
        let buttons = $('.top-bar .content .buttons');
        
        if ($('.top-bar .content .menu').css('display') === 'flex') {
            menu.css('display', 'none');
            buttons.css('display', 'none');
        } else {
            menu.css('display', 'flex');
            buttons.css('display', 'flex');
        }
    });
});
