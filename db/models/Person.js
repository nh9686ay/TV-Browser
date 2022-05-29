const mongoose = require("../connection");


const PersonSchema = new mongoose.Schema({

    id: Number,
    url: String,

    name: String,

    country: {
        name: String,
        code: String,
        timezone: String
    },

    birthday: Date,
    deathday: Date,
    gender: String,
    image: {
        medium: String,
        original: String
    },

    updated: Number,

    _links: {
        self: {
            href: String
        }
    }

});


const Person = mongoose.model("Person", PersonSchema);


module.exports = Person;