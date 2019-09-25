import React, {Component} from 'react'

import Business from './Business'

import fetchData from '../lib/Fetch'


class Panel extends Component{

    state = {
        "businesses": [
            {
                "id": "55555",
                "name": "Tommy",
                "author": "Bred",
                "comment": "An awesome shop",
                "location": {
                    "address1": "an address",
                    "city": "SF"
                },
                "review": {
                    "name": "Sam",
                    "text": "A great shop"
                }
            }
        ],
        "isLoading": true
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


    componentDidMount = () => {
        //this.setLoadingHandler(true)
        this.fetch()
    }

    fetch() {
        fetchData.business(
            data => {this.setState({businesses: data.businesses, isLoading: false})}
        )
    }


}

export default Panel;
