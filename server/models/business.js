const doesConsist = (obj, key) => {
  return (typeof obj == 'object'
    && key in obj
    && Array.isArray(obj[key])
  );
}

const invalid_resp = { "error": "An internal server error occured while fetching the records!", "records": [] };

exports.search = async (data, config) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await data.get(
        'search',
        config.API_PARAM
      );
      if (doesConsist(res, 'businesses')) {
        resolve({ "records": res.businesses.slice(0, config.API_RESULT_COUNT) })
      } else {
        reject(invalid_resp)
      }
    } catch (ex) {
      reject(invalid_resp)
    }

  });
}


exports.review = async (data, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const endpoint = `${id}/reviews`;
      const res = await data.get(
        endpoint,
        {}
      );
      if (doesConsist(res, 'reviews')) {
        resolve({ "user": res.reviews[0].user, "text": res.reviews[0].text })
      } else {
        reject(invalid_resp);
      }
    } catch (ex) {
      reject(invalid_resp);
    }
  })

}


exports.searchWithReviews = async (data, config) => {
  return new Promise(async (resolve, reject) => {
    try {
      
      const res = await data.get(
        'search',
        config.API_PARAM
      );

      if (doesConsist(res, 'businesses')) {

        const records = res.businesses.slice(0, config.API_RESULT_COUNT);
        const promises = [];
        // collecting promises for reviews
        records.forEach((record, index) => {
          promises.push(data.get(
            record.id + '/reviews',
            {}
          ));
        });
        // after getting all the responses for reviews
        Promise.all(promises).then(responses => {
          responses.forEach((response, index) => {
            records[index]['review'] = { "user": response.reviews[0].user, "text": response.reviews[0].text };
          });
          resolve(records);
        });

      } else {
        reject(invalid_resp)
      }
    } catch (ex) {
      reject(invalid_resp)
    }
  });
}
