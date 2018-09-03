import React, { Component } from 'react';
import './PhotoFeed.css';
import Photo from './../Photo/Photo'

class PhotoFeed extends Component {
  render() {
    return(
      <div className="PhotoFeed">
          {
            this.props.photos.map((photo, i) => {
              return (
                <div className="photo-tile" key={i}>
                  <Photo 
                    photo={photo}
                    turnOnVisibility={this.props.turnOnVisibility}
                    resetVisibility={this.props.resetVisibility}
                  />
                </div>
              );
            })
          }
      </div>
    );
  }
}

export default PhotoFeed;