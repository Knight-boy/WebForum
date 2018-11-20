var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/forum', function(req, res, next) {

    res.render('forum', {
        title: 'Forum'
    });

});
module.exports = router;
