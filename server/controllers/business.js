const model = require('../models/business.js');

exports.search = (req, res) => {
    model.search((data) => {
        res.send(data)
    });
}

exports.review = (req, res) => {
    model.review(req.params.id, (data) => {
        res.send(data)
    });
}