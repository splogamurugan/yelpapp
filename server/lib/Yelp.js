const axios = require("axios");
const config = require('../configs/yelp')

class Yelp {
    
    constructor(baseURL, apiKey) {
        this.instance = axios.create({
            baseURL: baseURL,
            headers: {'Authorization': 'Bearer ' + apiKey}
        });
    }

    async get(endpoint, params, cb) {
        try {
            const response = await this.instance.get(endpoint, {
                params: params
            });
            let resp =  response.data;
            cb(resp)
        } catch (error) {
            cb(error)
        }
    }

}

module.exports = new Yelp(config.BASE_URL, config.API_KEY);
