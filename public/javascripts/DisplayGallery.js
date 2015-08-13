
function getImages(imageType, imageMax)
{
    var image;

    for(image = 1 ; image <= imageMax ; ++image)
        document.write('<a class="fancybox" rel=' + imageType + ' href="/images/gallery/' + imageType + '/'+image+'.JPG"><img id="smallImg" src="/images/gallery/small/'+imageType+'/'+image+'.jpg" alt="EH Fences Images"/></a>');
}


function getSingleImages(imageMax) {

     var imageType = $('h3 a').attr('rel');
     var imageCount;

    for(imageCount = 1 ; imageCount <= imageMax ; ++imageCount)
        document.write('<a class="fancybox" rel=' + imageType + ' href="/images/gallery/' + imageType + '/'+imageCount+'.JPG"><img id="smallImg" src="/images/gallery/small/'+imageType+'/'+imageCount+'.jpg" alt="EH Fences Images"/></a>');

}


