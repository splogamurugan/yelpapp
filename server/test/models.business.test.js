const model = require('../models/business.js');
const config = require('../configs/site')
const expect  = require('chai').expect;
const Data = require('../lib/data/Dummy');


it('Business model returns error on bad response', (done) => {
    let data = new Data()
    data.businesses_data = {"error": "an error occured"}
    model.search(data, config, (res) => {
        expect('error' in res).equals(true)
        done();
    });
});


it('Business model returns result on valid response', (done) => {
    let data = new Data()
    config.API_RESULT_COUNT = 10;
    model.search(data, config, (res) => {
        expect('error' in res).equals(false)
        expect('records' in res).equals(true)
        expect(res.records.length).equals(config.API_RESULT_COUNT)
        done();
    });
});


it('Review model returns error on bad response', (done) => {
    let data = new Data()
    data.reviews_data = "";
    model.review(data, config, (res) => {
        expect('error' in res).equals(true)
        done();
    });
});

it('Review model returns result on valid response', (done) => {
    let data = new Data()
    model.review(data, config, (res) => {
        expect('error' in res).equals(false)
        done();
    });
});


