import {Link} from 'react-router-dom'
import ExpertiseSection from '../../components/ExpertiseSection'
import { patternProjectDetails, patternWhiteProjectDetails } from '../../assets'

const About = () => {
  return (
    <div className=' mt-[10rem] sm:mt-[12rem] px-6 sm:px-20 xl:px-0 flex flex-col gap-[1rem] sm:gap-[1rem]  items-center justify-center max-w-5xl mx-auto'>
        
        <img  src={patternProjectDetails} className='absolute top-0 left-0  z-[-1] dark:hidden object-cover w-full h-full sm:w-auto sm:h-auto ' alt="" />
        <img  src={patternWhiteProjectDetails} className='absolute top-0 left-0  z-[-1] hidden dark:block object-cover w-full h-full sm:w-auto sm:h-auto ' alt="" />
     
        <div  className='w-full h-full gap-16 sm:gap-20 flex flex-col'>
           
            <div className='flex justify-between sm_clear_mp mx-8 py-3 sm:p-0  font-forum border-b-2 border-[#b5b2b29a] max-w-5xl  '>
                 <h1 className='text-nowrap text-[23px] sm:text-[26px] dark:text-white tracking-[2px] '>About me</h1>
                 <Link to='/contact' className='flex flex-row  gap-3  items-center  justify-center '>
                    <h1 className='text-nowrap text-[23px] sm:text-[26px] flex items-center bg-linearGradient_text2 text-gradient'> Connect with me </h1>
                    <img className='w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] dark:hidden' src="../src/assets/logo/arrowLineRightBlack.svg" alt="" />
                    <img className='w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] hidden dark:block' src="../src/assets/logo/arrowLineRightWhite.svg" alt="" />
                 </Link>
            </div>

            <div className='bg-white dark:bg-[#202028] w-full h-full shadow-even-md 
                  max-w-5xl mx-auto rounded-[35px] flex items-center text-center p-10 sm:p-20'>

                  <p className='dark:text-[#ffffffeb] text-[#000000b1]  font-nunito font-light sm:font-normal text-[18px] sm:text-[20px] tracking-[3px] leading-[45px] sm:leading-[55px]'>
                  I’m a Front-end Developer based in India, passionate about designing modern, user-centric websites. I specialize in transforming ideas into functional, visually appealing digital solutions that tell stories and deliver impactful UI/UX experiences 🚀.
                   
                  Driven by creativity and attention to detail, I focus on writing clean, efficient, and scalable code. Beyond coding, I have a deep love for traveling and exploring new places. Let’s collaborate and create something exceptional together!</p>

            </div>
        </div>

        <ExpertiseSection/>
    </div>
  )
}

export default About