import React, { Component } from "react";
import API from "../../utils/API";



class LikeButton extends Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        const label = this.state.liked ? 'Unlike' : 'Like'
        return (
            <div className="customContainer">
                <button className="btn btn-primary" onClick={this.handleClick}>
                    {label}</button>
                <p>
                    you {text} this. Click to toggle.
          </p>
            </div>
        );
    }
}