const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');

const app = express();

const PORT = 8888;

// parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static(path.resolve(__dirname, '../')));

// apiRouter
// const apiRouter = require(path.join(__dirname, 'routes/api.js'));
app.use('/api', apiRouter);


// catch-all route handler
app.all('*', (req, res) => {
  console.log('Page not found');
  return res.status(404).send('Page not found.')
});

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

  // start server
  app.listen(PORT, ()=> {
      console.log(`Server listening on port: ${PORT}...`);
  })

  module.exports = app;