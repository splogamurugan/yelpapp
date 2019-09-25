const model = require('../models/business.js');
exports.list = (req, res) => {
    res.send(model.list());
}