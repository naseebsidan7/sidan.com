import React from 'react'
import Grid from '../../components/Grid'
import SelectedProject from '../../components/SelectedProject'
import ExpertiseSection from '../../components/ExpertiseSection'
import MyApproachSection from '../../components/MyApproachSection'

const Home = () => {

  return ( 
    <div className='mt-[120px] px-6 sm:px-20 xl:px-0 max-w-5xl mx-auto    relative'>
        {/* <div className='grid text-white lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2  gap-[32px]  w-full  lg:h-[742px] h-auto '>
             
             <div className='border grid grid-cols-1 grid-rows-1 gap-[32px] '>
                  <div className='border border-blue-600 h-[567px]'>1</div>
                  
                  <div className='grid grid-cols-2 grid-rows-1 gap-[32px]'>
                      <div className='border border-red-600 h-[142px] '>2</div>
                      <div className='border border-red-600 h-[142px]'>3</div>
                  </div>
              </div>

              <div className='border grid grid-rows-1 grid-cols-1 gap-[32px] '>
                  <div className='grid grid-cols-[2fr_1fr]  gap-[32px] '>
                        <div className='border  border-red-600 h-[280px] '>4</div>
                        <div className='border  border-red-600 h-[280px] '>5</div>
                  </div>
                  <div className='h-[431px] border border-blue-600 '>6</div>
              </div>

           
        </div> */}
     
        <Grid  /> 
        <SelectedProject />
        <ExpertiseSection />
        <MyApproachSection />
    </div>
  )
}

export default Home
