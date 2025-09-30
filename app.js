const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Halo dari Express!');
});

app.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
});