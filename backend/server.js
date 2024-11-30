import express from 'express';
import cors from 'cors';
import { mock_data } from "./constants.js"

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req,res) => {
    res.send("<h3>Hello again god </h3>")
})

app.get('/api/jokes', (req,res) => { //standerdize the routes by adding api.
    res.send(mock_data)
})

app.listen(port, () => {
    console.log("server is listining")
})