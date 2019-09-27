const expect  = require('chai').expect;
const config = require('../configs/site')
const yelpConfig = require('../configs/yelp')
const Yelp = require('../lib/data/Yelp')
const dataStream = new Yelp(yelpConfig.BASE_URL, yelpConfig.API_KEY);


it('Yelp lib gets results on proper API request', function(done) {
    
    this.timeout(10000);

    dataStream.get(
        'search', 
        config.API_PARAM,
        (res) => {
            expect('businesses' in res).equals(true);
            done();
        }
    );
    
})


it('Yelp lib results on bad response on invalid endpoint', function(done) {
    
    this.timeout(10000);

    dataStream.get(
        'XXXXX', 
        config.API_PARAM,
        (res) => {
            expect('businesses' in res).equals(false);
            expect(res.response.status).equals(404)
            done();
        }
    );
    
})


it('Yelp lib results in bad response on invalid API setup', function(done) {
    
    this.timeout(10000);
    let dataStream = new Yelp('', yelpConfig.API_KEY);

    dataStream.get(
        'search', 
        config.API_PARAM,
        (res) => {
            expect('isAxiosError' in res).equals(true);
            done();
        }
    );
    
})


it('Yelp lib results in bad response on invalid API_KEY', function(done) {
    
    this.timeout(10000);
    let dataStream = new Yelp(yelpConfig.BASE_URL, 'SOME_JUNK_KEY');

    dataStream.get(
        'search', 
        config.API_PARAM,
        (res) => {
            expect('isAxiosError' in res).equals(true);
            expect(res.response.status).equals(400)
            done();
        }
    );
    
})




