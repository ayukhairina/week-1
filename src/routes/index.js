const express = require('express')
const Route = express.Router()

const bookRouter = require('./book')
// const user = require('./user')

Route
    .use('/book', bookRouter)

    module.exports = Route
