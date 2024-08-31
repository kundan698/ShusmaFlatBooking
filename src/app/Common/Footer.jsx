import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
        <section className='bg-[#104367] p-4'>
            <div className='max-w-[1170px] mx-auto '>
               <div className='text-center  p-4 btm'>
               <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/footerlogo-m57807hP.png" alt=""  className='w-[300px] h-[100px]'/>
               </div>

               <div>
                <ul className='flex text-white font-[600] justify-center uppercase gap-7 mt-5'>
                    <li>about us</li>
                    <li>products</li>
                    <li>location map</li>
                    <li>floor plans</li>
                    <li>price</li>
                    <li>amenties</li>
                    <li>gallery</li>
                    <li>faq</li>
                    <li>contact us</li>
                </ul>
               </div>
               <div className='flex justify-center gap-6 text-white mt-10'>
                <div className='flex gap-4 '>
                    <p className='p-1 text-[20px]'><BiPhoneCall /></p>
                    <p>+919693627042</p>
                </div>
                <div className='flex gap-4 '>
                    <p className='p-1 text-[20px]'><BiPhoneCall /></p>
                    <p>+919693627042</p>
                </div>
                <div className='flex gap-4 text-[20px] text-white'>
                    <p><FaInstagram /></p>
                    <p><IoLogoTwitter /></p>
                    <p><FaYoutube /></p>
                    <p><FaLinkedinIn /></p>
                    <p><FaFacebookF /></p>
                </div>
               </div>

               <div>
                  <div className='flex gap-5 mt-10'>
                    <h3 className='text-white uppercase text-[20px] font-bold'>Sales Partner </h3>
                    <p className='text-white font-bold  text-[30px]'><BsSendFill /></p>
                    <h4 className='text-white text-[18px] font-bold'>
                    <span className='text-orange-600 text-[18px] font-bold'> Reality</span>
 
                   <span className='text-teal-700 text-[18px] font-bold'> Nivesh : </span>
                    Showroom No. 12 level 2, UPTOWN INSIGNIA PR-7 Airport Road, Zirakpur, Punjab</h4>

                   
                  </div>
               </div>
             
            </div>
        </section>
        <section className=''>
            <div className='flex justify-between text-[14px] text-[#357CAD] cursor-pointer font-[600] mx-10'>
                <div className='flex gap-7 p-4'>
                    <p>Disclaimer</p>
                    <p>Term & conditions
                    </p>
                    <p>Privacy policy</p>
                </div>
                <div className=' p-4'>
                    <p>© Copyright 2024 sushma GROUP. REALTY NIVESH All Rights Reserved</p>
                </div>


            </div>
        </section>

    </div>
  )
}
