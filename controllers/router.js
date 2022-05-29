const express = require('express');
const router = express.Router();
const Person = require('../db/models/Person');
const Show = require('../db/models/Show');


//routes to show all data for Person
router.get('/person', (req, res) => {
    Person.find({})
        .then(personData => {
            //res.send(personData);
            res.json(personData)
            //console.log(data)
        })
})

//routes to show all data for Show
router.get('/shows', (req, res) => {
    Show.find({})
        .then(showData => {
            //res.send(showData);
            res.json(showData)
            //console.log(data)
        })
})

//routes to show data by ID for Person
router.get('/person/:id', (req, res) => {
    const idP = req.params.id;
    Person.findById(idP)
        .then(personData => {
            res.json(personData)
            //console.log(data)
        })
        .catch(err => res.send(err))
})

//routes to show data by ID for Show
router.get('/shows/:id', (req, res) => {
    const idS = req.params.id;
    Show.findById(idS)
        .then(showData => {
            res.json(showData)
            //console.log(data)
        })
        .catch(err => res.send(err))
})

// route to create a Person
router.post('/person', (req, res) => {
    Person.create(req.body)

        .then(makePerson => res.json(makePerson))
        .catch(err => res.send(err))
})


// route to create a Show
router.post('/shows', (req, res) => {
    Show.create(req.body)

        .then(makeShow => res.json(makeShow))
        .catch(err => res.send(err))
})


// route to udate a person
router.put('/person/:id', (req, res) => {
    const idP = req.params.id;
    Person.findByIdAndUpdate(
            idP,
            req.body
        )
        .then(personUpdate => res.json(personUpdate))
        .catch(err => res.send(err))
});

// route to udate a Show
router.put('/shows/:id', (req, res) => {
    const idS = req.params.id;
    Show.findByIdAndUpdate(
            idS,
            req.body
        )
        .then(showsUpdate => res.json(showsUpdate))
        .catch(err => res.send(err))
});

//route to delete a person
router.delete('/person/:id', (req, res) => {
    const idP = req.params.id;
    Person.findByIdAndDelete(idP)
        .then(person => res.json(person))
        .catch(console.error);
});


//route to delete a show
router.delete('/shows/:id', (req, res) => {
    const idS = req.params.id;
    Show.findByIdAndDelete(idS)
        .then(show => res.json(show))
        .catch(console.error);
});

module.exports = router