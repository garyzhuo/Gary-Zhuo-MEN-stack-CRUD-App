/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')
const espressos = require('../models/seed')

/* Routes
--------------------------------------------------------------- */
//Creates Route
router.get('/:id', (req, res) => {
    console.log(req.body)
    res.render('reviews-form', {
        id: req.params.id
    })
})



router.post('/create/:id', (req, res) => {
    // console.log(req.body)
    // Create a review
db.Espresso.findByIdAndUpdate(
    req.params.id, // replace with your restaurant's ID
        { $push: { reviews: req.body } },
        { new: true }
)
    .then(espresso => 
        res.redirect('/espressos/' + espresso._id))
})

// router.get('')







module.exports = router