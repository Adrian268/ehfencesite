var Images= {
    pvc  : 70,
    wood : 17,
    aluminum  : 12,
    chainlink : 17,
    others : 14
};

function getAllImages()
{
    var fenceType = $('h3 a').attr('rel');
    var imageMax = Images[fenceType];

    for(var imageCount = 1 ; imageCount <= imageMax ; ++imageCount)
        document.write('<a class="fancybox" rel=' + fenceType + ' href="/images/gallery/' + fenceType + '/'+imageCount+'.JPG"><img id="smallImg" src="/images/gallery/small/'+fenceType+'/'+imageCount+'.jpg" alt="EH Fence Images"/></a>');
}

function getSmallGallery(imageType){

    var imageMax = 3;

    for(var imageCount = 1 ; imageCount <= imageMax ; ++imageCount)
        document.write('<a class="fancybox" rel=' + imageType + ' href="/images/gallery/' + imageType + '/'+imageCount+'.JPG"><img id="smallImg" src="/images/gallery/small/'+imageType+'/'+imageCount+'.jpg" alt="EH Fence Images"/></a>');

}

