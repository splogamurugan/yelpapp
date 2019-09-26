import React, {Component} from 'react'

import Business from './Business'

import fetchData from '../lib/Fetch'


class Panel extends Component{

    state = {
        "businesses": [],
        "isLoading": true
    }

    render = () => {
        const businesses = this.state.businesses
        return (
            <div>
                <h2 className="display-6 text-center"><small className="text-muted">Top 5 ice cream shops in Alpharetta</small></h2>
                    {businesses.map(
                        bizz => <Business key={bizz.id} record={bizz} />
                    )}
            </div>
        )
    }


    componentDidMount = () => {
        //this.setLoadingHandler(true)
        this.fetch()
    }

    fetch() {
        fetchData.business(
            data => {this.setState({businesses: data.records, isLoading: false})}
        )
    }


}

export default Panel;
