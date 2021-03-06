'use strict';

var http = require('http');
var pathUtils = require('path');
var express = require('express');

var app = express();

// choose wisely
var PORT = process.env.PORT || 3000;

// the server can be started from anywhere
// relative to the static files dir
var appDir = pathUtils.resolve(__dirname, staticFilesDir);

// serving static files
app.use(express.static(appDir));

// redirect and resolve any requests to index.html
// (prevents "Cannot GET /blah" errors in SPAs)
app.get('*', function(req, res) {
    res.sendFile(pathUtils.resolve(appDir, 'index.html'));
});

// create the server and listen on PORT
http.createServer(app).listen(PORT, function() {
    console.log('Express server listening on port ' + PORT);
    console.log('http://localhost:' + PORT);
});
