const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors())
app.use('*', cors())
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())

app.post('/api/greeting', (req, res) => {
    const name = req.body.name
    console.log(req.body.name)
    // res.setHeader('Content-Type', 'application/json');
    res.send({greeting: `Ola ${name}`});
})

// const PORT = process.env.PORT;
app.listen(8080, () => {
    console.log(`Server running on port 8080`)
})