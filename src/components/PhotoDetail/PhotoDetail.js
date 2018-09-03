import React, { Component } from 'react';
import './PhotoDetail.css';

class PhotoDetail extends Component {
  render() {
    let visiblePhotoDetail = this.props.photos.filter(photo => { return photo.visibility === true});
    if(visiblePhotoDetail.length > 0) {
      return (
        <div className="PhotoDetail">
        <div className="photo-detail-text">
          <h1 className="photo-detail-text-name">{visiblePhotoDetail[0].name}</h1>
          <p className="photo-detail-text-exerpt">{visiblePhotoDetail[0].exerpt}</p>
        </div>
        <div className="photo-detail-images">
        { 
          visiblePhotoDetail[0].image.map((images, i) => {  
            return (
              <div className="photo-detail-images-each" key={i}>
                <img src={images} alt=""></img>
              </div>
            );
          })
        }
        </div>
      </div> 
      );
    } else {
      return null;
    }
  }
}

export default PhotoDetail;