const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var usersController = require("./controllers/userController")
app.use(express.static(path.join(__dirname, 'client/build')));
var socket = require('socket.io');


app.use(cors({
    'allowedHeaders': ['Content-Type'], // headers that React is sending to the API
    'exposedHeaders': ['Content-Type'], // headers that you are sending back to React
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));


// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
	console.log('Sent list of items');
});

app.use('/', usersController);
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


server = app.listen(process.env.PORT ||5000, function(){
    console.log('server is running on port 5000')
});




io = socket(server);


io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});


