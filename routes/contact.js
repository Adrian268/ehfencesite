var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('contact', {title: "E&H Fence, LLC", page:"contact"});
});


module.exports = router;