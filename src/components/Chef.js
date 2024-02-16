import React from 'react'
import img41 from '../images/Rectangle 23.png'
import img42 from '../images/check.png'
import { FiInfo } from "react-icons/fi"
import img43 from '../images/Rectangle 32.png'
import img44 from '../images/check2.png'

function Chef() {
  return (
    <>
    <div className='container'>
        <div className="row">
        <p className='cardp'>Become A Chef</p>
            <div className='col-lg-6 col-12 mt-3'>
                <p className='ben2'>Share your culinary secrets, inspire cooking enthusiasts worldwide, and grow your career like never before. Our platform offers a unique way to connect, teach, and earn.</p>
               <div className='d-flex text-start'>
               <img src={img42} className='h-50' alt="" /><p>Build Your Brand. Showcase your culinary skills and build your brand within our community.</p> 
               </div>
               <div className='d-flex text-start'>
              <img src={img42} className='h-50' alt="" /><p>Expand Your Reach. Connect with cooking enthusiasts across the globe and expand your audience beyond geographical limits.</p>
              </div>
              <div className='d-flex text-start'>
              <img src={img42} className='h-50' alt="" /> <p>Grow Your Business Faster. Utilize our platform's features and resources to accelerate your growth and increase your income.</p> 
              </div>
              <div className='bt1  text-white me-3'>Become A Chef</div>
              <div className='d-flex mt-4'>
              <FiInfo className='down1' fontSize={25}/>
              <input type="text" placeholder='Search tutor by category' className='cardp1 ps-1' />
              </div>
            
            </div>
            <div className="col-lg-6 col-12">
                <div className='text-center mt-3'>
                <img src={img41} alt="" className='w-100' />
                </div>
            </div>
        </div>

    </div>
    <div className='container pt-5 mt-5'>
        <div className="row">
            <div className="col-lg-6 col-12 pe-0">
                <div className='text-center'>
                <img src={img43} className='w-100' alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-12 bg4">
                <div className='text-center mt-5'>
                <p className='student'>Become A Student</p>
                <p className='text-start ps-3 stud1'>Kick-start your culinary adventure with COOK. We provide a space for cooking enthusiasts of all levels to learn, explore, and master culinary arts from professional chefs worldwide. So dive in and transform your kitchen into a playground of flavors.</p>
                <div className='d-flex text-start ps-3 stud1'>
                <img src={img44} className='h-50' alt="" /><p>Diverse Classes: Access a wide variety of classes catering to all skill levels and culinary interests.</p>
                </div>
                <div className='d-flex text-start ps-3 stud1'>
                <img src={img44} className='h-50' alt="" /><p>World-Class Chefs: Learn directly from professional chefs sharing their unique culinary secrets.</p>
                </div>
                <div className='d-flex text-start ps-3 stud1'>
                <img src={img44} className='h-50' alt="" /><p>Interactive Learning: Ask questions and receive real-time feedback in our interactive classes.</p>
                </div>
                <div className='stud2 ms-3 mb-3'>Become A Chef</div>

                </div>
               
            </div>
        </div>

    </div>
    </>
  )
}

export default Chef