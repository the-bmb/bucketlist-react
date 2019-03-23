var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {
      name:"Estudar",
      completed:true
    },
    {
      name:"Beber água",
      completed:false
    }
  ]);
});

module.exports = router;
