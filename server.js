var express  = require( 'express' ),
    bodyparser = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname

var app = express();

// Gives routes.js the location of the client and bower_components
app.use( express.static(path.join( root, './client' )));
app.use( express.static( path.join( root, 'bower_components' )));

app.listen(8900, function(){
  console.log("Listening on port 8900");
});
