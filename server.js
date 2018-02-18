var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var PORT = 3000;

var app = express();
var port = process.env.PORT || PORT;

// Serve static content for the app from public directory
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());

// Parse application
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, function() {

    /* eslint no-console: "off", prefer-template: "off" */
    console.log('listening on port ' + port);

});

// Get routes
require('./controllers/mainController.js')(app);
