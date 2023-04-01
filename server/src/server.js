const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const PORT = 9000;

function startServer() {
	server.listen(PORT, () => {
		console.log(`listening on port ${PORT}`);
	});
}

startServer();
