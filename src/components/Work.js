import React from 'react'
import img31 from '../images/Rectangle 25.png'
import img32 from '../images/Vector 12.png'
import img17 from '../images/search.png'
import img33 from '../images/Rectangle 26.png'
import img34 from '../images/Rectangle 27.png'
import img23 from '../images/image 14.png'

function Work() {
    return (
        <>

        {/* -----work1----- */}
            <div className='container'>
                <div className='row'>
                    <div>
                        <p className='cardp'> <img src={img32} alt="" /> How It Works</p>
                        <p className='advanp ms-5 ps-5'>Getting Started with the COOK Platform</p>
                        <div className='d-flex justify-content-end'>
                            <img src={img17} className='h-100' alt="" />
                            <input type="text" placeholder='Search tutor by category' className='cardp1 ps-1' />
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div id='work2'>
                            <img src={img31} alt=""  className='w-100' />
                        </div>
                        <div id='work1'>
                            <p className='bt5' >1</p>
                        </div>

                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='pt-5'>
                            <div className='card-body'>
                                <p className='ben1'>Explore Our Culinary Experts</p>
                                <p className='ben2'>Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.</p>
                                <div className='bt1  text-white me-3'>Browse Tutor</div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            {/* -------work2------ */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <p className='ben1'>Select Your Perfect Match </p>
                        <p className='ben2'>Once you've explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier.</p>

                    </div>
                    <div className="col-lg-6 col-12">
                        <div id='wor1'>
                            <p className='bt5' >2</p>
                        </div>
                        <img src={img33} alt="" id='wor2' className='w-100' />
                    </div>
                </div>
            </div>
            {/* ----------work3-------- */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div>
                            <p className='bt5' id='word1' >3</p>
                            <img src={img34} alt="" id='word2' className='wrap mt-lg-0 mt-md-0 mt-4' />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-start">
                        <p className='ben1'>Enjoy Your Interactive Lesson</p>
                        <p className='ben2'>Step into your online kitchen and start cooking! Our lessons are designed to be fun and interactive, enabling you to learn directly from the experts. After the class, you can review your experience and track your progress.</p>
                        <div className='bt1  text-white me-3'>Sign Up For Free</div>
                    </div>
                </div>
            </div>
            {/* ---------money back card------ */}
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                    <div className='text-center'>
                        <img src={img23} className='bg3 mt-5 p-2' id='card1' alt=""  />
                        <div className='align-item-center justify-content-center d-flex' id='card2'>
                        <div className='card advancardz '>

                            <div className='card-body'>
                                <p className='ben1'>Money-back guarantee</p>
                                <p className='ben2'>We believe you'll enjoy your first cooking lesson. However, we've got your back if anything goes differently than expected. Our money-back guarantee ensures you can take the first step with complete confidence.</p>
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

export default Work