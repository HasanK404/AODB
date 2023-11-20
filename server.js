const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send ('<h1>${Date()}</h1>')
})

app.use(express.static("public"))

const port = 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})