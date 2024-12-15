import React, { useEffect } from 'react'
import { Link, useLocation, useParams  } from 'react-router-dom'
 
import ProjectDetailsCard from '../../components/ProjectDetailsCard'
import { TpRightArrwBlack, TpRightArrwWhite } from '../../assets'
import { patternWhiteProjectDetails, patternProjectDetails } from "../../assets";

import { useDispatch, useSelector } from 'react-redux'
import { addProjectDetailsFailure, addProjectDetailsStarted, addProjectDetailsSuccess,  } from '../../redux/state/projectsSlice';


const ProjectDetails = () => {
    
    const location = useLocation()
     
    const { id } = useParams()
    console.log(id,'<====id')
    const { projectDetails, loading, error } = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
      // Only fetch if projectDetails is not set or doesn't match the id
      if (!projectDetails || projectDetails.index !== parseInt(id)) {
        dispatch(addProjectDetailsStarted());
        
        const fetchProjectDetails = async () => {
          try {
            const res = await fetch(`/api/project/getProject/${id}`);
            const data = await res.json();
            dispatch(addProjectDetailsSuccess(data));  // Store data in Redux
          } catch (error) {
            console.error(error);
            dispatch(addProjectDetailsFailure(error.message));
          }
        };
        
        fetchProjectDetails();
      }
    }, [dispatch, id, projectDetails]); // Depend on projectDetails to prevent redundant fetch
    

    console.log(projectDetails,'prid')
  return (
    <div className='dark:text-white mt-[8rem] flex flex-col gap-[3rem] sm:gap-[4rem]  max-w-5xl mx-auto px-6 sm:px-10 md:px-20 xl:px-0'>
          <img  src={patternProjectDetails} className='absolute top-0 left-0  z-[-1] dark:hidden object-cover w-full h-full sm:w-auto sm:h-auto ' alt="" />
          <img  src={patternWhiteProjectDetails} className='absolute top-0 left-0  z-[-1] hidden dark:block object-cover w-full h-full sm:w-auto sm:h-auto ' alt="" />
     
       <div className='flex flex-col md:flex-row items-center justify-between md:border-b border-[#474747]  gap-[1rem] md:gap-[10px] '>
         
          <h3 className="text-[24px] sm:text-[28px]  text-center  md:text-left  lg:text-[30px] border-b border-[#474747] md:border-none  xl:text-[45px]  mb-2 xl:mb-5 font-shippori  bg-grayDarkText   dark:bg-grayWhiteText text-gradient
              text-wrap leading-10 md:leading-relaxed tracking-[2%] line-clamp-2 max-w-4xl capitalize">
              {projectDetails?.title}
          </h3>

            <div className='border border-[#474747] md:border-none px-9 py-3  md:p-0 rounded-full'>
               <Link to='/projects' className='flex group items-center gap-3  hover:border rounded-full border-[#474747]  md:hover:border-opacity-100 md:border-opacity-0  hover:md:px-5 hover:md:py-2 borderPaddingTransition '>
               <h3 className='text-[18px] sm:text-[20px]  xl:text-[26px] text-nowrap font-forum  '>See all</h3>

               <img src={TpRightArrwWhite} className='dark:block hidden w-[14px] h-[14px] md:w-[17px] md:h-[17px] group-hover:rotate-90 transition-transform' alt="" />
               <img src={TpRightArrwBlack} className='dark:hidden w-[14px] h-[14px]  md:w-[17px] md:h-[17px] group-hover:rotate-90 transition-transform'      alt="" />
              </Link>

            </div>
       </div>
          {loading && <p className='text-blue-400'>Loading project...</p>}
          {error && <p className='text-red-500'>Error: {error}</p>}

      { projectDetails && <ProjectDetailsCard item={projectDetails}   />}
       
    </div>
  )
}

export default ProjectDetails