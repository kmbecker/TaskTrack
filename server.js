var bodyParser = require('body-parser');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

// Serve static content for the app from the public directory in the
// application directory.
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

// Parse application
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(port, function() {
    console.log('listening on ' + port);
});

// get routes
require('./controllers/mainController.js')(app);
