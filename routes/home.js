var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {title: "E&H Fence, LLC", page: 'home'});
});



module.exports = router;
