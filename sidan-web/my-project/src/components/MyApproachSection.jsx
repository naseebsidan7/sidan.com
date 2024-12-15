import React from 'react'
import Header from './Header'

const MyApproachSection = () => {
  return (
    <div className='text-white mt-[10rem] sm:mt-[12rem] flex flex-col gap-[4rem] sm:gap-[5rem]  items-center justify-center max-w-5xl mx-auto'>
            <Header firstTitle='My' secondTitle='Approach' />
            <div className='flex gap-5 flex-wrap xl:flex-nowrap xl:flex-row items-center justify-center  '>
                 
                 <div className='approach_card' tabIndex='0'>
          
                              <div className='flex smCard py-3 px-8 rounded-[14px] border border-[#aeaeaf]'>Phase 1</div>
                              
                              <div className="approach_content ">
                                   <h2 className="text-[28px]  tracking-[.9px]  font-semibold mt-2">Design, Plan & Wireframe</h2>
                                   <p className="text-sm mt-4">
                                       Every project begins with a vision. We translate ideas into intuitive wireframes and visually appealing designs, ensuring a user-focused foundation for development.
                                   </p>
                              </div>
                          
               
                 </div>
                 
                 <div className='approach_card' tabIndex="0">
                    
                    <div className='flex smCard py-3 px-8 rounded-[14px] border border-[#aeaeaf]'>Phase 2</div>
                    
                    <div className="approach_content">
                         <h2 className="text-[28px]  tracking-[.9px]  font-semibold mt-2">Development & Progress Update</h2>
                         <p className="text-sm mt-4">
                              Once we agree on the plan, I cue my lofi playlist and dive into coding.
                              From initial sketches to polished code, I keep you updated every step of the way.
                         </p>
                    </div>
                 </div>
                 
                 <div className='approach_card' tabIndex="0">
          
                        <div className='flex smCard py-3 px-8 rounded-[14px] border border-[#aeaeaf]'>Phase 3</div>
                    
                         <div className="approach_content">
                              <h2 className="text-[28px]  tracking-[.9px]  font-semibold mt-2">Deployment & Optimization</h2>
                              <p className="text-sm mt-4">
                               Once built, we launch with care and fine-tune for performance, scalability, and user satisfaction. From testing to post-launch tweaks, we ensure the solution exceeds expectations.
                              </p>
                         </div>
                 </div>
           </div>
    </div>
  )
}

export default MyApproachSection