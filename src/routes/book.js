const express = require('express')
const Route = express.Router()

const {getAll, getDetail, insertData, updateData, deleteData } = require('../controllers/book')

Route
    .get('/', getAll)
    .get('/:bookId', getDetail)
    .post('/', insertData)
    .patch('/:bookId', updateData)
    .delete('/:bookId', deleteData)

    module.exports = Route