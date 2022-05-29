const Person = require('./models/Person');
const Show = require('./models/Show');
const showsData = require('./shows.json')
const peopleData = require('./people.json')


Person.deleteMany({})
    .then(() => {

        Person.insertMany(peopleData)
            .then(console.log)
            .catch(console.error)
    })



Show.deleteMany({})
    .then(() => {

        Show.insertMany(showsData)
            .then(console.log)
            .catch(console.error)
    })