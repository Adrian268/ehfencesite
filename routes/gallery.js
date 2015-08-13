var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
    res.render('gallery', {title: 'E&H Fence, LLC', page: 'gallery', fenceType: 'none'});
});

router.get('/:fenceType', function (req, res) {
    var fenceType = req.params.fenceType;
    res.render('gallery', {title: "E&H Fence, LLC", page: 'gallery', fenceType: fenceType});

});

module.exports = router;
