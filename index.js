console.log("starting up!!");

const express = require('express');
const app = express();
const methodOverride = require('method-override')
app.use(methodOverride('_method'));
const pg = require('pg');
const cookieParser = require('cookie-parser')


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

app.get('/', (req, res) => {
    console.log("user has connected")
    console.log(req.body);

    const data = {
        LoggedIn: false
    };

    console.log('Cookies: ', req.cookies)

    res.render('home');
});

app.get('/stores', (req, res) => {

    const whenStoreFound = (queryError, result) => {
        if(queryError){
            console.log("----{whenStoreFound error}----");
            console.log(queryError.message);
            res.send(queryError.message);
        }else{

            const stores = {
                stores: result.rows
            }
            res.render('stores', stores);
        }
    }

    const viewStores = (connectionError) => {
        if( connectionError ){
            console.log("----{viewStores error}----");
            console.log(connectionError.message);
        }
        const myQuery = 'SELECT * FROM stores';

        client.query(myQuery, whenStoreFound);
    };

    client.connect((err) => {
        viewStores();
    });
});

app.get('/store/:id', (req,res) => {

    const whenStoreidFound = (queryError, result) => {

        if(queryError){
            console.log("----{whenStoreidFound error}----");
            console.log(queryError.message);
        }

        const whenStoreFoodFound = (queryError, foodResult) => {
            if(queryError){
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
            console.log("----{error handler}----");
            console.log(connectionError.message);
        }
        const myQuery = 'SELECT * FROM stores WHERE id = ' + req.params.id
        client.query(myQuery, whenStoreidFound)
    }

    client.connect((err) => {
        getStore()

    });
})

app.post('/order/:id', (req,res) => {
    res.send(req.body)
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
            const data = result.rows
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

        const getAllStores = 'SELECT * FROM stores';

        client.query(getAllStores, whenQueryDone);

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

app.post('/signin', (req,res) => {
    const value = [req.body.email]

    const whenUserChecked = (err, result) => {
        if(err){
            console.log("----{whenUserChecked error}----");
            console.log(err.message);
        }
        console.log(result.rows);

        const userPassword = req.body.password;

        if(result.rows.length > 0){
            if(result.rows[0].password === userPassword){
                res.cookie('logged in', 'true');
                res.cookie('user_id', result.rows[0].id);
                res.send("You're logged in!");
            }else{
                console.log(result.rows[0].password === userPassword)
                console.log(result.rows[0].password);
                res.send("Sorry Username or Password is invalid")
            }

        }else{
            res.send("invalid");
        }
    }

    const checkUser = (connectionError) => {
        if(connectionError){
            console.log("----{checkuser error}----");
            console.log(connectionError.message);
        }
        const myQuery = 'SELECT * FROM users WHERE email = $1';

        client.query(myQuery, value, whenUserChecked);
    }

    client.connect((err) => {
        checkUser();
    })
})

app.delete('/signout', (req,res) =>{
    res.clearCookie('logged in');
    res.clearCookie('user_id');
    res.send("You're logged out!")
})
// boilerplate for listening and ending the program

const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    client.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);