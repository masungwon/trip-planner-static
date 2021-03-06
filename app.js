var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var morgan = require('morgan');
var swig = require('swig');
var router = require('./routes/router');

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(morgan('combined'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// LINK TO ROUTER
app.use(router);

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render(
    // ... fill in this part
  );
});

app.listen(port, function() {
	console.log("Server is listening intently at port " + port + "...");
});

