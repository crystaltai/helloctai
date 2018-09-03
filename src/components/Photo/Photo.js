import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
  constructor(props){
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleVisibility(event) {
    this.props.resetVisibility();
    this.props.photo.visibility = true;
    this.props.turnOnVisibility();
    event.preventDefault();
  }

  render() {
    return(
      <div className="Photo" onClick={this.handleVisibility}>
          <h2 className="photo-name-text">{this.props.photo.name}</h2>
          <img 
            src={this.props.photo.thumbnail}
            alt=""
            className="photo-image"
          />
      </div>
    );
  }
}

export default Photo;