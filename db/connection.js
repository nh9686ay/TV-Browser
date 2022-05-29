const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb+srv://nh9686ay:Hitman95@cluster0.0pdjw.mongodb.net/tvbrowser?retryWrites=true&w=majority', {
		useNewUrlParser: true
	})
	.then((conn) => {
		console.log(`connected to mongodb on ${conn.connections[0].name} db`)
	})
	.catch(err => {
		console.error(err)
	})


module.exports = mongoose