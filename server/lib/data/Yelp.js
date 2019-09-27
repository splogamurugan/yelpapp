const axios = require("axios");

class Yelp {

    constructor(baseURL, apiKey) {
        this.instance = axios.create({
            baseURL: baseURL,
            headers: { 'Authorization': 'Bearer ' + apiKey }
        });
    }

    async get(endpoint, params) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.instance.get(endpoint, {
                    params: params
                });
                // console.log(response.data)
                let resp = response.data;
                resolve(resp);
            } catch (error) {
                reject(error)
            }
        });
    }

}

module.exports = Yelp;