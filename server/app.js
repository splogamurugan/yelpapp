const express = require('express')
const app = express()
const config = require('./configs/site')
const port = config.PORT

const ctrl = require('./controllers/business.js');

app.get('/businesses', ctrl.search)
app.get('/businesses/:id/reviews', ctrl.review)

app.listen(port, () => console.log(`Debug: App listening on port ${port}!`))