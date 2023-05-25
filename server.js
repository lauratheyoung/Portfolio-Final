const express = require("express");
const app = express();
const port = 8888;

app.use(express.static('/public'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

let server = app.listen(8888, function() {
  console.log("App server is running on port " + port);
});

server.on('error', (error) => {
  console.error('Server error:', error.message);
});


// code snippet from week 6 lecture content of DECO2017
