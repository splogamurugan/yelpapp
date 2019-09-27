const model = require('../models/business.js');
const config = require('../configs/site')
const expect  = require('chai').expect;
const Data = require('../lib/data/Dummy');


it('Business model returns error on bad response', async () => {
    let data = new Data()
    data.businesses_data = {"error": "an error occured"}
    try {
        await  model.search(data, config);
    } catch(res) {
        expect('error' in res).equals(true)
    }

});


it('Business model returns result on valid response', async () => {
    let data = new Data()
    config.API_RESULT_COUNT = 10;
    let res = await model.search(data, config);
    expect('error' in res).equals(false)
    expect('records' in res).equals(true)
    expect(res.records.length).equals(config.API_RESULT_COUNT)
    
    
});


it('Review model returns error on bad response', async () => {
    let data = new Data()
    data.reviews_data = {"error": "some error to trigger"};
    try {
        await model.review(data, config);
    } catch (ex) {
        expect('error' in ex).equals(true)
    }

});

it('Review model returns result on valid response', async () => {
    let data = new Data()
    
    res = await model.review(data, config);
    expect('error' in res).equals(false)

});


