const express = require('express');
const router = require('./Router/router');

// ...

const app = express();

app.use(express.json());

app.use(router);

app.use((error, __req, res, __next) => {
  if (error.code) res.status(error.code).json(error.message);
  res.status(500).json({ message: error.message });
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
