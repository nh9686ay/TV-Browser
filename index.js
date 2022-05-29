const express = require('express')
const app = express()
const routerController = require('./controllers/router');


app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));
app.use('/api', routerController);



app.set('port', process.env.PORT || 4000);


app.listen(4000, () => {
    console.log("app listening on port 4000")
})