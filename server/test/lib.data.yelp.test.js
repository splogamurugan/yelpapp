const expect  = require('chai').expect;
const config = require('../configs/site')
const yelpConfig = require('../configs/yelp')
const Yelp = require('../lib/data/Yelp')
const dataStream = new Yelp(yelpConfig.BASE_URL, yelpConfig.API_KEY);


it('Yelp lib gets results on proper API request', async function() {
    
    this.timeout(10000);

    const res = await dataStream.get(
        'search',
        config.API_PARAM
    );
    expect('businesses' in res).equals(true);
        
})


it('Yelp lib results on bad response on invalid endpoint', async function() {
    
    this.timeout(10000);
    try {
        const res = await dataStream.get(
            'XXXXX',
            config.API_PARAM
        );
    } catch (ex) {
        expect('businesses' in ex).equals(false);
        expect(ex.response.status).equals(404)
    }
    
})


it('Yelp lib results in bad response on invalid API setup', async function() {
    
    this.timeout(10000);
    let dataStream = new Yelp('', yelpConfig.API_KEY);

    try{
        const res = await dataStream.get(
            'search',
            config.API_PARAM
        );
    } catch (ex) {
        expect('isAxiosError' in ex).equals(true);
    }
    
})


it('Yelp lib results in bad response on invalid API_KEY', async function() {
    
    this.timeout(10000);
    let dataStream = new Yelp(yelpConfig.BASE_URL, 'SOME_JUNK_KEY');

    try {
        const res = await dataStream.get(
            'search',
            config.API_PARAM
        );
    } catch (ex) {
        expect('isAxiosError' in ex).equals(true);
        expect(ex.response.status).equals(400)
    }
})




