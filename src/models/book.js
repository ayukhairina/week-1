const connection = require('../config/mysql')

module.exports = {
    getAll : (searchName) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM book WHERE name LIKE '%${searchName}%'`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            } )
        })
    },

    getDetail: (bookId) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM book WHERE id = ?', bookId, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },

    insertData: (data) => {
        return new Promise ((resolve, reject) => {
            connection.query('INSERT INTO book SET ?', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateData: (data, bookId) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE book SET ? WHERE id = ?', [data, bookId], (error, result) => {
                  if (error) reject(new Error(error))
                  resolve(result)
            })
          })
        },
    
    deleteData: (bookId) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM book WHERE id = ?', bookId, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
        })
    })
      } }