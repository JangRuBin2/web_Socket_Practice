const http = require('http');
const WebSocket = require('ws');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connection
wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  // Send a message to the client
  ws.send('Hello Client');

  // Handle incoming messages from the client
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Send a response back to the client
    ws.send(`You said: ${message}`);
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});