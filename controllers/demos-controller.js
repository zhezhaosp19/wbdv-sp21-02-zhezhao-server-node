module.exports = (app) => {

    const add = (request, response) => {
        const a = parseInt(request.params['paramA'])
        const b = parseInt(request.params.paramB)
        response.send(`${a + b}`)
    }

    app.get('/add/:paramA/:paramB', add)

    const subtract = (req, res) => {
        const a = parseInt(req.query['x'])
        const b = parseInt(req.query['y'])
        const c = a - b
        res.send(c + '')
    }

    app.get('/subtract', subtract)

    app.get('/', function (req, res) {
        res.send('Hello World')
    })
}