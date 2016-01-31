var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();
var parseServer = new ParseServer({
  databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_PATH || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  fileKey: process.env.FILE_KEY
});

// Serve the Parse API at /parse URL prefix
app.use('/parse', parseServer);

app.get('/', function(req, res) {
  res.status(200).send('Express is running here.');
});

var server = app.listen(process.env.PORT || 1337, function() {
  console.log('App listening at http://%s:%s', server.address().address,
    server.address().port);
  console.log('Press Ctrl+C to quit.');
});
