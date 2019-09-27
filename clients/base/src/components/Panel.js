import React, {Component} from 'react'

import Business from './Business'

import fetchData from '../lib/Fetch'


class Panel extends Component{

    state = {
        "businesses": [],
    }

    

    render = () => {
        let shops = <p className="text-center">Loading...</p>

        const businesses = this.state.businesses

        if (businesses.length > 0) {
            shops = businesses.map(
                bizz => <Business key={bizz.id} record={bizz} />
            )
        }

        return (
            <div>
                <h2 className="display-6 text-center"><small className="text-muted">Top 5 ice cream shops in Alpharetta</small></h2>
                {shops}
            </div>
        )
    }


    componentDidMount = () => {
        //this.setLoadingHandler(true)
        this.fetch()
    }

    fetch() {
        fetchData.business(
            data => {this.setState({businesses: data.records})}
        )
    }


}

export default Panel;
