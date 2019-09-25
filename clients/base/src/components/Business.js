import React, {Component} from 'react'

import Review from './Review'

class Business extends Component {

    render = () => {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.record.name}</h5>
                    <p className="card-text">{this.props.record.location.address1}, {this.props.record.location.city}</p>
                    <Review author={this.props.record.review.name} comment={this.props.record.review.text} />
                </div>
            </div>
        )
    }
}

export default Business;
