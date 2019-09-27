var expect  = require('chai').expect;
const axios = require("axios");
const baseUrl = 'http://localhost:3001';

it('Business API returns records', function(done) {

    axios.get(baseUrl+'/businesses')
    .then(function (response) {
        expect(response).instanceOf(Object);
        expect(response.status).equals(200);
        expect(response.data.records.length).equals(5)
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        done();
    });
    
});


it('Invalid Request failed with status code 404', function(done) {

    axios.get(baseUrl+'/XXXX')
    .then(function (response) {
        done();
    })
    .catch(function (error) {
        expect(error.toJSON().message).to.contains('404');
    })
    .finally(function () {
        done();
    });
    
});


it('Business review api gives one result', function(done) {

    axios.get(baseUrl+'/businesses/oDTdXsjMJ-Xzs-rsn96_4Q/reviews/')
    .then(function (response) {
        expect(response).instanceOf(Object);
        expect(response.status).equals(200);
        expect('name' in response.data.user).equals(true)
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        done();
    });
    
});