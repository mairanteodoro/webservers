'use strict';

var http = require('http');
var pathUtils = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
var appDir = pathUtils.resolve(__dirname, "/Users/mteodoro/DEV/Stansberry-Terminal-MkI/ui/dist/");

app.use(express.static(appDir));

// redirect and resolve any requests to index.html
// (prevents "Cannot GET /blah" errors in SPAs)
app.get('*', function(req, res) {
    res.sendFile(pathUtils.resolve(appDir, 'index.html'));
});

http.createServer(app).listen(PORT, function() {
    console.log('Express server listening on port ' + PORT);
    console.log('http://localhost:' + PORT);
});
