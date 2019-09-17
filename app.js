const express = require('express');
const logger = require('./logger');

const app = express();

app.use(logger.handleRequest);

app.get('/', (req, res) => {
  setTimeout(() => {
    logger.info('test');
  }, 100);

  res.json({
    status: 'ok',
  });
});

app.listen(3000, console.log('server started'));
