const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const filePath = path.join(__dirname, 'messages.txt');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Serve the HTML form and existing messages
    fs.readFile(filePath, 'utf8', (err, data) => {
      const messages = data ? data.split('\n').filter(Boolean) : [];

      const html = `
        <!DOCTYPE html>
        <html>
        <head><title>Message Board</title></head>
        <body>
          <h2>Messages</h2>
          <div>
            ${messages.map(msg => `<p>${msg}</p>`).join('')}
          </div>
          <form method="POST">
            <input type="text" name="message" required />
            <button type="submit">Send</button>
          </form>
        </body>
        </html>
      `;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });

  } else if (req.method === 'POST') {
    // Handle form submission
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const params = new URLSearchParams(body);
      const newMessage = params.get('message')?.trim();

      if (newMessage) {
        fs.readFile(filePath, 'utf8', (err, data) => {
          const oldMessages = err ? '' : data;
          const updatedMessages = newMessage + '\n' + oldMessages;

          fs.writeFile(filePath, updatedMessages, err => {
            if (err) console.error('Error writing message:', err);
            res.writeHead(302, { Location: '/' }); // redirect to GET /
            res.end();
          });
        });
      } else {
        res.writeHead(400);
        res.end('Message is required.');
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
