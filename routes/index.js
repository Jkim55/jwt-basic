var express = require('express');
var jwt = require('jsonwebtoken');
var queries = require('../db/queries.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
  res.render('newUser')
})

router.post('/new', function (req, res, next) {
  queries.getUser(req.body.newUser)
  .then((data) => {
    if (data.length === 0) {
      var token = jwt.sign({ user: req.body.newUser }, 'shhhhh');
      return queries.newUser(req.body.newUser, token)
      .then(() => {
        res.json({jwt: token, uid: req.body.newUser})
      });
    } else {
      res.json({error: "User already exists."})
    }
  })
})

module.exports = router;
