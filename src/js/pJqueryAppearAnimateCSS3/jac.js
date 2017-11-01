require("./jquery.appear.js");
require("./animate.min.css");
require("./jac.css");

$(function() {
$('*[data-animation]').addClass('animated');
//$('.animated').css("visibility","visible");
//alert("erer");

$(".animated").appear(function() {
    //alert("ere");
    var elem = $(this);
    var animation = elem.data('animation');
    if (!elem.hasClass('visible')) {
        var animationDelay = elem.data('animation-delay');
        if (animationDelay) {

            setTimeout(function() {
                elem.addClass(animation + " visible");
            }, animationDelay);

        } else {
            elem.addClass(animation + " visible");
        }
    }
});
});


$(function() {
$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
})