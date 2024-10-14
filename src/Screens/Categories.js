import React from 'react'
import m1 from '../Images/Premium Photo _ Front view book pile.jpeg'
import m2 from '../Images/8c6ae8dd-05cd-4347-baaa-e98db8676ff8.jpeg'
import m3 from '../Images/Free Photo _ Front view of hardback books in the library.jpeg'
import m4 from '../Images/Download free image of Woman reading a blank notebook at home  by Karolina _ Kaboompics about reading, cozy, book, autumn photos, and cozy at home 2396420.jpeg'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'


const Categories = () => {
  return (
    <div>
        <Header/>
        <div className="courses-overview">

            <div className="text c-text">
                <h2>Resources 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nemo hic soluta dolore.</p>
            </div>

            <div className="course">
                <img src={m1} alt="" />
                <div className='cont'>
                    <div>
                        <p>Publishing Industry</p>
                        <h3>The Data Science Course</h3>
                        <Link to='/courseInfo'><h6>Read more</h6></Link>
                    </div>
                    
                </div>
            </div>

            <div className="course">
                <img src={m2} alt="" />
                <div className='cont'>
                    <div>
                        <p>Publishing Industry</p>
                        <h3>The Data Science Course</h3>
                        <Link to='/courseInfo'><h6>Read more</h6></Link>
                    </div>
                    
                </div>
            </div>

            <div className="course">
                <img src={m3} alt="" />
                <div className='cont'>
                    <div>
                        <p>Publishing Industry</p>
                        <h3>The Data Science Course</h3>
                        <Link to='/courseInfo'><h6>Read more</h6></Link>
                    </div>
                    
                </div>
            </div>

            <div className="course">
                <img src={m4} alt="" />
                <div className='cont'>
                    <div>
                        <p>Publishing Industry</p>
                        <h3>The Data Science Course</h3>
                        <Link to='/courseInfo'><h6>Read more</h6></Link>
                    </div>
                    
                </div>
            </div>


            {/*  */}

            <br />
            <br />

            <div className="text c-text">
                <h2>Resources 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nemo hic soluta dolore.</p>
            </div>

            <div className="course">
                <img src={m1} alt="" />
                <div className='cont'>
                    <div>
                        <p>Publishing Industry</p>
                        <h3>The Data Science Course</h3>
                        <Link to='/courseInfo'><h6>Read more</h6></Link>
                    </div>
                    
                </div>
            </div>

            <div className="course">
                <img src={m2} alt="" />
                <div className='cont'>
                    <div>
                        <p>Publishing Industry</p>
                        <h3>The Data Science Course</h3>
                        <Link to='/courseInfo'><h6>Read more</h6></Link>
                    </div>
                    
                </div>
            </div>

            <div className="course">
                <img src={m3} alt="" />
                <div className='cont'>
                    <div>
                        <p>Publishing Industry</p>
                        <h3>The Data Science Course</h3>
                        <Link to='/courseInfo'><h6>Read more</h6></Link>
                    </div>
                    
                </div>
            </div>

            <div className="course">
                <img src={m4} alt="" />
                <div className='cont'>
                    <div>
                        <p>Publishing Industry</p>
                        <h3>The Data Science Course</h3>
                        <Link to='/courseInfo'><h6>Read more</h6></Link>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Categories