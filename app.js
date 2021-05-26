const express = require('express')
const app = express()
const port = 3000
const staticDir + __dirname + "\\static\\";

app.use(express.static(staticDir));

app.get('/', (req, res) => res.sendFile(staticDir + "html\\index.html"))

app.get('/contact', (req, res) => 
res.sendFile(staticDir + "html\\contact.html"))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))