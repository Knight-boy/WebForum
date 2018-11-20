var express = require('express');
var router = express.Router();

/* GET subpage. */

router.get('/EEer0', function(req, res, next) {
  
    res.render('EEer0', {
      title: 'E0' 
    });

});
router.get('/EEer1', function(req, res, next) {

    res.render('EEer1', {
        title: 'E1'
    });

});
router.get('/EEer2', function(req, res, next) {

    res.render('EEer2', {
        title: 'E2'
    });

});
router.get('/EEer3', function(req, res, next) {

    res.render('EEer3', {
        title: 'E3'
    });

});
router.get('/EEer4', function(req, res, next) {

    res.render('EEer4', {
        title: 'E4'
    });

});
router.get('/EEer5', function(req, res, next) {

    res.render('EEer5', {
        title: 'E5'
    });

});
router.get('/EEer6', function(req, res, next) {

    res.render('EEer6', {
        title: 'E6'
    });

});
router.get('/EEer7', function(req, res, next) {

    res.render('EEer7', {
        title: 'E7'
    });

});
router.get('/EEer8', function(req, res, next) {

    res.render('EEer8', {
        title: 'E8'
    });

});
router.get('/EEer9', function(req, res, next) {

    res.render('EEer9', {
        title: 'E9'
    });

});
router.get('/EEer10', function(req, res, next) {

    res.render('EEer10', {
        title: 'E10'
    });

});
router.get('/EEer11', function(req, res, next) {

    res.render('EEer11', {
        title: 'E11'
    });

});
module.exports = router;
