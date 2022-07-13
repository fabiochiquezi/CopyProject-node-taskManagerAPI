const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const routes = require('./routes/tasks')
require('dotenv').config()

app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', routes)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        const port = 5000
        app.listen(port, console.log(`Server listening on port ${port}`))
    } catch(error){
        console.log(error)
    }
}

start()