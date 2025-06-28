const express = require('express');
const os = require('os');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.get('/status', (req, res) => {
  res.json({
    uptime: os.uptime(),
    status: 'running'
  });
});

app.listen(8080, () => {
  console.log('API listening on port 8080');
});
