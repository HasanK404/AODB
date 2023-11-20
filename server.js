import express from 'express';
const app = express();
//const db = require("./database.js")

import { Airlines, Arrivals} from './database.js'

app.set("view engine", "ejs")

app.get('/', async (req, res) => {
    const a = Airlines()
    res.send (a)
})

app.use(express.static("public"))

const port = 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})