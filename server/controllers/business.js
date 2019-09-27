const model = require('../models/business.js');
const dataStream = require('../lib/data/Yelp')(config.BASE_URL, config.API_KEY);
const config = require('../configs/site')

exports.search = (req, resp) => {
    model.search(dataStream, config, (res) => {
        resp.send(res)
    });
}

exports.review = (req, resp) => {
    model.review(dataStream, req.params.id, (res) => {
        resp.send(res)
    });
}