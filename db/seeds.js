var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/yearbook';
mongoose.connect(databaseUrl);

var Person  = require('../models/person');
var Project = require('../models/project');
var Tag     = require('../models/tag');

function saveItemToDb(err, item){
  if(err) console.log(err);
  console.log("Item saved." + item);
}

var html5       = new Tag({name: "HTML5"});
var css3        = new Tag({name: "CSS3"});
var js          = new Tag({name: "JavaScript"});
var ruby        = new Tag({name: "Ruby"});
var rails       = new Tag({name: "Ruby on Rails"});
var sinatra     = new Tag({name: "Sinatra"});
var node        = new Tag({name: "NodeJS"});
var angular     = new Tag({name: "AngularJS"});
var react       = new Tag({name: "ReactJS"});
var bootstrap   = new Tag({name: "Bootstrap"});
var foundation  = new Tag({name: "Foundation"});
var skeleton    = new Tag({name: "Skeleton"});
var materialize = new Tag({name: "Materialize"});

var tags = [html5, css3, js, ruby, rails, sinatra, node, angular, react, bootstrap, foundation, skeleton, materialize];

tags.forEach(function(tag, index){
  tag.save(saveItemToDb);
});

var pasur = new Project({
    title:      "Pasur",
    github:     "https://github.com/sareh/pasur",
    heroku:     "http://pasur.herokuapp.com/",
    screenshot: "",
    tags:       [html5, css3, js]
  });

var portal = new Project({
    title:      "Portal",
    github:     "https://github.com/sareh/portal",
    heroku:     "http://uni-portal.herokuapp.com/",
    screenshot: "",
    tags:       [html5, css3, ruby, rails, foundation]
  });

var lemonade = new Project({
    title:      "Lemonade Stand",
    github:     "https://github.com/martyjg/lemonade-stand",
    heroku:     "",
    screenshot: "https://raw.githubusercontent.com/martyjg/lemonade-stand/master/Screen-Shot-Lemonade-2.jpg",
    tags:       [html5, css3, js]    
  });

var screencap = new Project({
    title:      "Screencap",
    github:     "https://github.com/martyjg/screencap_app",
    heroku:     "",
    screenshot: "",
    tags:       [html5, css3, ruby, rails, foundation]
  });

var projects = [pasur, portal, lemonade, screencap];

projects.forEach(function(project, index){
  project.save(saveItemToDb);
});

var sareh = new Person({
    first_name: "Sareh",
    last_name: "Heidari",
    nickname: "",
    photo: "http://gdurl.com/rH4k",
    github: "https://github.com/sareh",
    linkedin: "https://www.linkedin.com/in/sarehheidari",
    twitter: "https://www.twitter.com/sareh88",
    type: "student",
    projects: [pasur, portal]
  });

var marty = new Person({
    first_name: "Marty",
    last_name: "Gormley",
    nickname: "",
    photo: "http://gdurl.com/R4Gs",
    github: "https://github.com/martyjg",
    linkedin: "",
    twitter: "https://www.twitter.com/martygormley",
    type: "student",
    projects: [lemonade, screencap]
  });

var people = [sareh, marty];

people.forEach(function(person, index){
  person.save(saveItemToDb);
});
