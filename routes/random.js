var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('random', {random: randomNumber});
});
module.exports=router;
var randomNumber=Math.floor(Math.random()*1000)

    function randomNumber()
{
    return Math.random();
 }


