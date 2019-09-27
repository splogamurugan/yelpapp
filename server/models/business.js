const doesConsist = (obj, key) => {
  return (typeof obj == 'object' 
    && key in obj 
    && Array.isArray(obj[key])
  );
}

exports.search = (data, config, cb) => {
  data.get(
      'search', 
      config.API_PARAM,
      (res) => {
          if (doesConsist(res, 'businesses')) {
              cb({"records": res.businesses.slice(0, config.API_RESULT_COUNT)})
          } else {
              cb({"error": "An internal server error occured while fetching shops!", "records":[]})
          }
      }
  );
}

exports.review = (data, id, cb) => {
  let endpoint = `${id}/reviews`;
  data.get(
      endpoint, 
      {},
      (res) => {
          if (doesConsist(res, 'reviews')) {
              cb({"user": res.reviews[0].user, "text": res.reviews[0].text})
          } else {
              cb({"error": "An internal server error occured while fetching reviews"})
          }
      }
  );
}
