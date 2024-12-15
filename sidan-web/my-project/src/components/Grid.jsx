import {Link} from 'react-router-dom'
import { avatar, bgEllipse, bootstrap, css, figma, git, gmail, html, js, nodejs, patternBlack, patternWhite, react, tailwindcss } from '../assets'

const Grid = () => {
  return (
    <div className='grid_container max-w-5xl mx-auto  z-6'>
           
          <img  src={patternBlack} className='absolute top-0 left-0  z-[-1] dark:hidden object-cover w-full h-full sm:w-auto sm:h-auto ' alt="" />
          <img  src={patternWhite} className='absolute top-0 left-0  z-[-1] hidden dark:block object-cover w-full h-full sm:w-auto sm:h-auto ' alt="" />
     
          <div className=' grid_1 bg-white dark:bg-blackThemeCard relative p-[30px] sm:p-[50px] xl:p-[60px] shadow-even-md '>
              <h1 className='text-[24px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl w-full text-center  xl:text-left mt-6 sm:mt-0  font-normal  xl:w-[528px] xl:text-4xl  text-[#5A5C72] dark:text-[#CED3FF] tracking-wider xl:font-semibold'>Front-End Developer</h1>
              <p className='text-[#454545] dark:text-[#E8E8E9] mt-[30px] sm:mt-[45px] text-center  xl:text-left'>Hey i am  <span className='bg-linearGradient_text text-gradient whitespace-nowrap'> Naseeb Sidan </span> </p>
              <p className='text-[#454545] dark:text-[#E8E8E9] z-5 text-center  xl:text-left'>Passionate self-taught Front-end developer skilled in turning
                 ideas into responsive and user-friendly web app. Proficient
                 in React.js and other front-end technologies.
              </p>

              <Link to='/about' className='flex xl:absolute justify-center items-center z-10 '> 
                  <div className='bg-transparent border mt-12 text-[17px] xl:text-[20px]  z-10 tracking-wider border-[#CCCCCC] dark:border-[#85858A] rounded-full cursor-pointer text-[#A3A3A0] dark:text-[#CECDCE] w-[210px] h-[50px]  sm:w-[260px] sm:h-[60px] xl:w-[290px] xl:h-[65px]  flex justify-center items-center'> 
                    Know more about 
                  </div>
              </Link> 

              <img src={bgEllipse} className='absolute top-0 right-0 dark:opacity-50 z-1' alt="" />
          </div>

          <div className=' grid_2 bg-white dark:bg-blackThemeCard cursor-pointer  shadow-even-md '>
              <Link to='/about'>
                 <img src={avatar} className='object-cover w-full h-full rounded-[35px] ' alt="avatar" />
              </Link>
          </div>
          
          <Link  to='mailto:naseebsidan6@gmail.com?subject=Connect%20with%20Me' target='_blank'
                 className=' grid_3 bg-white dark:bg-lgBackgroundDark  cursor-pointer  shadow-even-md flex items-center justify-center  xl:w-[182px] h-full'  >
                      <img src={gmail} className='w-[50px] h-[50px]' alt="gmail" />
          </Link>
          
          <div className='grid_4 bg-white dark:bg-blackThemeCard  shadow-even-md grid grid-rows-3 grid-cols-3 gap-[20px]  p-[20px]'>
            <div className="card bg-[#EEECEC] dark:bg-[#414147] dark:text-[#DADADB]"> <img src={js} alt="js" /> Java script</div>
            <div className="card bg-[#EEECEC] dark:bg-[#414147] dark:text-[#DADADB]"><img src={html} alt="html" /> HTML</div>
            <div className="card bg-[#EEECEC] dark:bg-[#414147] dark:text-[#DADADB]"><img src={css} alt="css" /> CSS</div>
            <div className="card bg-[#EEECEC] dark:bg-[#414147] dark:text-[#DADADB]"><img src={react} alt="react" /> React JS</div>
            <div className="card bg-[#EEECEC] dark:bg-[#414147] dark:text-[rgb(218,218,219)]"><img src={figma} alt="figma" /> Figma</div>
            <div className="card bg-[#EEECEC] dark:bg-[#414147] dark:text-[#DADADB]"><img src={tailwindcss} alt="tailwindcss" /> Tailwind CSS </div>
            <div className="card bg-[#EEECEC] dark:bg-[#414147] dark:text-[#DADADB]"><img src={bootstrap} alt="bootstrap" /> Bootsrap </div>
            <div className="card bg-[#EEECEC] dark:bg-[#414147] dark:text-[#DADADB]"><img src={nodejs} alt="nodejs" /> Node JS </div>
            <div className="card bg-[#EEECEC] dark:bg-[#414147] dark:text-[#DADADB]"><img src={git} alt="git" /> Git </div>
              
          </div>

          <Link to='/projects' onClick={() => window.scrollTo(0, 0)} className=' grid_5 bg-white dark:bg-lgBackgroundDark text-[#3C3C3C]  cursor-pointer dark:text-[#E9E9EA] shadow-even-md '>
                See my works 
          </Link> 

          <Link to='/contact' onClick={() => window.scrollTo(0, 0)} className='grid_6 bg-white dark:bg-lgBackgroundDark text-[#3C3C3C]  cursor-pointer dark:text-[#E9E9EA] shadow-even-md '> 
                Let's connect 
          </Link> 
      
    </div>
  )
}

export default Grid