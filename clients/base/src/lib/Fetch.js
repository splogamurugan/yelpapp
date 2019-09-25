const API_URL = 'http://localhost:3001/';


class Fetch {

    constructor(url) {
        this.url = url;
    }

    business(cb) {

        fetch(this.url+ '/', {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }}
        )
        .then(response => response.json())
        .then(cb)

    }

    review(id, cb) {

        fetch(this.url+ '/reviews/'+id, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }}
        )
        .then(response => response.json())
        .then(cb)
        
    }


}

export default new Fetch(API_URL)
