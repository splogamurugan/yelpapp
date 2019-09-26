const express = require('express')
const app = express()
const port = 3001

const ctrl = require('./controllers/business.js');

app.get('/businesses', ctrl.search)
app.get('/businesses/:id/reviews', ctrl.review)

app.listen(port, () => console.log(`Debug: App listening on port ${port}!`))