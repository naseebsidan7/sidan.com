import React, {  useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toggleMode } from '../redux/state/modeSlice'
import { useDispatch, useSelector } from 'react-redux'

import { sidanLogoDark, sidanLogoWhite, } from '../assets'

const Navbar = () => {
      const dispatch = useDispatch()
      const theme = useSelector((state) => state.theme)

      const location = useLocation()
      const currentPath = location.pathname.split('/')[1]
    

  return (
        <nav className=' flex navbar_wrapper z-[3]  w-full py-[60px] px-10  xl:px-0   items-center justify-between scale-90 lg:scale-100  '>
       
              <Link to='/' className=''>
                   <img src={theme.mode === 'light' ? sidanLogoWhite : sidanLogoDark  } className=' h-auto md:h-[65px]' alt="logo-sidan" />
              </Link>

              <div className="navbar_container flex  absolute top-[98%] z-20 left-1/2 transform -translate-x-1/2 md:transform-none md:static bg-lightGray dark:bg-lgBackgroundDark dark:text-white w-[390px] h-[65px] rounded-full items-center">
                    <ul className='flex w-full items-center z-20 justify-around text-[15px]'>
                          <li className={`navbar_actived_button ${currentPath === '' || currentPath === 'home' ? ' bg-white  dark:bg-themeBtnIconBg' : '' }`}>
                             <Link to='/' className='' >Home</Link>
                          </li>     
                          <li className={`navbar_actived_button ${currentPath === 'projects' || currentPath === 'project' ? ' bg-white  dark:bg-themeBtnIconBg' : '' }`}>
                             <Link to='/projects'>Projects</Link>
                          </li>     
                          <li className={`navbar_actived_button ${currentPath === 'contact' ? ' bg-white  dark:bg-themeBtnIconBg' : '' }`}>
                             <Link to='/contact'>Contact</Link>
                          </li>     
                    </ul>
              </div>

              <div className='w-[149px] h-[55px] bg-gray_70 dark:bg-lgBackgroundDark flex items-center justify-center rounded-full'  onClick={() => dispatch(toggleMode())}  >
              <button className="w-[136.73px] h-[46.95px] rounded-full bg-white_35 dark:bg-lgBackgroundDark flex items-center relative transition-colors duration-300">
                        <div
                        className={`flex bg-white_70 dark:bg-themeBtnIconBg w-[61.35px] h-[46.95px] items-center justify-center rounded-full absolute transition-transform duration-300`}
                        style={{
                              transform: theme.mode === 'light' ? 'translateX(0)' : 'translateX(76px)',
                        }}
                        >
                        <img src={theme.mode === 'light' ? "../src/assets/assets/sun.svg" : "../src/assets/assets/moon.svg" } alt="theme-icon" />
                        </div>
              </button>

              </div>

        </nav>
    
  )
}

export default Navbar