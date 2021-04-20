const express = require('express')
const app = express()

const uri = process.env.MONGODB_URI

const demo = require('./controllers/demos-controller')
demo(app)

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(
    // 'mongodb://localhost:27017/whiteboard-02',
    uri,
    {useNewUrlParser: true, useUnifiedTopology: true})

//Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


require('./controllers/quizzes-controller')(app)
require('./controllers/question-controller')(app)
require('./controllers/quiz-attempts-controller')(app)


app.listen(process.env.PORT);
app.listen(4000)