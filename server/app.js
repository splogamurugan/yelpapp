const express = require('express')
const app = express()
const port = 3001

const businessCtrl = require('./controllers/business.js');
const reviewCtrl = require('./controllers/review.js');

app.get('/business', businessCtrl.list)
app.get('/reviews/:id', reviewCtrl.list)

app.listen(port, () => console.log(`Debug: App listening on port ${port}!`))