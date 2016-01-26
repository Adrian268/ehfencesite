var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
    res.render('gallery', {title: 'E&H Fence, LLC', page: 'gallery', fenceType: 'none'});
});

router.get('/:fenceType', function (req, res) {
    var fenceType = req.params.fenceType;
    var fenceTitle = "";
    
    switch(fenceType){
        case 'pvc':
            fenceTitle = "PVC/Vinyl Fences";
            break;
        case 'aluminum':
            fenceTitle = "Aluminum/Steel Fences";
            break;
        case 'chainlink':
            fenceTitle = "Chainlink Fences ";
            break;
        case 'wood':
            fenceTitle = "Wood Fences";
            break;
        case 'others':
            fenceTitle = "Others";
            break;
        default:
            fenceTitle = "none";
            fenceType = "none";
    }
    
    res.render('gallery', {title: "E&H Fence, LLC", page: 'gallery', fenceType: fenceType, fenceTitle: fenceTitle});

});

module.exports = router;
