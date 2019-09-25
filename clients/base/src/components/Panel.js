import React, {Component} from 'react'

import Business from './Business'

class Panel extends Component{

    state = {
        "businesses": [
            {
                "id": "55555",
                "name": "Tommy",
                "address1": "Tommy one st",
                "city": "SF",
                "author": "Bred",
                "comment": "An awesome shop"

            }
        ]
    }

    render = () => {
        const businesses = this.state.businesses
        return (
            <div className="jumbotron">
                <h1 className="display-4">We love Ice cream!</h1>
                {businesses.map(
                    bizz => <Business key={bizz.id} record={bizz} />
                )}
                <p>Top 5 ice cream shops in Alpharetta</p>
            </div>
        )
    }

}

export default Panel;
