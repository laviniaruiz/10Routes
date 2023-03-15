const express = require('express')

const app = express()

const PORT = 8084

const students = require('./models/students')

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

const studentRoutes = require('./routes/studentRoutes')

// Connect our routes to our express app
app.use('/students', studentRoutes)

app.listen(PORT, () => {
    console.log('Listening on port 8084')
})