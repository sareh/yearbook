var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/yearbook';
mongoose.connect(databaseUrl);

var Person = require('../models/person');
var Project = require('../models/project');

var projects = [
  {
    title:      "Pasur",
    github:     "https://github.com/sareh/pasur",
    heroku:     "http://pasur.herokuapp.com/",
    screenshot: ""
  },
  {
    title:      "Portal",
    github:     "https://github.com/sareh/portal",
    heroku:     "http://uni-portal.herokuapp.com/",
    screenshot: ""
  },
  {
    title:      "Lemonade Stand",
    github:     "https://github.com/martyjg/lemonade-stand",
    heroku:     "",
    screenshot: "https://raw.githubusercontent.com/martyjg/lemonade-stand/master/Screen-Shot-Lemonade-2.jpg"
  },
  {
    title:      "Screencap",
    github:     "https://github.com/martyjg/screencap_app",
    heroku:     "",
    screenshot: ""
  }
]

var people = [
  {
    first_name: "Sareh",
    last_name: "Heidari",
    nickname: "",
    photo: "http://gdurl.com/rH4k",
    github: "https://github.com/sareh",
    linkedin: "https://www.linkedin.com/in/sarehheidari",
    twitter: "https://www.twitter.com/sareh88",
    type: "student",
    projects: projects.sareh
  },
  {
    first_name: "Marty",
    last_name: "Gormley",
    nickname: "",
    photo: "http://gdurl.com/R4Gs",
    github: "https://github.com/martyjg",
    linkedin: "",
    twitter: "https://www.twitter.com/martygormley",
    type: "student",
    projects: projects.marty
  }
]

function saveItemToDb(err, item){
  if(err) console.log(err);
  console.log("Item saved." + item);
}
 
projects.forEach(function(project, index){
  var newProject = new Project(project);
  newProject.save(saveItemToDb);
});

people.forEach(function(person, index){
  var newPerson = new Person(person);
  newPerson.save(saveItemToDb);
});
