const model = require('../models/business.js');
const config = require('../configs/site')
const yelpConfig = require('../configs/yelp')
const Yelp = require('../lib/data/Yelp')
const dataStream = new Yelp(yelpConfig.BASE_URL, yelpConfig.API_KEY);

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