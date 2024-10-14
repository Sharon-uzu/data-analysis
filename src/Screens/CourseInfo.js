import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import Header from '../Components/Header';
import m1 from '../Images/Opened Book on a pile of old books Generative AI _ Premium AI-generated image.jpeg'

const CourseInfo = () => {
  return (
    <div>
        <Header/>
        <div className="course-info">

        <div className="abs-cart">
                <img src={m1} alt="" />
                <div>

                    <h3>N50,000</h3>
                    <button>Buy now</button>

                    <h4>This course includes:</h4>
                    <p>
                        <MdOndemandVideo className='c-i'/>
                        <span>52 hours on-demand video</span>
                    </p>

                    <p>
                        <MdOndemandVideo className='c-i'/>
                        <span>52 hours on-demand video</span>
                    </p>

                    <p>
                        <MdOndemandVideo className='c-i'/>
                        <span>52 hours on-demand video</span>
                    </p>

                    <p>
                        <MdOndemandVideo className='c-i'/>
                        <span>52 hours on-demand video</span>
                    </p>

                    <p>
                        <MdOndemandVideo className='c-i'/>
                        <span>52 hours on-demand video</span>
                    </p>
                    
                </div>

            </div>
            
            <div className="top">
                <div className="top-c">
                    <div className="t-c">
                        <h1>100 Days of Code: The Complete Python Pro Bootcamp</h1>
                        <p>Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</p>
                        <h6>Created by <a href="">Dr. Angela C, Lead instructor</a></h6>
                    </div>
       
                </div>

            </div>

            <div className="bottom">

                <div className="b-cont">
                    <div className="b-c">

                        <h3>What you'll learn</h3>
                        <div>
                            <IoCheckmarkOutline className='w-i'/>
                            <span>You will be able to program in Python professionally</span>
                        </div>

                        <div>
                            <IoCheckmarkOutline className='w-i'/>
                            <span>You will be able to program in Python professionally</span>
                        </div>

                        <div>
                            <IoCheckmarkOutline className='w-i'/>
                            <span>You will be able to program in Python professionally</span>
                        </div>

                        <div>
                            <IoCheckmarkOutline className='w-i'/>
                            <span>You will be able to program in Python professionally</span>
                        </div>

                        <div>
                            <IoCheckmarkOutline className='w-i'/>
                            <span>You will be able to program in Python professionally</span>
                        </div>

                        <div>
                            <IoCheckmarkOutline className='w-i'/>
                            <span>You will be able to program in Python professionally</span>
                        </div>
                    </div>
                    
                </div>

            </div>

            
        </div>
    </div>
  )
}

export default CourseInfo