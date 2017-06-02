var express = require('express');
var router = express.Router();

router.get('/comments', function(req, res) {

  res.render('comments', {
    pageTitle: 'comments',
    pageID: 'comments'
  });

});

module.exports = router;
