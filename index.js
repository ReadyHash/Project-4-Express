console.log("starting up!!");

const express = require('express');
const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'shane',
  host: '127.0.0.1',
  database: 'pickmeup',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

// Init express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  // query database for all stores

  // respond with text that lists the names of all the pokemons
  res.send('This is the index EXPRESS!');
});

// boilerplate for listening and ending the program

const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);