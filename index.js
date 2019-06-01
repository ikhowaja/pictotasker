const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
const server = require('http').createServer(app);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var usersController = require("./controllers/userController")
app.use(express.static(path.join(__dirname, 'client/build')));
var io = require('socket.io')(server)





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

const port = process.env.PORT || 5000;


io.on('connection', (socket) => {
	console.log(socket.id);

	socket.on('SEND_MESSAGE', function (data) {
		io.emit('RECEIVE_MESSAGE', data);
	})
});


server.listen(port);