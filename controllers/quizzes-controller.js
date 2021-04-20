//Controllers deal with all things HTTP
//sits between two worlds: the HTTP world and the JS Object world
module.exports = (app) => {
    const quizzesService = require('../services/quizzes/quizzes-service')

    //req. res allows participating in client/server
    //architecture
    const findAllQuizzes = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes()
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.json(quizzes)
            })
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['quizId']
        // const quiz = quizzesService.findQuizById(quizId)
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                res.json(quiz)
            })
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}