const { resolve } = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist/index.html'));
});

app.use(express.static('dist'))

app.listen(PORT, () => console.log(`Example running: http://localhost:${PORT}`));
