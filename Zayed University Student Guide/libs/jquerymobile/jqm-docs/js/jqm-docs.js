// collapse page navs after use
/*$(function () {
    $('body').delegate('.content-secondary .ui-collapsible-content', 'vclick', function () {
        $(this).collapsible("collapse");
    });
});*/

function setDefaultTransition() {
    var winwidth = $(window).width(),
        trans = "slide";

    if (winwidth >= 1000) {
        trans = "none";
    }
    else if (winwidth >= 650) {
        trans = "fade";
    }

    $.mobile.defaultPageTransition = trans;
}

// set default documentation
$(document).bind("mobileinit", setDefaultTransition);
$(function () {
    $(window).bind("throttledresize", setDefaultTransition);
});