const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./server/routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', routes)

const start = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/steamhub')
        app.listen(3000, () => {
            console.log('Running on port 3000')
        })
    } catch (error) {
        console.log(error)
    }
}

start()