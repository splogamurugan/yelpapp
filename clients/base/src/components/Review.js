import React, {Component} from 'react'


class Review extends Component {

    state = {
        "isLoading": true,
    }

    render = () => {
        return(
            <p className="card-text">{this.props.username}: <small className="text-muted">{this.props.text}</small></p>
        )
    }
    
}

export default Review