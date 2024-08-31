"use client"
import React, { useState } from 'react'
import Swipper from './Swipper/Swipper'
import Fade from './Swipper/Swipper'
import { LuLayoutPanelLeft } from "react-icons/lu";
import { TfiTimer } from "react-icons/tfi";
import { BsGift } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { GrDocument } from "react-icons/gr";
import { MdBalance } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaKey } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import Responsive from './Carousel/Carousel1';
import VerticalMode from './Carousel/Carousel2';
import Carousel2 from './Carousel/Carousel2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaStar } from "react-icons/fa";
import Carousel3 from './Carousel/Carousel3';
import { questions } from './Faq/Faq';
import { BsArrowRightCircle } from "react-icons/bs";
import { SlArrowDownCircle } from "react-icons/sl";
import { MdOutlineLeaderboard } from "react-icons/md";
import Carousel4 from './Carousel/Carousel4';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";


export default function HomePage() {
   let [faqData,setFaq]=useState(questions[0].id)
   let FaqItem = questions.map((item,index)=>{
      return(
        <div>
            <div className='profile fixed p-2'>
                <p className='text-[10px] text-center'>Need immediate <br /> assistance</p>
                <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/agenticon-f8gZCgQM.png" alt="" className='w-[80px]' />
                <p className='text-[10px] text-center '><span className='text-[#357CAD] text-[10px]'>pavan kumar</span> <br />Reality Nivesh</p>
            </div>
        <div className='ab  p-2 mt-10  bg-[#357CAD]'>
          <div>
          <h2 onClick={()=>setFaq(item.id)} className='text-white cursor-pointer  p-3 relative  '>{item.question}
           
            {item.id==faqData ?<SlArrowDownCircle  className=' absolute right-5 text-[30px] top-3'/> : <BsArrowRightCircle  className='absolute right-5 text-[30px] top-3 '/>}
          
          

          </h2>
          </div>
           <div className='text-white'>
               <p className={`show ${item.id==faqData ? 'showAns': '' }`}>{item.answer}</p>
           </div>
        </div>
      </div>
      )
   })
    
  return (
    <div>
      
        <section>
            <div className='w-[100%] grid grid-cols-[40%_60%] h-screen'>
                <div className='headers text-white'>
                   <div>
                    <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/Group%203960-BLB6eVGP.png" alt="" />
                    <div>
                        <h2 className='text-[40px] font-semibold uppercase mx-10'>we make <br />homes that <br /> understand <br /> you</h2>

                        <button className='see'>see all projects</button>
                        
                    </div>

                    

                   </div>
                   
                </div>
                <div className='w-[95%] h-[100vh]'>
                    <Carousel2/>
                </div>
               
               
              
            </div>
        </section>

        <section className='bg-[#357CAD]  mt-10'>
          
            <div className='max-w-[1170px] mx-auto grid grid-cols-2 '>
                <div className='text-white  bdr'>
                   <div className='flex gap-3 p-8'>
                   <div>
                        <p className='text-[50px] pt-2'><LuLayoutPanelLeft /></p>
                    </div>
                    <div>
                        <h4 className='text-[30px] font-bold'>100+</h4>
                        <p className='text-[14px]'>DELIVERY OF HOMES AND BUSINESS SPACES/MONTH</p>
                    </div>
                   </div>
                  <div className='bd1'>
                    <h5 className='bd2'></h5>

                  </div>
                  <hr  className='w-[672px]'/>
                   
                </div>
               


                <div className='text-white '>
                   <div className='flex gap-3 p-8'>
                   <div>
                        <p className='text-[50px] pt-2'><LuLayoutPanelLeft /></p>
                    </div>
                    <div>
                        <h4 className='text-[30px] font-bold'>100+</h4>
                        <p className='text-[14px]'>DELIVERY OF HOMES AND BUSINESS SPACES/MONTH</p>
                    </div>
                   </div>
                   <hr  className='w-[672px]'/>
                  
                   
                </div>
                <div className='text-white  bdr'>
                   <div className='flex gap-3 p-8'>
                   <div>
                        <p className='text-[50px] pt-2'><LuLayoutPanelLeft /></p>
                    </div>
                    <div>
                        <h4 className='text-[30px] font-bold'>100+</h4>
                        <p className='text-[14px]'>DELIVERY OF HOMES AND BUSINESS SPACES/MONTH</p>
                    </div>
                   </div>
                 
                   
                </div>
                <div className='text-white  '>
                   <div className='flex gap-3 p-8'>
                   <div>
                        <p className='text-[50px] pt-2'><LuLayoutPanelLeft /></p>
                    </div>
                    <div>
                        <h4 className='text-[30px] font-bold'>100+</h4>
                        <p className='text-[14px]'>DELIVERY OF HOMES AND BUSINESS SPACES/MONTH</p>
                    </div>
                   </div>
                   
                </div>

            </div>

            

        </section>
        <section className='my-[50px]'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-2 gap-8'>
                <div>
                    <div>
                        <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/46f00ea88134fb2e0b90c47f7672bd3e-CTda4t-G.png" alt="" className='w-[500px] h-[500px]' />
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='text-[#1E6DA4] text-[40px] mb-10 '>About <br />
                        Sushma Group</h3>
                        <p className='mb-6'>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, Lorem Ipsum is simply <br /> dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <h5 className='text-[40px]  text-slate-400'>WE PROVIDE YOU THE <br /> BEST EXPERIENCE</h5>
                    </div>
                    <div className='bg-[#357CAD] brt flex gap-5 p-4 text-center'>
                        <div className='tex'>
                           <h5 className='text-white text-[20px] font-bold'>100+</h5>
                           <p className='text-white text-[12px]'>Completed project</p>
                        </div>
                        <div className='tex'>
                           <h5 className='text-white text-[20px] font-bold '>100+</h5>
                           <p className='text-white text-[12px]'>Completed project</p>
                        </div>
                        <div className='tex'>
                           <h5 className='text-white text-[20px] font-bold'>100+</h5>
                           <p className='text-white text-[12px]'>Completed project</p>
                        </div>
                        <div className=''>
                           <h5 className='text-white text-[20px] font-bold pt-2'>100+</h5>
                           <p className='text-white text-[12px]'>Completed project</p>
                        </div>
                    </div>
                    <div className='rt'></div>
                </div>

            </div>
        </section>
        <section className='mt-10'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-[40%_auto] gap-8 relative' >
                 
                <div className=''>
                    <div className='shdw  absolute left-[0px] top-[40px]'>
                        <h1 className='text-[50px] text-[#767676] mt-4 text-center '>PASSION FOR</h1>
                        <h1 className='text-[50px] text-[#357CAD] p-4 text-center'>PERFECTION</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/685ddec8f310242e1fd0a6a4bc54c0c8-CcEGxz4J.png" alt=""  className='rounded-lg'/>
                    </div>
                </div>

            </div>
        </section>
        <section className='mt-10'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-[30%_auto]'>
                <div>
                    <div className='h-[200px]'>
                        <img src="/sushmagroup/videos/whysushmavideo.mp4" alt="" />
                    </div>
                </div>


            </div>

        </section>
        <section>
            <div className='max-w-[100%] mx-auto grid grid-cols-[30%_auto]'>
              <div className='htps'>
                <img src="https://media.istockphoto.com/id/147205632/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=sxRQ398SxAjC4FrRombjl46oDGJVdy23T7i3RXO-mww=" alt="" />
              </div>
               <div className='bg-[#357CAD]'>
                <div className='mt-10'>
                  <h3 className='text-white text-[30px] font-[600] pt-7 text-center'>Why Sushma Group</h3>
                  <p className='text-white text-center text-[18px]'>Within the premises of the Sushma Township are reputed Schools.</p>
                </div>
                 <div className='grid grid-cols-2 gap-8 p-4 mt-6'>
                    <div className='quality'>
                     <div className='flex gap-4 p-4'>
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZntUcJAEIbfOPyXDowVgBUIFUgH0gF2YOwgdoAVqB1gBdABlBAriLvJnmYykOyFXD4kz8zOXcJe7i738WYP4L8Rx/F7XI09WsDL3+CWoDq3nucd0CCjgt/WZF8oZ0q2QlfITIml0n+WKeOjYa7Qcy6nAzw9ZIeaokOMLHwDsgXSnWuBjlBlCl2jQ9iMQG3IbrVENULSmshctNIB4gnVtYMbH5oLmw5woQnZK85njL/GRMoyfq5sgroDNGw7Su5QLzt67lzjKN9afv7+IGRtY9WBJkSM6hizaf1tlJh3ji2lARwh2yvP9b22EzYjYN7+PdzhI91ljJXS+zVQt5Dtzwvo7LEZgUMudUF0In8SGyEL6O2ymG0K3Hihf6OcR7LZkTp2VMdc8vV2QB76UeLyqQnqOQwtqGMDCwYlbhunISX5rshCG2Ul32cbsXQdUvKi9pHuXGGZs6yNQPJrzXpqKqRUj4AtwyJuG9ch5RvZA9JzVg2/Qqk9JHYaUrJ6Qxal0p/VVxViGoY10DbJFBKhyQuUX/TNkmGSzSuP2G8kHSvrSHxNWSkT8bT2pPFbHDmy6AEvZgo5ExrXJP+RySj0rhO81f4AzU/2H8MLH8IAAAAASUVORK5CYII=" alt="" />
                        </div>
                        <div>
                            <h5 className='text-white  text-[18px] pt-2'>Quality Construction</h5>
                        </div>
                     </div>
                    </div>
                    <div className='quality'>
                    <div className='flex gap-4 p-4'>
                        <div>
                           <p className='text-[30px] text-white pt-2'><TfiTimer /></p>
                        </div>
                        <div>
                            <h5 className='text-white  text-[18px] pt-2'>Quality Construction</h5>
                        </div>
                     </div>
                    </div>

                    <div className='quality'>
                    <div className='flex gap-4 p-4'>
                        <div className='relative'>
                        <div className='round'></div>
                           <p className='text-[30px] text-white pt-2'><BsGift /></p>
                        </div>
                        <div>
                            <h5 className='text-white  text-[18px] pt-2'>Superior product design, styling & quality</h5>
                        </div>
                     </div>
                    </div>
                    <div className='quality'>
                    <div className='flex gap-4 p-4'>
                        <div className='relative'>
                        <div className='round'></div>
                           <p className='text-[30px] text-white pt-2'><MdOutlineSecurity /></p>
                        </div>
                        <div>
                            <h5 className='text-white  text-[18px] pt-2'>Transparency and trustworthiness</h5>
                        </div>
                     </div>
                    </div>
                    <div className='quality'>
                    <div className='flex gap-4 p-4'>
                        <div className='relative'>
                        <div className='round'></div>
                           <p className='text-[30px] text-white pt-2'><FaRegHandshake /></p>
                        </div>
                        <div>
                            <h5 className='text-white  text-[18px] pt-2'>Mutual Respect</h5>
                        </div>
                     </div>
                    </div>
                    <div className='quality'>
                    <div className='flex gap-4 p-4'>
                        <div className='relative'>
                        <div className='round'></div>
                           <p className='text-[30px] text-white pt-2'><GrDocument /></p>
                        </div>
                        <div>
                            <h5 className='text-white  text-[18px] pt-2'>Commitment to all stakeholders</h5>
                        </div>
                     </div>
                    </div>
                    <div className='quality'>
                    <div className='flex gap-4 p-4'>
                        <div className='relative'>
                        <div className='round'></div>
                           <p className='text-[30px] text-white pt-2'><MdBalance /></p>
                        </div>
                        <div>
                            <h5 className='text-white  text-[18px] pt-2'>Integrity and fairness</h5>
                        </div>
                     </div>
                    </div>
                    <div className='quality'>
                    <div className='flex gap-4 p-4'>
                        <div className='relative'>
                            <div className='round'></div>
                           <p className='text-[30px] text-white pt-2 index1'><HiOutlineLightBulb /></p>
                        </div>
                        <div>
                            <h5 className='text-white  text-[18px] pt-2'>Innovation in product offerings</h5>

                        </div>
                     </div>
                    </div>

                 </div>
              </div>
            
            </div>
        </section>
        <section className='mt-10'>
            <div className='text-center p-4'>
                <h4 className='text-[40px] text-[#357CAD] font-bold'>Our Offering</h4>
                <p className='text-[18px] '>Within the premises of the Sushma Township are reputed Schools.</p>
            </div>

        </section>
        <section className='my-10 tp p-2 cursor-pointer'>
           <div className='max-w-[1170px] mx-auto flex justify-between  text-[20px] uppercase font-bold text-slate-400'>
            <div className='p-3'>
              <h3>residential</h3>
            </div>
            <div className='p-3'>
              <h3>commercial</h3>
            </div>
            <div className='bg-[#357CAD] text-white font-[600] p-3 text-[18px] w-[300px] text-center rounded-[30px] cursor-pointer'>
              <h3>see al projects</h3>
            </div>

           </div>
            
        </section>
        <section className=''>
          <div className='max-w-[100%] mx-auto grid grid-cols-[60%_auto]'>
            <div>
               <div className='relative'>
                <div>
                    <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/circle_img-ClLblvDr.png" alt=""  className='absolute right-3 rot'/>
                </div>
               <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/d172e02422ee757c63b0a92502f6001f-Cd_o3t6P.png" alt=""  className='h-[635px]'/>
               </div>
            </div>

            <div className='grid grid-cols-[80%_auto]'>
                <div>
                    <div className='bg-white shadow-[0px_0px_10px_2px_#ccc] p-4 h-[100%]'>
                         <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/c14334e5e2fd343ccc75a74621dff2fb-eBxvA3oa.png" alt=""  className='w-[150px]  mx-[100px]'/>
                        <div className='upp'>
                        <h3 className='uppercase text-[25px] font-[600] p-3 '>shusma element</h3>
                         <h5 className='uppercase text-[#357CAD] font-bold text-[20px] mx-4'>rera number</h5>
                         <h5 className=' font-bold text-[20px] uppercase mx-4'>pbrera-sas79 pro0680</h5>
                        </div>

                        <div className='upp'>
                        
                         <h5 className='uppercase text-[#357CAD] font-bold text-[20px] mx-4'>offering</h5>
                         <h5 className=' font-bold text-[20px] uppercase mx-4'>3bhk| 3bhk+s | 4bhk+</h5>
                        </div>
                        <div className='upp'>
                        
                        <h5 className='uppercase text-[#357CAD] font-[600] text-[18px] mx-4'>configuration</h5>
                        <h5 className=' font-[600] text-[20px] uppercase mx-4'>low rise g+4 | high-rise g+I7</h5>
                       </div>
                       <div className='upp'>
                        
                        <h5 className='uppercase text-[#357CAD] font-[600] text-[18px] mx-4'>size available</h5>
                        <h5 className=' font-[600] text-[20px] uppercase mx-4'>2800sq ft| 2815 sq ft | 3400sq ft</h5>
                       </div>
                       <div className='flex gap-10 p-6'>
                          <div className='fl1'>
                            <p><MdCall /></p>
                          </div>
                          <div className='fl1'>
                            <p><IoIosSend /></p>
                          </div>
                          <div className='fl1'>
                            <p><IoLogoWhatsapp /></p>
                          </div>
                       </div>
                      <div className='relative'>
                      <button className='explore'>Explore now <MdArrowRightAlt  className='absolute right-[240px] text-[25px] top-[10px]'/></button>
                      </div>
                       
                    </div>
                   
                </div>
                <div>
                    <div className='bg-[#357CAD] p-4 shadow-[0px_0px_10px_2px_#ccc] h-[100%]'>
                      <h2 className='mode'>residental</h2>
                      <div className='text-white text-center'>
                        <p><BsGraphUpArrow  className='mx-6 font-bold text-[25px]'/></p>
                        <p className='text-[12px] pt-3'>type <br /> full <br /> furnished</p>
                    </div>
                    <div className='text-white text-center mt-3'>
                        <p><FaRupeeSign  className='mx-6 font-bold text-[25px]'/></p>
                        <p className='text-[12px] pt-3'>type <br /> full <br /> 2000+</p>
                    </div>
                    <div className='text-white text-center mt-3'>
                        <p><FaKey  className='mx-6 font-bold text-[25px]'/></p>
                        <p className='text-[12px] pt-3'>type <br /> full <br /> furnished</p>
                    </div>
                    <div className='text-white text-center mt-3'>
                        <p><CiLocationOn  className='mx-6 font-bold text-[25px]'/></p>
                        <p className='text-[12px] pt-3'>Zirakpur <br />  <br />Location</p>
                    </div>
                    </div>
                   
                </div>

            </div>

          </div>
        </section>
        <section className='my-10'>
            <div className=' max-w-[1170px] mx-auto gap-2'>

                <Responsive/>
            
                
            </div>

            <div className='mt-10'>
                <h3 className='text-[40px] text-[#357CAD] font-bold text-center'>Our Success Story</h3>
                <p className='text-center'>Within the premises of the Sushma Township are reputed Schools.</p>
            </div>
          
        </section>
        <section className='my-10 bt1'>
            <div className='grd'></div>
           
            <div className='w-[95%] grid grid-cols-3 '>
                <div>
                     <div className='rnd1'>

                     </div>
                    <div className='flex gap-3 p-3 dots1'>
                       <div>
                       <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/2014villas-DEpcjbpM.png" alt="" className='w-[400px]' />
                       </div>
                      <div>
                      <h4 className='text-[18px] font-bold'>2014</h4>
                        <p className='uppercase text-[#357] text-[20px] font-bold'>Atelier</p>
                        <p className='text-[14px] text-neutral-600'>Shusma Group JoyNest MOH is a Premium Residential Housing Project on Airport Road Mohali. Offers 2/3/4 BHK Apartments in Zirakpur</p>
                      </div>
                      <div className='rnd2'>

                     </div> 
                    </div>
                </div>

                <div>
                <div className='rnd3'>

                </div>  
                    <div className='flex gap-3 p-3 dots1'>
                       <div>
                       <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/2021villas3-ly5zUAdw.png" alt="" className='w-[400px]' />
                       </div>
                      <div>
                      <h4 className='text-[18px] font-bold'>2014</h4>
                        <p className='uppercase text-[#357] text-[20px] font-bold'>Atelier</p>
                        <p className='text-[14px] text-neutral-600'>Shusma Group JoyNest MOH is a Premium Residential Housing Project on Airport Road Mohali. Offers 2/3/4 BHK Apartments in Zirakpur</p>
                      </div>
                    </div>
                    <div className='rnd4'> </div> 

                 
                </div>
                <div>
                <div className='rnd5'> </div> 

                    <div className='flex gap-3 p-3 dots1 '>
                       <div>
                       <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/2021villas5-mS1q9OHR.png" alt="" className='w-[400px]' />
                       </div>
                      <div>
                      <h4 className='text-[18px] font-bold'>2014</h4>
                        <p className='uppercase text-[#357] text-[20px] font-bold'>Atelier</p>
                        <p className='text-[14px] text-neutral-600'>Shusma Group JoyNest MOH is a Premium Residential Housing Project on Airport Road Mohali. Offers 2/3/4 BHK Apartments in Zirakpur</p>
                      </div>
                    </div>
                    <div className='rnd6'> </div> 

                </div>
                <div>
                    <div className='flex gap-3 p-3 dots1'>
                       <div>
                       <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/2009vilaas-Zke4bEbq.png" alt="" className='w-[400px]' />
                       </div>
                      <div>
                      <h4 className='text-[18px] font-bold'>2014</h4>
                        <p className='uppercase text-[#357] text-[20px] font-bold'>Atelier</p>
                        <p className='text-[14px] text-neutral-600'>Shusma Group JoyNest MOH is a Premium Residential Housing Project on Airport Road Mohali. Offers 2/3/4 BHK Apartments in Zirakpur</p>
                      </div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-3 p-3 dots1'>
                       <div>
                       <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/2013villas-DowudY8A.png" alt="" className='w-[400px]' />
                       </div>
                      <div>
                      <h4 className='text-[18px] font-bold'>2014</h4>
                        <p className='uppercase text-[#357] text-[20px] font-bold'>Atelier</p>
                        <p className='text-[14px] text-neutral-600'>Shusma Group JoyNest MOH is a Premium Residential Housing Project on Airport Road Mohali. Offers 2/3/4 BHK Apartments in Zirakpur</p>
                      </div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-3 p-3 dots1'>
                       <div>
                       <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/2019villas2-CDfLfbLj.png" alt="" className='w-[400px]' />
                       </div>
                      <div>
                      <h4 className='text-[18px] font-bold'>2014</h4>
                        <p className='uppercase text-[#357] text-[20px] font-bold'>Atelier</p>
                        <p className='text-[14px] text-neutral-600'>Shusma Group JoyNest MOH is a Premium Residential Housing Project on Airport Road Mohali. Offers 2/3/4 BHK Apartments in Zirakpur</p>
                      </div>
                    </div>
                </div>

            </div>
        </section>

        <section className='my-10'>
            <div className='max-w-[1170px] mx-auto p-4 grid grid-cols-[60%_auto]'>

              <div className='bg-[#7D7D7D] p-4 h-[350px] w-[100%] rounded-xl'>
             
                <div className='flex gap-5 mt-8 mx-10'>
                    <div className='lft'>
                     <h5 className='text-white uppercase font-bold text-[14px]'>up to</h5>
                     <b className='text-[80px] text-white font-bold'>12%</b>
                     <h4 className='uppercase text-white text-[20px] font-bold'>assured return</h4>
                     <p className='text-[10px] lt1 text-white p-2   '>T& C Apply</p>
                     <button className='uppercase mt-7 border rounded-[20px] text-center p-2 text-white w-[200px]'>Enquire now</button>
                     </div>
                    
                    
                    <div>
                   
                     
                     <b className='text-[80px] text-white font-bold'>09</b>
                     <h4 className='uppercase text-white text-[20px] font-bold'>years lease guarantee</h4>
                    
                   
                    
                    
                    </div>

                    
                </div>

              </div>
            </div>
        </section>
        <section className='my-10'>
            <div className='max-w-[1170px] mx-auto bg-[#357CAD] p-4 rounded-xl '>
               <div className='flex justify-between'>
                <h2 className='mx-4 text-white text-[30px] uppercase p-4'>SCHEDULE YOUR SITE VISIT</h2>
                 <button className='bg-white text-[#357CAD] h-[50px] mt-5 w-[200px] rounded-[30px] uppercase font-semibold'>Connect with us</button>
               </div>
            </div>

        </section>
        <section className='mx-[20px] bg-[#F3F3F3] p-4 my-10'>
        <Tabs>
    <TabList>
      <Tab>
        <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/be6c1d6f9d3deceef082d270ecb0fda5-DSFT_ZJr.png" alt=""  className='rounded-[50%] w-[100px]'/>
        </div>
      </Tab>
      <Tab>
        <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/9c49582780f3d13e275ac5566dc36a67-CbsGSObk.png" alt=""  className='rounded-[50%] w-[100px]'/>
        </div>
      </Tab>
      <Tab>
        <div>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/7a42b8662ac197bac9ce33ab327e33ac-WmKoPGau.png" alt=""  className='rounded-[50%] w-[100px]'/>
        </div>
      </Tab>
     
    </TabList>

    <TabPanel>
     <section>
        <div className='max-w-[1170px] mx-auto grid grid-cols-[40%_auto] gap-7'>
            <div className=''>
              <div className='uppercase text-[#357CAD] text-[40px] font-bold mt-10'>
                <h3>MEET OUR</h3>
                <h3>board MEMBER</h3>
              </div>
              <div>
                <p className='mt-5'>Within the premises of the Sushma <br /> Township are reputed Schools.</p>
              </div>
            </div>
            <div className=''>
                <div className='flex gap-5'>
                    <div className='mt-5'>
                        <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/be6c1d6f9d3deceef082d270ecb0fda5-DSFT_ZJr.png" alt=""  className='w-[150px] rounded-[50%]'/>
                    </div>
                    <div className='mt-[10%]'>
                        <b className='text-[#357CAD] font-bold'>Mr. Binder Pal Mittal</b>
                        <p>Director</p>
                    </div>
                </div>
                <div className='bg-[#357CAD] p-4 rounded-xl mt-10 w-[90%]'>
                    <div className='text-white p-4'>
                      <p>With more than three decades of experience and coveted knowledge transcending across Steel, Metals and Real Estate industries, Mr. Mittal stands tall above the board as founder and spearheads the group’s multi-faceted portfolio to cater to the needs of an exclusive clientele, by creating striking concepts and era-defining designs to match their customer’s tastes.</p>
                    </div>
                </div>
            </div>

        </div>
     </section>
    </TabPanel>
    <TabPanel>
    <section>
        <div className='max-w-[1170px] mx-auto grid grid-cols-[40%_auto] gap-7'>
            <div className=''>
              <div className='uppercase text-[#357CAD] text-[40px] font-bold mt-10'>
                <h3>MEET OUR</h3>
                <h3>board MEMBER</h3>
              </div>
              <div>
                <p className='mt-5'>Within the premises of the Sushma <br /> Township are reputed Schools.</p>
              </div>
            </div>
            <div className=''>
                <div className='flex gap-5'>
                    <div className='mt-5'>
                        <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/9c49582780f3d13e275ac5566dc36a67-CbsGSObk.png" alt=""  className='w-[150px] rounded-[50%]'/>
                    </div>
                    <div className='mt-[10%]'>
                        <b className='text-[#357CAD] font-bold'>Mr. Binder Pal Mittal</b>
                        <p>Director</p>
                    </div>
                </div>
                <div className='bg-[#357CAD] p-4 rounded-xl mt-10 w-[90%]'>
                    <div className='text-white p-4'>
                      <p>Mr. Bharat Mittal has a keen eye for the nuances in real estate and its various dynamics. His rich knowledge and experience have taken the SUSHMA group to even greater heights while his futuristic vision and contribution have shaped the organization in a positive way, equipping it to provide innovative project ideas in line with the needs & demands of the growing clientele and deliver projects on time. His Master's degree in Business Administration from the UK has helped him understand the market even better and gain a deft hand at tackling complex issues.</p>
                    </div>
                </div>
            </div>

        </div>
     </section>
    </TabPanel>
    <TabPanel>
    <section>
        <div className='max-w-[1170px] mx-auto grid grid-cols-[40%_auto] gap-7'>
            <div className=''>
              <div className='uppercase text-[#357CAD] text-[40px] font-bold mt-10'>
                <h3>MEET OUR</h3>
                <h3>board MEMBER</h3>
              </div>
              <div>
                <p className='mt-5'>Within the premises of the Sushma <br /> Township are reputed Schools.</p>
              </div>
            </div>
            <div className=''>
                <div className='flex gap-5'>
                    <div className='mt-5'>
                        <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/7a42b8662ac197bac9ce33ab327e33ac-WmKoPGau.png" alt=""  className='w-[150px] rounded-[50%]'/>
                    </div>
                    <div className='mt-[10%]'>
                        <b className='text-[#357CAD] font-bold'>Mr. Binder Pal Mittal</b>
                        <p>Director</p>
                    </div>
                </div>
                <div className='bg-[#357CAD] p-4 rounded-xl mt-10 w-[90%]'>
                    <div className='text-white p-4'>
                      <p>Having started his career from being a Business Analyst at Essex LG, in no time he took over the role of the Executive Director of SUSHMA group. Mr. Prateek Mittal has done his degree in B.tech as an Electrical Engineer from IIT Bombay. He believes in re-defining his paths with every new challenge and is a motivation for the workforce at SUSHMA Group. He is looked up to as a mentor for young people who aspire to succeed with commitment and hard work.</p>
                    </div>
                </div>
            </div>

        </div>
     </section>
    </TabPanel>
   

  </Tabs>
        </section>

        <section className='my-10'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-2 mt-10 gap-9'>
                <div>
                <div className='relative' id='cs'>
                    <div >
                        <img src="https://t3.ftcdn.net/jpg/02/33/59/42/360_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg" alt=""  className='rounded-xl '/>
                    </div>
                    <div className='grad'>
                        <div className='text-center text-white '>
                            <h4 className='text-[30px] font-bold p-4'>The Science of 
                            CONSTRUCTION TECHNOLOGY</h4>
                            <p>Quality and timeline deliverables are sacrosanct to us. <br /> This is why we have robust, indigenous construction <br /> processes to keep our promises.</p>
                        </div>

                    </div>
                </div>
                </div>

                <div className='relative' id='cs'>
                    <div >
                        <img src="https://media.istockphoto.com/id/157193895/photo/beautiful-swimming-pool-at-an-estate-home.jpg?s=612x612&w=0&k=20&c=CdpPhGnQOxxLJnt4Q-KevD05kM3G-giGD5iLLatEQDM=" alt=""  className='rounded-xl '/>
                    </div>
                    <div className='grad'>
                        <div className='text-center text-white '>
                            <h4 className='text-[30px] font-bold p-4'>The Science of 
                            CONSTRUCTION TECHNOLOGY</h4>
                            <p>Quality and timeline deliverables are sacrosanct to us. <br /> This is why we have robust, indigenous construction <br /> processes to keep our promises.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <section>
            <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/banner-CK8xIpqY.png" alt="" />
        </section>
        <section className='my-10 p-2'>
            <div className='flex justify-center text-[25px] gap-4 text-yellow-500'>
                <p><FaStar /></p>
                <p><FaStar /></p>
                <p><FaStar /></p>
                <p><FaStar /></p>
                <p><FaStar /></p>
            </div>
            <div className='text-[40px] text-[#357CAD] font-bold mt-5 text-center'>
                <h3>SUSHMA SERVICE PARTNER</h3>
               
            </div>
            <p> <p className='text-center text-[18px]'>Within the premises of the Sushma Township are reputed Schools.</p></p>
        </section>
        <section className='my-10'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-[40%_auto]'>
                <div>
                    <div>
                        <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/705febab1eba783bdb74e0f6f6db3a90-CS-YPTjC.png" alt=""  className='w-[100%]'/>
                    </div>
                </div>
                <div className='bg-[#3E3C3C]   '>
                    <div className='text-white p-4'>
                        <p className='p-4 text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus sed nulla. amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci.</p>
                        <p className='text-[18px] p-4 eu'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis</p>

                    </div>
                    <div className='text-white text-[30px] font-bold p-4 mx-5'>
                        <h3>KUNDAN KUMAR</h3>
                        <h3>FOUNDER REALITY <br /> NIVESH</h3>
                    </div>

                    <div className='bg-white w-[100%] p-4'>
                        <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/c3611c24db9ffa2be6bf1b8a5b51cbd2--9KUxnWA.png" alt=""  className='w-[130px]'/>

                    </div>

                </div>

            </div>
        </section>
        <section className='mt-10'>
            <div className=' max-w-[1170px] mx-auto '>
                <Carousel3/>

             
               
               

            </div>
        </section>
        <section className='my-10'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-[60%_auto] gap-10'>
             <div>
             {FaqItem}
             </div>
              <div className='mt-10 lines1'>
                <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/9500423e943f26118d254c27a17d48bb-BnIM_mCe.png" alt="" className='h-[500px] rounded-xl'/>
              </div>

            </div>
        </section>
        <section className='my-10'>
            <div className='max-w-[1170px] mx-auto bg-[#357CAD] p-4 rounded-xl '>
               <div className='flex justify-between'>
                <h2 className='mx-4 text-white text-[30px] uppercase p-4'>SCHEDULE YOUR SITE VISIT</h2>
                 <button className='bg-white text-[#357CAD] h-[50px] mt-5 w-[200px] rounded-[30px] uppercase font-semibold'>Connect with us</button>
               </div>
            </div>

        </section>
        <section className='w-[100%]'>
            <div className='max-w-[100%] mx-auto grid grid-cols-[40%_auto]'>

                <div className='bg-[#357CAD] p-4'>
                    <h1 className='text-white text-[60px] font-semibold p-4 '>Project <br />
                    Walk-through</h1>


                   <div className='flex  justify-center cen'>
                   <div className='text-[20px] font-bold text-white p-4 mx-3'>
                       <p className='text-[40px] mx-5'><MdOutlineLeaderboard /></p>
                       <p className=''>luxury <br /> property</p>
                    </div>
                    <div className='text-[20px] font-bold text-white p-4 mx-10'>
                       <p className='text-[40px]'><MdOutlineLeaderboard /></p>
                       <h3>luxury <br /> property</h3>
                    </div>
                    <div className='text-[20px] font-bold text-white p-4 mx-10'>
                       <p className='text-[40px]'><MdOutlineLeaderboard /></p>
                       <h3>luxury <br /> property</h3>
                    </div>
                   </div>


                </div>
                <div className='para'>

                    <div className='play'>
                        <p className='text-white text-[30px] text-center mt-[35%]'>PLAY</p>

                    </div>

                </div>

            </div>
        </section>

        <section className='my-10 p-2'>
           
            <div className='text-[40px] text-[#357CAD] font-bold mt-5 text-center'>
                <h3>SUSHMA PROJECTS BRANDS ON BOARD</h3>
               
            </div>
            <p> <p className='text-center text-[18px]'>Within the premises of the Sushma Township are reputed Schools.</p></p>
        </section>
        <section className='w-[95%] my-10 p-4'>
            <Carousel4/>


        </section>
        <section className='my-10 p-2'>
           
            <div className='text-[40px] text-[#357CAD] font-bold mt-5 text-center'>
                <h3>BLOGS</h3>
               
            </div>
            <p> <p className='text-center text-[18px]'>Within the premises of the Sushma Township are reputed Schools.</p></p>
        </section>
         <section className='my-10'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-3 gap-5'>
                

       <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='hv'>
        <a href="#">
        <img class="rounded-t-lg" src="https://staging.adiyogitechnology.com/sushmagroup/assets/1f402e905205374dd3bc5a348c4daa3c-BAXa_HFL.png" alt="" />
         </a>
        </div>
    <div class="p-5">
        <div className='flex gap-2'>
            <p className='text-red-400'><IoCalendarNumberOutline /></p>
             <p className='text-[12px] text-zinc-700'>Published on June 20,2023</p>
        </div>
        <a href="#" className='w-[100%]'>
            <h5 class="mb-2 text-[20px] font-bold tracking-tight text-stone-800 dark:text-white">What is a Short-Term Apartment Rentals? | Confident Group</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='hv'>
        <a href="#">
        <img class="rounded-t-lg" src="https://staging.adiyogitechnology.com/sushmagroup/assets/94e93e85275be3359bd08525d53be9ec-B8gV-QY6.png" alt="" />
         </a>
        </div>
    <div class="p-5">
        <div className='flex gap-2'>
            <p className='text-red-400'><IoCalendarNumberOutline /></p>
             <p className='text-[12px] text-zinc-700'>Published on June 20,2023</p>
        </div>
        <a href="#" className='w-[100%]'>
            <h5 class="mb-2 text-[20px] font-bold tracking-tight text-stone-800 dark:text-white">What is a Short-Term Apartment Rentals? | Confident Group</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='hv'>
        <a href="#">
        <img class="rounded-t-lg" src="https://staging.adiyogitechnology.com/sushmagroup/assets/1f16aa257afa528aa03a0272a4aeb9bf-Cmt7pQVi.png" alt="" />
         </a>
        </div>
    <div class="p-5">
        <div className='flex gap-2'>
            <p className='text-red-400'><IoCalendarNumberOutline /></p>
             <p className='text-[12px] text-zinc-700'>Published on June 20,2023</p>
        </div>
        <a href="#" className='w-[100%]'>
            <h5 class="mb-2 text-[20px] font-bold tracking-tight text-stone-800 dark:text-white">What is a Short-Term Apartment Rentals? | Confident Group</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
        </div>
 

            </div>

         </section>
         <section className='my-5'>
            <button className='bg-[#176ba8] p-2 text-white text-center uppercase rounded-[20px] table mx-auto w-[200px]'>see all blog</button>
         </section>

         <section className='my-10'>
            <div className='max-w-[1170px] mx-auto bg-[#424242] p-4 rounded-xl '>
               <div className='flex justify-between'>
                <h2 className='mx-4 text-white text-[30px] uppercase p-4'>SCHEDULE YOUR SITE VISIT</h2>
                 <button className='bg-white text-[#357CAD] h-[50px] mt-5 w-[200px] rounded-[30px] uppercase font-semibold'>Connect with us</button>
               </div>
            </div>

        </section>

        <section className='my-10 bg-[#F4F4F4] p-4'>
            <div className='max-w-[1170px] mx-auto'>
                <div className='flex justify-between'>
                   <div>
                   <h3 className='text-[#357CAD] text-[40px] font-bold p-3 uppercase'>news & Events</h3>
                   <p className='p-3'>Within the premises of the Sushma Township are reputed Schools.</p>
                   </div>
                   <div>
                     <button className='alls'>SEE ALL</button>
                   </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3 max-w-[1170px] mx-auto mt-10'>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='hv'>
        <a href="#">
        <img class="rounded-t-lg" src="https://5.imimg.com/data5/SELLER/Default/2023/11/358227055/JI/TQ/MB/33988361/loss-equity-shares-newspaper-advertising-500x500.jpg" alt="" />
         </a>
        </div>
    <div class="p-5">
        <div className=''>
          
             <p className='text-[14px] font-bold text-[#357CAD]'>Nov 11, 2023</p>
        </div>
        <a href="#" className='w-[100%]'>
            <h5 class="mb-2 text-[20px] font-bold tracking-tight text-stone-800 dark:text-white">What is a Short-Term Apartment Rentals? | Confident Group</h5>
        </a>
       
       
    </div>
             </div>

             <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='hv'>
        <a href="#">
        <img class="rounded-t-lg" src="https://is1-3.housingcdn.com/01c16c28/5165618a5d60058fbcc761491144e6c5/v0/fs/4_bhk_apartment-for-sale-kharghar-Navi+Mumbai-others.jpg" alt=""  className='h-[100%]'/>
         </a>
        </div>
    <div class="p-5">
        <div className=''>
          
             <p className='text-[14px] font-bold text-[#357CAD]'>Nov 11, 2023</p>
        </div>
        <a href="#" className='w-[100%]'>
            <h5 class="mb-2 text-[20px] font-bold tracking-tight text-stone-800 dark:text-white">What is a Short-Term Apartment Rentals? | Confident Group</h5>
        </a>
       
       
    </div>
             </div>
             <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='hv'>
        <a href="#">
        <img class="rounded-t-lg" src="https://images.herzindagi.info/image/2023/Jul/rajveer-deol-and-paloma-thakeria-debut-with-film-dono.jpg" alt="" />
         </a>
        </div>
    <div class="p-5">
        <div className=''>
          
             <p className='text-[14px] font-bold text-[#357CAD]'>Nov 11, 2023</p>
        </div>
        <a href="#" className='w-[100%]'>
            <h5 class="mb-2 text-[20px] font-bold tracking-tight text-stone-800 dark:text-white">What is a Short-Term Apartment Rentals? | Confident Group</h5>
        </a>
       
       
    </div>
             </div>

            </div>

        </section>

        <section className='school '>

            <div className='text-center text-white  p-4'>
                <h5 className='font-bold text-[30px] mt-[5%]'>contact us</h5>
                <p>Within the premises of the Sushma Township are reputed Schools.</p>
            </div>
              <div className='max-w-[1170px] mx-auto mt-[10%]'>
                <div className='bg-[#357CAD] p-4'>
                    

              <form class="max-w-md  flex justify-between gap-[100px] mt-5">
  <div class="relative z-0 w-full mb-5 group">
      <input type="name" name="name" id="floating_email" class="block py-2.5 px-0 w-[100px] text-sm text-white bg-transparent  border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:borderwhite peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-whitedark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-white">Your Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-[100px] text-sm text-white bg-transparent  border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:borderwhite peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-whitedark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-white">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-[100px] text-sm text-white bg-transparent  border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:borderwhite peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-whitedark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-white">Email </label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-[100px] text-sm text-white bg-transparent  border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:borderwhite peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-whitedark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-white">Mobile</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-[150px] text-sm text-white bg-transparent  border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:borderwhite peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-whitedark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-white">Message</label>
  </div>
 
  <button type="submit" class="text-blue-700 bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[30px] text-sm w-[200px] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>
             


                </div>
                <div className='bg-white p-4 w-[100%] flex justify-between shadow-lg gap-8'>
                    <div>
                        <h3 className='text-neutral-700 text-[30px] font-bold pt-4'>GET IN TOUCH</h3>
                    </div>

                   <div className='flex gap-3 gp'>
                    <div className='mt-1 text-[20px] bg-[#357CAD] p-3 rounded-full text-white'>
                    <p><BiPhoneCall /></p>
                    </div>
                     <div className='text-neutral-700 font-[800]'>
                       
                        <p>+919693627042</p>
                        <p>+917079807079</p>
                    </div>
                   </div>
                   <div className='flex gap-3 gp'>
                    <div className='mt-1 text-[20px] bg-[#357CAD] p-3 rounded-full text-white'>
                    <p><MdEmail /></p>
                    </div>
                     <div className='text-neutral-700 font-[800] pt-3'>
                       
                       
                        <p>Needhelp@gmail.com</p>
                    </div>
                   </div>
                   <div className='flex gap-3 gp'>
                    <div className='mt-1 text-[20px] bg-[#357CAD] p-3 rounded-full text-white'>
                    <p><FaLocationDot /></p>
                    </div>
                     <div className='text-neutral-700 font-[800]'>
                       
                        <p>PR-7 Airport Road,</p>
                        <p>Zirakpur, Punjab</p>
                    </div>
                   </div>


              </div>

              </div>

        </section>

        <section className='my-[20%]'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-[60%_auto] mt-10'>

               <div>
                <div>
               <h1 className='text-[50px] text-[#357CAd] p-4 font-bold uppercase'> Presentation of <br />
               the sushma group</h1>
                </div>
                <div className='flex gap-3 btn1 justify-center'>
                     <p className='text-[30px]'><BsDownload /> </p>
                    <button className='text-[25px] font-bold'> Broucher</button>
                </div>
               </div>


               <div>
                <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/5c38dd308d0409a102cb3be9838ca36a-CrQ5igkw.png" alt="" />
               </div>
            </div>

        </section>

        <section className=' p-2'>
           
           <div className='text-[40px] text-[#357CAD] font-bold mt-5 text-center'>
               <h3>CORPORATE OFFICE</h3>
              
           </div>
         
       </section>
       <section>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0396487219036!2d85.16340217409669!3d25.60359871512248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59f5afde159b%3A0xea66cffdbec7976b!2sSushma%20Apartment!5e0!3m2!1sen!2sin!4v1724840827169!5m2!1sen!2sin" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </section>
       <section className='my-5 bg-[#F4F4F4] p-4'>
        <div className='max-w-[1170px] mx-auto mt-10'>
            <div>
                <h3 className='text-[20px] font-bold uppercase shusma'>shusma <br /> <span className='text-[20px] font-bold uppercase text-[#357CAD]'>residential</span></h3>
                <div className='flex justify-between font-[700] uppercase'>
                   
                        <h3 className='text-neutral-700 text-[18px]'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px]'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px]'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px]'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px]'>shusma belleza </h3>
                        <p>|</p>
                        
                    
                </div>
               
            </div>
            <div>
                <h3 className='text-[18px] font-bold uppercase  shusma'>shusma <br /> <span className='text-[18px] font-bold uppercase text-[#357CAD]'>residential</span></h3>
                <div className='flex justify-between font-[700]'>
                   
                        <h3 className='text-neutral-700 text-[18px] uppercase'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px] uppercase'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px] uppercase'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px] uppercase'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px] uppercase'>shusma belleza </h3>
                        <p>|</p>
                        
                    
                </div>
               
            </div>
            <div>
                <h3 className='text-[18px] font-bold uppercase mt-4 shusma'>shusma <br /> <span className='text-[18px] font-bold uppercase text-[#357CAD]'>residential</span></h3>
                <div className='flex justify-between font-[700]'>
                   
                        <h3 className='text-neutral-700 text-[18px] uppercase'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px] uppercase'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px] uppercase'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[18px] uppercase'>shusma belleza </h3>
                        <p>|</p>
                        <h3 className='text-neutral-700 text-[20px]'>shusma belleza </h3>
                        <p>|</p>
                        
                    
                </div>
               
            </div>
        </div>
       </section>
        
    </div>
  )
}
