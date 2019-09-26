var expect  = require('chai').expect;
const axios = require("axios");

it('businesses api content to be JSON', function(done) {

    axios.get('http://localhost:3001/businesses')
    .then(function (response) {
        // handle success
        expect(response).to.instanceOf(Object);
        done();
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

    
});

