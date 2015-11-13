var express = require('express');
var router  = express.Router();

var peopleController = require('../controllers/peopleController');

router.route('/people')
  .get(peopleController.peopleIndex)
  // .post(peopleController.peopleCreate);

// router.route('people/new')
  // .get(peopleController.peopleNew)

router.route('/people/:id')
  .get(peopleController.peopleShow)
  .patch(peopleController.peopleUpdate)
  .delete(peopleController.peopleDelete);

router.route('/people/:id/edit')
  .get(peopleController.peopleEdit);

module.exports = router;