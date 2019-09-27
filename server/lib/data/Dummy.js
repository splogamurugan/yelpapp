
const businesses_record = {
  "rating": 4,
  "price": "$",
  "phone": "+14152520800",
  "id": "E8RJkjfdcwgtyoPMjQ_Olg",
  "alias": "four-barrel-coffee-san-francisco",
  "is_closed": false,
  "categories": [
    {
      "alias": "coffee",
      "title": "Coffee & Tea"
    }
  ],
  "review_count": 1738,
  "name": "Four Barrel Coffee",
  "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
  "coordinates": {
    "latitude": 37.7670169511878,
    "longitude": -122.42184275
  },
  "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
  "location": {
    "city": "San Francisco",
    "country": "US",
    "address2": "",
    "address3": "",
    "state": "CA",
    "address1": "375 Valencia St",
    "zip_code": "94103"
  },
  "distance": 1604.23,
  "transactions": ["pickup", "delivery"]
}

const businesses_data = {
    "total": 8228,
    "businesses": new Array(100).fill(businesses_record),
    "region": {
      "center": {
        "latitude": 37.767413217936834,
        "longitude": -122.42820739746094
      }
    }
}

const reviews_record = {
  "id": "xAG4O7l-t1ubbwVAlPnDKg",
  "rating": 5,
  "user": {
    "id": "W8UK02IDdRS2GL_66fuq6w",
    "profile_url": "https://www.yelp.com/user_details?userid=W8UK02IDdRS2GL_66fuq6w",
    "image_url": "https://s3-media3.fl.yelpcdn.com/photo/iwoAD12zkONZxJ94ChAaMg/o.jpg",
    "name": "Ella A."
  },
  "text": "Went back again to this place since the last time i visited the bay area 5 months ago, and nothing has changed. Still the sketchy Mission, Still the cashier...",
  "time_created": "2016-08-29 00:41:13",
  "url": "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=hp8hAJ-AnlpqxCCu7kyCWA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w"
};

const reviews_data = {
    "reviews": new Array(50).fill(reviews_record),
    "total": 3,
    "possible_languages": ["en"]
}

class Dummy {


    constructor() {
        this.payload = {
          "reviews_data": reviews_data,
          "businesses_data": businesses_data
        }
    }

    set reviews_data(val) {
      this.payload.reviews_data = val;
    }

    set businesses_data(val) {
      this.payload.businesses_data = val;
    }

    get reviews_data() {
      return this.payload.reviews_data;
    }

    get businesses_data() {
      return this.payload.businesses_data;
    }

    async get(endpoint, params) {
      return new Promise(async (resolve, reject) => {
          let result;
          if (endpoint == 'search') {
              result = this.businesses_data
          } else {
              result = this.reviews_data
          }

          if ("error" in result) {
              reject(result)
          } else {
              resolve(result)
          }

      })
    }
}
  
module.exports =  Dummy;
