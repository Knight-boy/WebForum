var express = require('express');
var router = express.Router();

/* GET subpage. */

router.get('/Camp0', function(req, res, next) {

    res.render('Camp0', {
        title: 'C0'
    });

});
module.exports = router;