const model = require('../models/review.js');
exports.list = (req, res) => {
    res.send(model.list());
}