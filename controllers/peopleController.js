var Person = require('../models/person');

function peopleIndex(req, res){}
function peopleCreate(req, res){}
function peopleNew(req, res){}
function peopleShow(req, res){}
function peopleUpdate(req, res){}
function peopleDelete(req, res){}
function peopleEdit(req, res){}

module.exports = {
  peopleIndex:  peopleIndex,
  peopleCreate: peopleCreate,
  peopleNew:    peopleNew,
  peopleShow:   peopleShow,
  peopleUpdate: peopleUpdate,
  peopleDelete: peopleDelete,
  peopleEdit:   peopleEdit
}