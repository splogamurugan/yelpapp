const data = require('../lib/Yelp');

exports.search = (cb) => {
  data.get(
      'search', 
      {
          "term": "Ice cream",
          "location": "Alpharetta"
      },
      (data) => {
          if (data.businesses && Array.isArray(data.businesses)) {
              cb({"records": data.businesses.slice(0, 5)})
          } else {
              cb({"error": "An internal server error occured"})
          }
      }
  );
}

exports.review = (id, cb) => {
  let endpoint = `${id}/reviews`;
  data.get(
      endpoint, 
      {},
      (data) => {
          console.log(data)
          if (data.reviews && Array.isArray(data.reviews)) {
              cb({"user": data.reviews[0].user, "text": data.reviews[0].text})
          } else {
              cb({"error": "An internal server error occured"})
          }
      }
  );
}
