import React from 'react'
import img51 from '../images/Rectangle 15.png'
import img52 from '../images/pizza.jpg'
import img53 from '../images/calendar.png'
import img54 from '../images/tacos.jpg'
import img55 from '../images/icecream.jpg'
import img56 from '../images/steak.jpg'

function Blog() {
    return (
        <>
            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex'>
                            <img src={img51} className='h-50' alt="" />
                            <p className='ben1'>Popular online classes</p>
                        </div>
                        <div className='pt-5'>
                            <p className='ben2'>Find a tutor by category</p>
                            
                                <span className='btn  tags me-3 mt-2'>Bakery</span>
                                <span className='btn tags me-3 mt-2'>Japanease Sushi Making</span>
                                <span className='btn tags me-3 mt-2'>Thai</span>
                                <span className='btn tags me-3 mt-2'>SeaFood</span>
                                <span className='btn tags me-3 mt-2'>Italian Cusine</span>
                                <span className='btn tags me-3 mt-2'>Vegan</span>
                                <span className='btn tags me-3 mt-2'>BBQ&Grilling</span>

                            

                        </div>
                        <div className='mt-5 pt-5'>
                            <p className='ben2'>Find a tutor by country</p>
                            
                                <span className='btn  tags me-3 mt-2'>USA</span>
                                <span className='btn tags me-3 mt-2'>Spain</span>
                                <span className='btn tags me-3 mt-2'>France</span>
                                <span className='btn tags me-3 mt-2'>Mexico</span>
                                <span className='btn tags me-5 mt-2'>Germany</span>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className='d-flex mt-4'>
                            <img src={img51} className='h-50' alt="" />
                            <p className='ben1'>COOK Blog </p>
                        </div>
                        <div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 text-center justify-content-center col-12' >
                                <div class="card cardz" >
                                    <img src={img52} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <div className='d-flex'>
                                            <img src={img53} className='h-50' alt="" />
                                            <p className='p-1'>24 Apr,2023</p>
                                        </div>
                                        <p class="ben2">Mastering the Art of Homemade Pizza</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 text-center justify-content-center col-12'>
                            <div class="card cardz" >
                                    <img src={img54} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <div className='d-flex'>
                                            <img src={img53} className='h-50' alt="" />
                                            <p className='p-1'>24 Apr,2023</p>
                                        </div>
                                        <p class="ben2">How to Prepare Authentic Mexican Tacos</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 text-center justify-content-center col-12'>
                                <div class="card cardz" >
                                    <img src={img55}  alt="..." />
                                    <div class="card-body">
                                        <div className='d-flex'>
                                            <img src={img53} className='h-50' alt="" />
                                            <p className='ps-1'>24 Apr,2023</p>
                                        </div>
                                        <p class="ben2">Delectable Homemade Ice Cream</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 text-center justify-content-center col-12'>
                            <div class="card cardz pt-2" >
                                    <img src={img56} class="" alt="..." />
                                    <div class="card-body">
                                        <div className='d-flex'>
                                            <img src={img53} className='h-50' alt="" />
                                            <p className='p-1'>24 Apr,2023</p>
                                        </div>
                                        <p class="ben2">Tips and Techniques for a Restaurant-Quality Steak</p>

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

export default Blog