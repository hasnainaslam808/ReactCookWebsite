import React from 'react'
import img from "../images/img-1.jpg"
import img11 from '../images/img-2.png'
import img12 from '../images/img-3.jpg'
import img13 from '../images/img-4.jpg'
import img14 from '../images/img-5.jpg'
import img15 from '../images/img-6.jpg'
import img16 from '../images/Rectangle 16.png'
import img17 from '../images/search.png'
import img18 from '../images/arrow-down-circle.png'

function Cards() {
    return (
        <>
            <div className='container'>
                 <div class="card mt-4" id='vegan'  >

                    <div class="card-body">
                        <div className='row'>
                            <div className='col-4'>
                                <img src={img} alt="" className='w-75' />
                            </div>
                            <div className='col-8'>
                                
                                <h5 class="card-title">Vegan Cooking</h5>
                                <p class="card-text">Create delicious, nutritious meals with plant-based ingredients</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-8 col-md-8 col-12'>
                        <div className='d-flex'>
                            <img src={img16} className='h-100' alt="" />
                            <h1 className=' cardp'>Explore And Learn</h1>
                        </div>
                        <p className='p2 ps-5'>Dive into a range of cooking styles and techniques tailored to your interests</p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12'>
                        <div className='d-flex pt-5 justify-content-end'>
                            <img src={img17} className='h-100' alt="" />
                            <input type="text" placeholder='Search tutor by category' className='cardp1 ps-1' />
                        </div>
                    </div>
                </div>

            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 '>
                        <div class="card bg1" >
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src={img11} alt="" className='w-75' />
                                    </div>
                                    <div className='col-8'>
                                       
                                        <h5 class="card-title">Bakery</h5>
                                        <p class="card-text">Master baking: bread to delicate pastries</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                      
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div class="card cardd bg2 mt-2" >
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src={img15} alt="" className='w-75' />
                                    </div>
                                    <div className='col-8'>
                                       
                                        <h5 class="card-title">BBQ & Grilling</h5>
                                        <p class="card-text">Fire up your skills with BBQ dishes</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 '>
                        <div class="card cardd bg2 mt-2" >
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src={img} alt="" className='w-75' />
                                    </div>
                                    <div className='col-8'>
                                        
                                        <h5 class="card-title">Vegan Cooking</h5>
                                        <p class="card-text">Create delicious, nutritious meals </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                      

                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div class="card cardd mt-2" >
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src={img14} alt="" className='w-75' />
                                    </div>
                                    <div className='col-8'>
                                       
                                        <h5 class="card-title">Whine Pairing</h5>
                                        <p class="card-text">Enhance culinary experiences by mastering</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 '>
                        <div class="card cardd mt-2" >
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src={img12} alt="" className='w-75' />
                                    </div>
                                    <div className='col-8'>
                                        
                                        <h5 class="card-title">Seafood Mastery</h5>
                                        <p class="card-text">Dive into seafood: from grilling fish</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                       
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div class="card cardd mt-2" >
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-4'>
                                        <img src={img13} alt="" className='w-75' />
                                    </div>
                                    <div className='col-8'>
                                       
                                        <h5 class="card-title">Cake Decoraiting</h5>
                                        <p class="card-text">Unleash creativity with cake decorating</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='d-flex pt-5 justify-content-end'> 
                          <p className='cardp1'>Search More</p>              
                         <img src={img18} className='h-50 mt-1' alt="" />
                    </div>
  
                </div>
            </div>


        </>
    )
}

export default Cards