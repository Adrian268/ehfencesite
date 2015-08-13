var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('services', {title: 'E&H Fence, LLC', page: 'service'});
});

router.get('/residential', function(req, res){
    res.render('residential', {title: 'E&H Fence, LLC', page: 'service'});
});

router.get('/commercial', function(req, res){
    res.render('commercial', {title: "E&H Fence, LLC", page: 'service'});
});

module.exports = router;