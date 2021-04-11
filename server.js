const express = require('express')
const app = express()

const demo = require('./controllers/demos-controller')
demo(app)

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

app.listen(4000)