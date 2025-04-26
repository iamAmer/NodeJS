// importing a module
const http = require('node:http');

// you can import only one function from a module (destructuring)
// const {createServer} = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home Page!');
  } 
  // route to the about page
  else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page');
  }
});

// when the server listens this callback function is called
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
