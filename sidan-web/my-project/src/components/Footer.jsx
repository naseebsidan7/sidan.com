import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='dark:text-white flex justify-center items-end    absolute left-0 right-0  mt-[7rem] sm:mt-[12rem]   pb-[2.5rem]'>
        <div className='flex flex-col font-poppins  items-center justify-center gap-6 '>
             <Link to="mailto:naseebsidan6@gmail.com?subject=Let's%20work%20together" className='text-[24px] sm:text-[32px] font-medium dark:font-normal cursor-pointer tracking-[3.5px] gap-3  flex flex-col items-center justify-center'>
                <h2 className='text-[#303030] hover:text-[#34373a] dark:text-[#fff] hover:dark:text-[#d1d7f4] transition-colors '>Let's work together</h2>
                <h2 className='text-[#BEBEBE] hover:text-[#9b9a9a]  transition-colors'>Get in touch</h2>
             </Link>
             <p className=' font-forum text-[18px] sm:text-[22px] tracking-[1.76px] bg-linearGradient_text dark:bg-linearGradient_text2  dark:opacity-90 text-gradient'>©Naseeb Sidan</p>
        </div>
    </div>
  )
}

export default Footer