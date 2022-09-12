const PORT = process.env.PORT || 8192;

const WebSocket = require("ws");
const express = require("express");

const app = express();
app.use(express.static("public"));

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

const wss = new WebSocket.Server({ server: server });

wss.on("connection", function connection(ws) {
	ws.on("message", function message(data) {
		processMessage(JSON.parse(data));
	});
	ws.on("close", function close() {

	});
});

function sendMessageToClient(client, message) {
	if (client.readyState === WebSocket.OPEN) client.send(JSON.stringify(message));
}

function sendMessageToClients(message) {
	wss.clients.forEach(function each(client) {
		sendMessageToClient(client, message);
	});
}

function processMessage(message) {
	switch (message.action) {
		default:
			break;
	}
}