var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express(),
    http     = require('http').Server(app),
    io       = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');

  io.emit('serverWelcomeMessage',
    `<p>Welcome! It's a MEAN world out there, and I'm a rude bot.</p>
    <p>&nbsp;</p>
    <p>here's what you can ask me to do:</p>
    <p>&nbsp;</p>
    <p>be my friend</p>
    <p>send me a song</p>
    <p>gif my feelz</p>
    <p>type 'help' at any time for these commands again!</p>`
  );

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json() );
// require('./server/config/mongoose.js')
// require("./server/config/routes.js")(app);
http.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
