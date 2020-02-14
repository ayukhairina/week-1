const express = require ('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./src/routes')
//const mysql = require ('mysql')

//const connection = mysql.createConnection({
  //  host     : 'localhost',
    //user     : 'root',
    //password : '',
    //database : 'dev_sample'
//})

//connection.connect((error) => {
  //  if(error) console.log(error)
    //console.log('Database connected!')
//})

app.listen(8002, () => console.log('This server is running')); //service berjalan di port tsb
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extented: false}))
app.use('/', mainNavigation)

