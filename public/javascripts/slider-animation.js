
$(function() {

    var opacity;
    var slide = 1;
    var bgInterval = 4000;
    var opacityAnimateSpeed = 1000;
    var opacityInterval = bgInterval - opacityAnimateSpeed;
    var $div = $('#slider-container');
    var $content = $div.find('p');
    var fenceType = ["", "WOOD FENCES", "PVC & VINYL FENCES", "ALUMINUM & STEEL FENCES", "CHAIN lINK FENCES", "CUSTOM DESIGNS"];

    var animateOpacity = function(){
        $div.animate({'opacity': '0'}, opacityAnimateSpeed);
    };

    opacity = setInterval(animateOpacity,opacityInterval);

    setInterval(function(){

        if(slide > 4)
            slide = 1;
        else slide++;

        clearInterval(opacity);

        opacity = setInterval(animateOpacity, opacityInterval);

        $div.animate({'opacity': '1'}, opacityAnimateSpeed);
        $div.css({'background-image': 'url(images/slide'+slide+'.jpg)'});
        $content.html(fenceType[slide]);

    }, bgInterval);

});