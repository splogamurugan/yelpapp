import React, {Component} from 'react'

import Review from './Review'
import fetchData from '../lib/Fetch'


class Business extends Component {

    state = {
        "isLoading": true,
        "reviewer": {}
    }

    render = () => {
        //console.log(this.props.record)

        const reviewerData = this.state.reviewer
        let reviewer = <p>Loading review...</p>;
        if (reviewerData.user) {
            reviewer = <Review username={reviewerData.user.name} text={reviewerData.text} />
        }

        return (

            <div className="card">
                <div className="row no-gutters">
                
                    <div className="col-2">
                        <img src={this.props.record.image_url} className="img-fluid" alt="..." />
                    </div>

                    <div className="col">
                        <div class="card-block px-2">
                            <h5 className="card-title">{this.props.record.name}</h5>
                            <p className="card-text">{this.props.record.location.address1}, {this.props.record.location.city}</p>
                            {reviewer}
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
                this.setState({reviewer: data, isLoading: false})
            }
        )
    }
}

export default Business;
