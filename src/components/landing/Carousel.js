import React from 'react';
 
class Carousel extends React.Component {
  render() {
    return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner carousel__content">
      <div className="carousel-item active">
        <img src="https://i.imgur.com/l49aYS3.jpg" className="d-block w-100 carousel__image" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://i.imgur.com/QyspieK.jpeg" className="d-block w-100 carousel__image" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://i.imgur.com/emBm6jv.jpg" className="d-block w-100 carousel__image" alt="..."/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
      )
  } 
  }

export default Carousel;
  