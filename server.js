const express = require('express');
const bodyParser = require('body-parser')
const app = express();



var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('server listening...')
})
