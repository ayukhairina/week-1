const bookModel = require('../models/book')
module.exports = {
    getAll: async (request, response) => {
        try {
            const searchName = request.query.name || ''
            const result = await bookModel.getAll(searchName)
            response.json(result)
        } catch (error) {
            console.log(error)
        }
    },

    getDetail: async (request, response) => {
        try {
            const bookId = request.params.bookId
            const result = await bookModel.getDetail(bookId)
            response.json(result)
        }
        catch (error) {
            console.log(error)
        }
    },

    insertData: async (request, response) => {
        try {
            const data = {
                name: request.body.name,
                writer: request.body.writer,
                description: request.body.description,
                publisher: request.body.publisher,
                year: request.body.year,
                stock: request.body.stock,
                genre: request.body.genre,
                created_at : new Date(),
                updated_at : new Date()
            }

            const result = await bookModel.insertData(data)
            response.json(result)
        }
        catch (error) {
            console.log(error)
        }
    },

    updateData: async(request, response) => {
        try{
            const data = {
                name: request.body.name,
                writer: request.body.writer,
                description: request.body.description,
                publisher: request.body.publisher,
                year: request.body.year,
                stock: request.body.stock,
                genre: request.body.genre,
                updated_at : new Date()
            }
            const bookId = request.params.bookId
            const result = await bookModel.updateData(data, bookId)
            response.json(result)

        }
        catch (error) {
            console.log (error)
        }
    },

    deleteData: async(request, response) => {
        try{
            const bookId = request.params.bookId
            const result = await bookModel.deleteData(bookId)
            response.json(result)

        }
        catch(error){
            console.log (error)
        }
    }
}