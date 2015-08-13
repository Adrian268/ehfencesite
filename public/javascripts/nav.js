var page;
var $nav;
var $button;

$(function(){

    $nav = $('#topNav');
    $button = $nav.find('ul li a');

    $button.on('click', function(){
        page = $(this).attr('rel');
    });

    setNavigation();

});

function setNavigation(){
    var path = window.location.pathname;

    path = path.replace(/\//, "");

    path = decodeURIComponent(path);

    $button.each(function(){
        var href = $(this).attr('rel');

        if(path.substring(0, href.length) == href){
            $(this).addClass('active');
        }
    });
}