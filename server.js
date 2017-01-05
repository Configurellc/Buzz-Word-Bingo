const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', function (req, res) {
  // res.writeHead(200, {'Content-type': 'text/html'});
  console.log('the work was finished')
   res.sendFile(__dirname + '/public/index.html');

});


var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('server listening...')
})
