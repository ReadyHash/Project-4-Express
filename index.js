console.log("starting up!!");

const express = require('express');
const app = express();
const pg = require('pg');

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// Initialise postgres client
const configs = {
  user: 'shane',
  host: '127.0.0.1',
  database: 'pickmeup',
  port: 5432,
};

const client = new pg.Client(configs);

client.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req,res) => {
    res.render('home');
});

app.get('/stores', (req, res) => {
    console.log("user has connected")


    const whenQueryDone = (queryError, result) => {
        console.log("query done")
        if(queryError){
            console.log("//////////////////", err.message);
            res.send(err.message);
        }else{
            console.log("result --- ", result.rows[0])
            const data = result.rows
            console.log(data);
            res.send(data);
        }

    }

    const startConnection = (connectionError) => {
        console.log("starting query");

        if( connectionError ){
            // something wrong with connecting
            console.log( "///////////////// error", err.message );
        }
        // query database for all stores
        const myQuery = 'SELECT * FROM stores';

        client.query(myQuery, whenQueryDone);
    };

    client.connect((err) => {
        startConnection();

    });



});

app.get('/stores/new', (req, res) => {
    res.render("newstore");
})

app.post('/stores/new', (req, res) => {
    console.log("new store received!!!!");
    res.redirect("/stores");
})
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