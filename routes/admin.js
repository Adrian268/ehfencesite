var express = require('express');
var router = express.Router();

router.get('/', function(reg, res){
    res.send("Hello, this is the admin page");
});

module.exports = router;