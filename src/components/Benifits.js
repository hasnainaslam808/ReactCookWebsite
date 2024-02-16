import React from 'react'
import img21 from '../images/image 12.png'
import img22 from '../images/image 13.png'
import img23 from '../images/image 14.png'
import { RxDividerVertical } from "react-icons/rx";
import img24 from '../images/Rectangle 17.png'
import img25 from '../images/Rectangle 20.png'
import img26 from '../images/Rectangle 21.png'
import img27 from '../images/Rectangle 22.png'
import img28 from '../images/arrow.png'

function Benifits() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='text-center'>
                        <p className='cardp'>Our Unique Benifits</p>
                        <p className='cardp1'>Experience the perks of learning and teaching cooking on our platform</p>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <div className='d-flex'>
                            <div className='text-center'>
                                <img src={img21} className='bg3 p-2' alt="" />
                                <p className='ben1'>Experts Chef</p>
                                <p className='ben2'>Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.</p>
                            </div>
                            <RxDividerVertical fontSize={300} color='orange' id='vector' />
                        </div>
                    </div>


                    <div className='col-lg-4 col-12'>
                        <div className='d-flex'>
                            <div className='text-center' >
                                <img src={img22} className='bg3 p-2' alt="" />
                                <p className='ben1'>Save Time And Money</p>
                                <p className='ben2'>Embrace the convenience of learning from home. Save time on travel, reduce dining-out expenses, and master your kitchen with our online cooking classes.</p>
                            </div>
                            <RxDividerVertical fontSize={300} color='orange' id='vector' />
                        </div>
                    </div>

                    <div className='col-lg-4 col-12'>
                        <div className='text-center'>
                            <img src={img23} className='bg3 p-2' alt="" />
                            <p className='ben1'>Accessible Cooking</p>
                            <p className='ben2'>Start your culinary journey with ease. Our user-friendly platform makes navigation simple, letting you focus on learning and enjoying your online cooking classes.</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <div id='ben2' className='justify-content-center text-center'>
                            <img src={img24} className='h-50 w-100' alt="" />
                        </div>
                        <div class="card advancards bg4"id='ben1' >
                            <div class="card-body  text-center">
                                <p class="advancardp text-end">Level Up <img src={img28} alt="" /></p>
                                <p class="advanp2">Take your culinary skills to new heights. Our platform provides you with the expert guidance you need to refine your skills and cook like a pro </p>
                               
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-12 mt-3'>
                        <p className='advan'>Other Advantages</p>
                        <div class="card advancard mt-2">
                            <div class="card-body">
                                <div className='d-flex'>
                                    <img src={img25} alt="" className='h-75' />
                                    <h5 class="advanh ps-1">Diverse Range of Classes</h5>
                                </div>
                                <p class="advanp ms-4">Explore the culinary world with our vast array of online cooking classes. Whether you're a beginner or a seasoned cook, we have a class that suits your skill level and interests.</p>

                            </div>
                        </div>
                        <div class="card advancard mt-2">
                            <div class="card-body">
                                <div className='d-flex'>
                                    <img src={img26} alt="" className='h-75' />
                                    <h5 class="advanh ps-1">Opportunity to Teach</h5>
                                </div>
                                <p class="advanp ms-4">Share your culinary wisdom. If you're an experienced cook, our platform allows you to teach your classes, reach a global audience, and earn income.</p>

                            </div>
                        </div>
                        <div class="card advancard mt-2">
                            <div class="card-body">
                                <div className='d-flex'>
                                    <img src={img27} alt="" className='h-75' />
                                    <h5 class="advanh ps-1">Interactive Lessons</h5>
                                </div>
                                <p class="advanp ms-4">Engage in real-time with expert chefs. Our interactive online cooking classes allow you to ask questions, receive instant feedback, and learn hands-on from the pros.</p>

                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default Benifits