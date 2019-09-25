import React, {Component} from 'react'


class Review extends Component {

    render = () => {
        return(
            <p className="card-text">{this.props.author}: <small className="text-muted">{this.props.comment}</small></p>
        )
    }
}

export default Review