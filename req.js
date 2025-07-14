console.log("Starting server..."); // Add this at the top

const http = require('http');

const server = http.createServer((req, res) => {
  let responseMessage = '';

  if (req.url === '/home') {
    responseMessage = 'Welcome home';
  } else if (req.url === '/about') {
    responseMessage = 'Welcome to About Us';
  } else if (req.url === '/node') {
    responseMessage = 'Welcome to my Node Js project';
  } else {
    responseMessage = 'Page Not Found';
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>${responseMessage}</h1>`);
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
