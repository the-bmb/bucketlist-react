var express = require('express');
var router = express.Router();

/* GET task listing. */
router.get('/', function(req, res, next) {
  var db = require("./database.js");
  res.send({ data: db.task.list() });
});
/* POST task listing. */
router.post('/', function(req, res, next) {
  var db = require("./database.js");
  db.task.add(req.body.name, req.body.completed);
  res.send({ data: db.task.list() });
});
/* PUT task listing. */
router.put('/:task', function(req, res, next) {
  var db = require("./database.js");
  db.task.set(req.params.task, req.body.name, req.body.completed);
  console.log(req.params.task, req.body.name, req.body.completed)
  res.send({ data: db.task.list() });
});
/* DELETE task listing. */
router.delete('/:task', function(req, res, next) {
  var db = require("./database.js");
  db.task.delete(req.params.task);
  res.send({ data: db.task.list() });
});
module.exports = router;
