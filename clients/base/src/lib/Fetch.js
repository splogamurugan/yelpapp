
class Fetch {


    business(cb) {

        fetch('/businesses', {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }}
        )
        .then(response => response.json())
        .then(cb)

    }

    review(id, cb) {

        fetch('businesses/'+id+'/reviews/', {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }}
        )
        .then(response => response.json())
        .then(cb)
        
    }


}

export default new Fetch()
