import React, {Component} from 'react'


class Review extends Component {

    state = {
        "isLoading": true,
    }

    render = () => {
        return(
            <p className="card-text"><small className="text-muted"><i>{this.props.text}</i></small> <a href={this.props.user.profile_url} target="_blank">{this.props.username}</a></p>
        )
    }
    
}

export default Review