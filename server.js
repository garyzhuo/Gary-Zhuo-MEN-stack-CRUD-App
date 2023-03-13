/* Require modules to allow app to run efficiently 
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

/* Grabs the DB connection and seed data
--------------------------------------------------------------- */
const db = require('./models');


/*Required Routes in Controller Folder
-------------------------------------------------------------------*/
const espressosCtrl = require('./controllers/espressos');
const espressos = require('./models/seed');





/* Create the Express app
--------------------------------------------------------------- */
const app = express();

/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});





/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'))
app.use(connectLiveReload());


/* Mount routes
--------------------------------------------------------------- */
app.get('/', function (req, res) {
    db.Espresso.find({ isFeatured: true })
    .then(Espressos => {
        res.render('home', {
            espressos: Espressos
        })
    })
})


//this will reseed the document, removing any changes that you have implemented.
//make sure you take out later
app.get('/seed', function (req, res) {
    // Remove any existing coffees that you might have added
    db.Espresso.deleteMany({})
        .then(removedEspressos => {
            console.log(`Removed ${removedEspressos.deletedCount} tweets`)
            // Seed the pets collection with the seed data
            db.Espresso.insertMany(db.seedEspressos)
                .then(addedEspressos => {
                    console.log(`Added ${addedEspressos.length} espressos back to it's orginial format.`)
                    res.json(addedEspressos)
                })
        })
});


app.use('/espressos', espressosCtrl)


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});

