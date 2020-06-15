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

    const whenStoreFound = (queryError, result) => {
        if(queryError){
            console.log("----{error handler}----");
            console.log(queryError.message);
            res.send(queryError.message);
        }else{
            console.log("result --- ", result.rows[0])
            const stores = {
                stores: result.rows
            }
            console.log(stores);
            res.render('stores', stores);
        }
    }

    const viewStores = (connectionError) => {
        if( connectionError ){
            console.log("----{error handler}----");
            console.log(connectionError.message);
        }
        const myQuery = 'SELECT * FROM stores';

        client.query(myQuery, whenStoreFound);
    };

    client.connect((err) => {
        viewStores();
    });
});

app.get('/stores/:id', (req,res) => {

    const whenStoreFound = (queryError, result) => {

        if(queryError){
            console.log(1);
            console.log("----{error handler}----");
            console.log(queryError.message);
        }

        const whenStoreFoodFound = (queryError, foodResult) => {
            if(queryError){
                console.log(5);
                console.log("----{error handler}----");
                console.log(queryError.message);
            }
            const storemenu = {
                store: result.rows,
                foods: foodResult.rows
            }
            res.render('storepage', storemenu);
        }

        const getStoreFood = (connectionError) => {
            if(connectionError){
                console.log(4);
                console.log("----{error handler}----");
                console.log(connectionError.message);
            }
            const myOtherQuery = 'SELECT * FROM foods WHERE store_id = ' + req.params.id

            client.query(myOtherQuery, whenStoreFoodFound)
        }
        getStoreFood()
    }

    const getStore = (connectionError) => {
        if(connectionError){
            console.log(3);
            console.log("----{error handler}----");
            console.log(connectionError.message);
        }
        const myQuery = 'SELECT * FROM stores WHERE id = ' + req.params.id
        client.query(myQuery, whenStoreFound)
    }

    client.connect((err) => {
        getStore()

    });
})

app.get('/stores/new', (req, res) => {
    res.render('newstore');
})

app.post('/stores/new', (req, res) => {

    const whenStoreAdded = (queryError, result) => {
        //----{error handler}----
        if(queryError){
            console.log("----{error handler}----");
            console.log(queryError.message);
        }
        res.redirect("/stores");
    }

    const addStore = (connectionError) => {
        //
        if( connectionError ){
            console.log("----{error handler}----");
            console.log(connectionError.message);
        }
        const myQuery = 'INSERT INTO stores (name) VALUES($1)';

        const storeValue = [req.body.storeName]

        client.query(myQuery, storeValue, whenStoreAdded);
    };

    client.connect((err) => {
        addStore();
    });
})

app.get('/foods', (req, res) => {

    const whenFoodFound = (queryError, result) => {
        if(queryError){
            console.log("----{error handler}----");
            console.log(queryError.message);
            res.send(queryError.message);
        }else{
            console.log("result --- ", result.rows[0])
            const data = result.rows
            console.log(data);
            res.send(data);
        }
    }

    const viewFoods = (connectionError) => {

        if( connectionError ){
            // something wrong with connecting
            console.log("----{error handler}----");
            console.log(connectionError.message);
        }
        // query database for all stores
        const myQuery = 'SELECT * FROM foods';

        client.query(myQuery, whenFoodFound);
    };

    client.connect((err) => {
        viewFoods();
    });
});

app.get('/foods/new', (req, res) => {

    const whenStoreFound = (err, result) => {
        if(err){
            console.log("----{error handler}----");
            console.log(err.message);
        }
        const storeData = {
            store: result.rows
        }
        res.render('newfood', storeData);
    }

    const findStore = (connectionError) => {

        if( connectionError ){
            console.log("----{error handler}----");
            console.log(connectionError.message);
        }
        const myQuery = 'SELECT * FROM stores';

        client.query(myQuery, whenStoreFound);
    };

    client.connect((err) => {
        //running query to display all stores in the form
        findStore();
    });
})

app.post('/foods/new', (req, res) => {

    const whenFoodAdded = (err, result) => {
        if(err){
            console.log("----{error handler}----");
            console.log(err.message);
        }

        res.redirect('/foods');
    };

    const addFood = (connectionError) => {
        if(connectionError){
            console.log("----{error handler}----");
            console.log(connectionError.message);
        }

        const myQuery = "INSERT INTO foods (store_id, name) VALUES($1 , $2)";
        // this is to re-arrange the array order before query
        const value = [
            req.body.store_id,
            req.body.foodName
        ];

        client.query(myQuery, value, whenFoodAdded)
    }

    client.connect((err) => {
        addFood();
    });

})

app.get('/signup', (req,res) => {
    res.render('signup');
})

app.post('/signup',(req,res) =>{
    const value = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    const whenUserAdded = (err, result) => {
        if(err){
            console.log("----{error handler}----");
            console.log(err.message);
        }
        res.render('home');
    };
    const newUser = (connectionError) => {
        if(connectionError){
            console.log("----{error handler}----");
            console.log(connectionError.message);
        }
        const myQuery = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';

        client.query(myQuery, value, whenUserAdded);

    }
    client.connect((err) => {
        newUser();
    });
})

app.get('/signin', (req,res) => {
    res.render('signin');
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