app.controller('welcomeController', ['welcomeFactory','$scope', function(welcomeFactory, $scope) {

  console.log('in welcome controller ');

  var socket = io();

  var messages = document.getElementById('messages');

  $scope.sendMessage = function () {
    console.log('in fx');
    var textBox = document.getElementById('m');
    console.log("sending message to server socket: " + textBox.value);
    socket.emit('chat message', textBox.value.toLowerCase());

    var message = document.createElement("LI");
    message.innerHTML = textBox.value;
    messages.appendChild(message);

    textBox.value = '';
  }

  socket.on('serverWelcomeMessage', function(serverMsg){
    var welcomeMessage = document.createElement("LI");
    welcomeMessage.innerHTML = serverMsg;
    messages.appendChild(welcomeMessage);
  })


  socket.on('chat message', function(clientMsg){

    clientMsg = clientMsg.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    var response = "I'm a MEAN bot. You're stupid! :P";

      // basic commands
    if (clientMsg.includes('hello') || clientMsg.includes('hi')){
      response = "hi! i'm rudebot. how are you today?";
    } else if (clientMsg.includes('bye') || clientMsg.includes('adios')){
      response = 'see you later!';
    } else if (clientMsg.includes('pick it up')) {
      response = 'too hectic too hectic'
    } else if (clientMsg.includes('poop')) {
      response = "very funny, luis."
      // help menu commands
    } else if (clientMsg == 'help') {
      response = "<p>here's what you can ask me to do: </p><p>be my friend</p><p>send me a song</p><p>gif my feelz</p>"
    } else if (clientMsg == 'be my friend') {

    }

    var message = document.createElement("LI");
    message.innerHTML = response;
    messages.appendChild(message);
  });

}]);
