import React, { Component } from 'react'

import Review from './Review'
import fetchData from '../lib/Fetch'


class Business extends Component {

    state = {
        "reviewer": {}
    }

    render = () => {
        //console.log(this.props.record)

        const reviewerData = this.state.reviewer
        let reviewer = <p>Loading review...</p>;
        if (reviewerData.user) {
            reviewer = <Review user={reviewerData.user} text={reviewerData.text} />
        } else if (reviewerData.error) {
            reviewer = <p>No Reviews found</p>;
        }

        return (

            <div className="card mb-3">
                <div className="row no-gutters">

                    <div className="col-2">
                        <img src={this.props.record.image_url} className="img-fluid" alt="..." />
                    </div>

                    <div className="col">
                        <div className="card-block px-2">
                            <address className="mt-3 text-secondary">
                                <strong className="card-title">{this.props.record.name}</strong>
                                <div className="float-right"><small>{this.props.record.location.address1}, {this.props.record.location.city}</small></div>
                            </address>
                            <hr />
                            <div className="pb-3">
                            {reviewer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        this.fetch(this.props.record.id)
    }

    fetch(id) {
        fetchData.review(
            id,
            data => {
                console.log(data)
                this.setState({ reviewer: data})
            }
        )
    }
}

export default Business;