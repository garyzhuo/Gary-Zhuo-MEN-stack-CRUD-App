/* REQUIRED MODULES
------------------------------------------------*/
const express = require('express')
const router = express.Router()


/*Require the database connection, and models */
const db = require('../models')
const espresso = require('../models/espresso')
const espressos = require('../models/seed')
// const espresso = require('../models/espresso')


/*Routes ----------------------------------*/
router.get('/', function (req, res) {
    db.Espresso.find({})
    .then(espressos => {
        res.render('espresso-index', {
            espressos: espressos
        })
    })
})

//Shows route: will display an individual item document.
// this route down here will display the espresso by their ID's.
// so you can search for each espressos.
router.get('/:id', function(req, res) {
    db.Espresso.findById(req.params.id)
    .then(espresso => {
        // this will grab each indivdual espresso and show them according when selected on 'Learn More'
        res.render('espresso-details', {
            espresso: espresso
            })
        })
    .catch(() => res.send('404 Error: Page Not Found'))
})

/* Esport these routes so that they are accessible in 'server.js'
---------------------------------------------------------------------------*/
module.exports = router