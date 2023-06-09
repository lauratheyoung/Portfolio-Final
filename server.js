const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
let server = app.listen(port, function() {
  console.log("App server is running on port " + port);
});

server.on('error', (error) => {
  console.error('Server error:', error.message);
});



// code snippet from week 6 lecture content of DECO2017
