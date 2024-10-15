import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Browse = () => {

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // Number of items to show
    slidesToScroll: 1, // Number of items to scroll at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="browse">
        <h3>Browse Our Categories</h3>
        <p>Choose from wide varieties</p>
        
        <Slider {...settings} className='cards'> {/* Add Slider component */}
          <Link to='/categories' className="card">
            <div>
              <div className="dks"></div>
              <p>Audio Book</p>
            </div>
          </Link>

          <Link to='/categories' className="card c2">
            <div>
              <div className="dks"></div>
              <p>Audio Book</p>
            </div>
          </Link>

          <Link to='/categories' className="card c3">
            <div>
              <div className="dks"></div>
              <p>Audio Book</p>
            </div>
          </Link>

          <Link to='/categories' className="card c4">
            <div>
              <div className="dks"></div>
              <p>Audio Book</p>
            </div>
          </Link>

          <Link to='/categories' className="card">
            <div>
              <div className="dks"></div>
              <p>Audio Book</p>
            </div>
          </Link>

          <Link to='/categories' className="card c2">
            <div>
              <div className="dks"></div>
              <p>Audio Book</p>
            </div>
          </Link>

          <Link to='/categories' className="card c3">
            <div>
              <div className="dks"></div>
              <p>Audio Book</p>
            </div>
          </Link>

          <Link to='/categories' className="card c4">
            <div>
              <div className="dks"></div>
              <p>Audio Book</p>
            </div>
          </Link>
        </Slider>
      </div>
    </div>
  )
}

export default Browse;
