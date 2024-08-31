"use client"
import React from 'react'
import { MdCancel } from "react-icons/md";

export default function Modal({change,setData}) {
  return (
    <div>
       
        <div className='h-[100vh] w-[1340px] bg-white z-30 shadow-inner fixed grid grid-cols-2'
        >
            
            
            <div className='bg-[#357CAD]'>

                <div className='ps'>
                    <img src="https://staging.adiyogitechnology.com/sushmagroup/assets/image_1%202-mvcGa-Xf.png" alt="" />
                </div>

            </div>
            <div className='case'>
            <button onClick={()=>setData(!change)}><MdCancel  className='fixed right-[30px] text-[40px] text-red-700 cursor-pointer'/></button>
                <div className='ups'>
                    <h2 className='text-[#357CAD] text-[30px] uppercase mt-10 mx-2 cursor-pointer'>about us</h2>
                </div>
                <div className='ups'>
                    <h2 className='text-[#357CAD] text-[30px] uppercase mt-10 mx-2 cursor-pointer'>Why sushma group</h2>
                </div>
                <div className='ups'>
                    <h2 className='text-[#357CAD] text-[30px] uppercase mt-10 mx-2 cursor-pointer'>our projects</h2>
                </div>
                <div className='ups'>
                    <h2 className='text-[#357CAD] text-[30px] uppercase mt-10 mx-2 cursor-pointer'>Our Stories</h2>
                </div>
                <div className='ups'>
                    <h2 className='text-[#357CAD] text-[30px] uppercase mt-10 mx-2 cursor-pointer'>Media</h2>
                </div>
                <div className='ups'>
                    <h2 className='text-[#357CAD] text-[30px] uppercase mt-10 mx-2 cursor-pointer'>Sushma Service Partner</h2>
                </div>
                <div className='ups'>
                    <h2 className='text-[#357CAD] text-[30px] uppercase mt-10 mx-2 cursor-pointer'>FAQ</h2>
                </div>
                <div className='ups'>
                    <h2 className='text-[#357CAD] text-[30px] uppercase mt-10 mx-2 cursor-pointer'>Contact Us</h2>
                </div>

            </div>

        </div>
    </div>
  )
}
