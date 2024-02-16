import React from 'react'
import img1 from "../images/pan.jpg"
import img2 from "../images/img-12.jpg"
import img3 from "../images/img-13.jpg"
import { CiLogin } from "react-icons/ci";
import { FiInfo } from "react-icons/fi"
import img4 from '../images/Vector2.jpg'


const Navbar = () => {
    return (
        <>
            {/* <div className="container-fluid">


                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand " href="#"><h4 className='navbar-content'> Cook </h4></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav d-flex">
                                <li class="nav-item">
                                    <a class="nav-link d-inline-flex">
                                        <img src={img1} alt="" className=' h-25' />
                                        <p className='nav mx-2' style={{ fontWeight: "700" }}>Cooking Classes</p>

                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link d-inline-flex">
                                        <img src={img2} alt="" className=' h-25' />
                                        <p className='nav mx-2' style={{ fontWeight: "700" }}>Become a Chef</p>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link  d-inline-flex">
                                        <img src={img3} alt="" className=' h-25' />
                                        <p className='nav mx-2' style={{ fontWeight: "700" }}>Group cooking</p>
                                    </a>
                                </li>



                            </ul>
                            <div >
                                <div className="d-flex align-items-center justify-content-end">

                                    <div className='d-lg-flex d-none'>

                                        <div>
                                            <a class="nav-link mx-2 dropdown-toggle downs" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                                Eng
                                            </a>
                                            <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">USD</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">EUR</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                        </div>
                                        <div>
                                            <div class="nav-link mx-2 dropdown-toggle downs" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                                USD
                                            </div>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">USD</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">EUR</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">UAH</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">GBP</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">CHF</a></li>
                                            </ul>

                                        </div>
                                        <img src={img4} alt="" />

                                        <FiInfo className='down1' fontSize={25} />
                                        <img src={img4} alt="" />

                                    </div>
                                    <button type='button' class=" nab1  " >
                                        <span className='nab2 navbar-brand d-flex'>Log In<CiLogin className='mt-1' /></span>
                                    </button>
                                </div>
                            </div>



                        </div>
                    </div>
                </nav>


            </div> */}
            <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><h4 className='navbar-content'> Cook </h4></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <div className='d-flex'>
                                        <img src={img1} alt="" className=' h-25' />
                                        <p className='nav nowrapone' style={{ fontWeight: "700" }}>Cooking Classes</p>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="#">
                                    <div className='d-flex '>
                                        <img src={img2} alt="" className=' h-25' />
                                        <p className='nav nowrapone' style={{ fontWeight: "700" }}>Become a Chef</p>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <div className='d-flex'>
                                        <img src={img3} alt="" className=' h-25' />
                                        <p className='nav nowrapone' style={{ fontWeight: "700" }}>Group cooking</p>
                                    </div>
                                </a>
                            </li>

                          
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ENG
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    USD
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">USD</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">EUR</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">UAH</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">GBP</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">CHF</a></li>
                                </ul>
                            </li>
                    

                        </ul>

                        <div className='d-flex'>
                            <div className='d-lg-flex d-none'>
                            <img src={img4} className='me-2 p-1' alt="" />
                            <FiInfo className='down1 mt-2 me-2' fontSize={25} />
                            <img src={img4} className='me-2 p-1' alt="" />
                            </div>
                            <button class="nab1" type="button">
                                <span className='nab2 navbar-brand d-flex'>Log In<CiLogin className='mt-1' /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            </div>

        </>

    )
}

export default Navbar