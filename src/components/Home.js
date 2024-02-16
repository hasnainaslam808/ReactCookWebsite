import React from 'react'
// import Font, { pacifico } from 'react-font'
import circle from '../images/play-circle.jpg'
import image from '../images/Hero Img.png'
import img from "../images/img-1.jpg"
import { FiArrowUpRight } from "react-icons/fi";
import person from '../images/Rectangle 34.png'
import star from '../images/star.png'
import hero from '../images/Hero Vector.png'

function Home() {
    return (

        <>
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-6 col-12 ps-3 '>
                        <span className='p1'>Master the Art of Cooking with</span><span className='expert'> Experts</span><span className='p1'>Worldwide</span>
                        <p className='p2 mt-3 text-start'>Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.</p>
                        <span><img src={circle} alt="img" /></span><span className='p3'>Learn more in the COOK video</span>

                        <div className='mt-4'>
                            <div className='bt1  text-white me-3'>Find Your Tutor</div>
                            <div className='bt1 text-white' id='btn'>Join Our Chefs</div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 pt-sm-4'>
                        <img src={image} className='hero' id='hero2' alt="" />
                        <div id='hero1'>
                        <div className='card person' >
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src={person} alt="" />
                                    </div>
                                    <div className='col-8'>
                                        <p className='foot2'>David Mitchel</p>
                                        <span className='foot2'>4.8 <img src={star} className='h-25' alt="" /></span>
                                    </div>
                                    <p className='person1'>I've discovered a whole new world of flavors. Learning to cook has never been this fun and engaging!</p>

                                </div>

                            </div>

                        </div>
                        {/* <img src={hero} alt="" /> */}
                        </div>


                    </div>
                </div>
            </div>

            <div id='cam1' className='vector mt-5 position-relative'>
            </div>
            <div className='container'>
                <div className='row justify-content-center mt-lg-0 mt-md-0 mt-5'>
               
                    <div class="col-lg-10 col-md-10 col-12 py-5 rounded-4 " style={{border:'1px solid #D27722', backgroundColor:' #FFDBB8'}} >
                        <div class="card-body text-center px-5">
                            <div className='row'>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div>
                                        <div class="card-body">
                                            <h1 className='text-center txt'>100+</h1>
                                            <p className='text-center'>Talented Chefs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div>
                                        <div class="card-body">
                                            <h1 className='text-center txt'>1000+</h1>
                                            <p className='text-center'>Students</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div>
                                        <div class="card-body">
                                            <h1 className='text-center txt'>4.8</h1>
                                            <p className='text-center'>Rating</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div>
                                        <div class="card-body">
                                            <h1 className='text-center txt'>20+</h1>
                                            <p className='text-center'>Cooking Categories</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>




            </div>




        </>
    )
}

export default Home