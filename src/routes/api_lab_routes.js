/*!
 * Indigenous Knowledge Network Platform 
 * Author: Amit Chanchal, amit.chanchal@hotmail.com
 * SUI, IKN(Anthill)
 * June 2016, Bangalore
 */

//Lab routes

var express = require('express');
var router = express.Router();


// middleware that is specific to this router
/*
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
*/

router.get('/', function(req,res){
	res.render("labs_home");
});



module.exports = router;