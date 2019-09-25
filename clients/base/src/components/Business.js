import React, {Component} from 'react'

import Review from './Review'

class Business extends Component {

    render = () => {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.record.name}</h5>
                    <p className="card-text">{this.props.record.address1}, {this.props.record.city}</p>
                    <Review author={this.props.record.author} comment={this.props.record.comment} />
                </div>
            </div>
        )
    }
}

export default Business;
