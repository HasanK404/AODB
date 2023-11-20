const express = require('express');
const app = express();
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render ("good.ejs")
})

app.use(express.static("public"))

const port = 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})