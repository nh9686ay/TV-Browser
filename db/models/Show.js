const {
    type
} = require("express/lib/response");
const mongoose = require("../connection");

const ShowSchema = new mongoose.Schema({

    id: Number,
    url: String,
    name: String,
    type: String,
    language: String,
    genres: [String],
    status: String,
    runtime: Number,
    premiered: Date,
    officialSite: String,
    schedule: {
        time: String,
        days: [String]
    },
    rating: {
        average: Number
    },
    weight: Number,
    network: {
        id: Number,
        name: String,
        country: {
            name: String,
            code: String,
            timezone: String
        }
    },
    webChannel: {
        id: Number,
        name: String,
        country: {
            name: String,
            code: String,
            timezone: String
        }
    },
    externals: {
        tvrage: Number,
        thetvdb: Number,
        imdb: String
    },
    image: {
        medium: String,
        original: String
    },
    summary: String,
    updated: Number,
    _links: {
        self: {
            href: String
        },
        previousepisode: {
            href: String
        }
    }
});



const Show = mongoose.model("Show", ShowSchema);


module.exports = Show;