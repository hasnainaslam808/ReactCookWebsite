import React from 'react'
import { LuFacebook } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs"
import { FiTwitter } from "react-icons/fi"
import { AiOutlineLinkedin } from "react-icons/ai"
import person from '../images/Rectangle 34.png' 
import star from '../images/star.png'


function Footer() {
    return (
        <>
            <div className='container bg1'>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className='text-center pt-5 justify-content-center text-align-center' >
                            <p className='foot cook pt-3'>COOK</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 pt-5 text-center">
                        <p className='foot2'> ABOUT US</p>
                        <p className='foot3'>Who we are</p>
                        <p className='foot3'>How It works</p>
                        <p className='foot3'>COOK reviews</p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 pt-5 text-center">
                        <p className='foot2'>FOR STUDENTS</p>
                        <p className='foot3'>COOK Blog</p>
                        <p className='foot3'>Find Tutor</p>

                    </div>
                    <div className="col-lg-2 col-md-6 col-12 pt-5 text-center">
                        <p className='foot2'>FOR TUTORS</p>
                        <p className='foot3 '>Become an online Chef</p>
                        <p className='foot3'>Teach cooking online</p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12  pt-5 text-center">
                        <p className='foot2'>SUPPORTS</p>
                        <p className='foot3'>Need help?</p>
                    </div>
                    <hr />
                </div>
                <div className='row'>
                    <div className="col-lg-4 col-md-6 col-12 text-center ">
                        
                        <p className='foot3'>USA</p>
                        <p className='foot3'>Your Adress goes there</p>
                        <p className='foot3'>+0000000000000000</p>
                    
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 text-center pt-2">
                        <p className='foot2'>COOK'S SOCIAL</p>
                        <div className='icon'>
                            <BsInstagram fontSize={25} />
                            <FiTwitter fontSize={35} className='ps-2' />
                            <LuFacebook fontSize={35} className='ps-2' />
                            <AiOutlineLinkedin fontSize={45} className='ps-2' />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12 text-center pt-2">
                        <p className='foot2'>LEGAL</p>
                        <p className='foot3'>Terms of Services</p>
                        <p className='foot3'>Privacy and Policy</p>
                    </div>
                    <div className="col-lg-4 col-md-3 col-12 text-center">
                        <div>
                            <p className='foot3 text-white pt-5 mt-5'>Copyright@2023</p>
                        </div>
                    </div>

                </div>
            </div>
          
        </>
    )
}

export default Footer