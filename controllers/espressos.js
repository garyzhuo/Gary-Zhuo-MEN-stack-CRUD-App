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


// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('new-form')
})



/* Creates route, post/creates.
Can be used to create the new espresso items, add items to the prodyucts page.*/
router.post('/', (req, res) => {
    console.log(req.body)
    db.Espresso.create(req.body)
    .then(espresso => {
        res.json(espresso)
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

/* Edit Route! 
This will be used to edit your espressos if you were to make any error and 
needed them to be fixed*/

router.get('/:id/edit', (req, res)=> {
    db.Espresso.findById(req.params.id)
    .then(espresso => {
        res.render('edit-form', {
            espresso: espresso
        })
    })
})

/* this will be your update route, so that once your edit route is hit, then it will re
direct you back to the page with the edited form. */

router.put('/:id', (req, res) => {
    //this will show me when i update the espressos
    console.log(req.params)
    console.log(req.body)
    db.Espresso.findByIdAndUpdate (
        req.params.id,
        req.body,
        {new : true}
    )
    .then(espresso => res.redirect('/espressos/' + espresso._id))
})

/* This is the delete route, allowing us to delete things on the webpage */
router.delete('/:id', (req, res) => {
    db.Espresso.findByIdAndRemove(req.params.id)
        .then(espresso => 
            res.redirect('/espressos'))

})

/* Esport these routes so that they are accessible in 'server.js'
---------------------------------------------------------------------------*/
module.exports = router