import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { signOutUserFailure, signOutUserStart, signOutUserSuccess } from '../../redux/state/adminSlice';

const AdminSideBar = () => {

  const location = useLocation()
  const currentPath = location.pathname.split('/')[1]
  const theme = useSelector((state) => state.theme)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = async() => {
        try {
            dispatch(signOutUserStart())
            const res = await fetch('/api/auth/signout')
            const data = res.json()

            if(data.success === false) {
                  dispatch(signOutUserFailure(data.message))
                  return
            }
            
            dispatch(signOutUserSuccess(data))
            navigate('/adimin-login')
        } catch (error) {
           console.log(error)
        }
  }

  return (
    
             <nav className=' flex navbar_wrapper z-[3]  w-full py-[60px] px-10  xl:px-0   items-center justify-between scale-90 lg:scale-100  '>
              
              <Link to='/' className='font-bold font-forum  bg-grayWhiteText text-gradient text-3xl '>
                    Admin Panel 
              </Link>

              <div className="navbar_container flex  absolute top-[98%] z-20 left-1/2 transform -translate-x-1/2 md:transform-none md:static bg-lightGray dark:bg-lgBackgroundDark dark:text-white w-[270px] h-[65px] rounded-full items-center">
                    <ul className='flex w-full items-center z-20 justify-around text-[15px]'>
                          <li className={`navbar_actived_button ${ currentPath === 'admin-dashboard' ? ' bg-white  dark:bg-themeBtnIconBg' : '' } `}>
                              <Link to='/admin-dashboard'>Home</Link>
                          </li>     
                          <li className={`navbar_actived_button ${ currentPath === 'addProject' ? ' bg-white  dark:bg-themeBtnIconBg' : '' } `}>
                              <Link to='/addProject'>Add Project</Link>
                          </li>    
                  
                    </ul>
              </div>



              <div className='w-[149px] h-[55px] bg-gray_70 dark:bg-lgBackgroundDark flex items-center justify-center rounded-full'  >
              <button onClick={handleSignOut} className="w-[136.73px] h-[46.95px] rounded-full bg-white_35 dark:bg-lgBackgroundDark flex items-center relative transition-colors duration-300">
                        <div className={`flex  w-full font-forum h-[46.95px] items-center justify-center rounded-full absolute transition-transform duration-300`} >
                           Logout
                        </div>
              </button>

              </div>
        

        </nav>
          
 
  );
};

export default AdminSideBar;
