const model = require('../models/business.js');
const config = require('../configs/site')
const yelpConfig = require('../configs/yelp')
const Yelp = require('../lib/data/Yelp')
const dataStream = new Yelp(yelpConfig.BASE_URL, yelpConfig.API_KEY);

exports.search = async (req, resp) => {
    try {
        const res = await model.search(dataStream, config);
        resp.send(res);
    } catch (ex) {
        resp.send(ex);
    }

}

exports.review = async (req, resp) => {
    try {
        const res = await model.review(dataStream, req.params.id);
        resp.send(res);
    } catch (ex) {
        resp.send(ex);
    }
}

exports.searchWithReviews = async (req, resp) => {
    try {
        const res = await model.searchWithReviews(dataStream, config);
        resp.send(res);
    } catch (ex) {
        resp.send(ex);
    }
}