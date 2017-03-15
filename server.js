var express = require('express');

//Create a new app
var app = express();

//default folder to serve
app.use(express.static('public'));

//start express server with port & function
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
