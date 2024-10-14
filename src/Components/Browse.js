import React from 'react'
import { Link } from 'react-router-dom'

const Browse = () => {
  return (
    <div>
        <div className="browse">
            <h3>Browse Our Categories</h3>
            <p>Choose from wide varieties</p>
            <div className="cards">
                <Link to='/categories' className="card">
                    <div>
                        <div className="dk"></div>
                        <p>Audio Book</p>
                    </div>
                </Link>

                <Link to='/categories' className="card c2">
                    <div>
                        <div className="dk"></div>
                        <p>Audio Book</p>
                    </div>
                </Link>

                <Link to='/categories' className="card c3">
                    <div>
                        <div className="dk"></div>
                        <p>Audio Book</p>
                    </div>
                </Link>

                <Link to='/categories' className="card c4">
                    <div>
                        <div className="dk"></div>
                        <p>Audio Book</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Browse