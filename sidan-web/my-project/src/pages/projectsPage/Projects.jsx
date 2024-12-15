import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

import ProjectCard from '../../components/ProjectCard'
import { patternProjectBlack, patternWhiteProjectPage } from '../../assets'
import {
   addProjectStarted,
   addProjectSuccess,
   addProjectFailure,
 } from "../../redux/state/projectsSlice.js"; 

const Projects = () => {
   const [ selectedTerm, setSelectedTerm ] = useState('All')
 
   const { projects, loading, error }  = useSelector((state) => state.projects)
   const dispatch = useDispatch();

 
   const categories = [
      { name: 'All', width: 'w-[116px] sm:w-[136px]' },
      { name: 'React JS', width: 'w-[162px] sm:w-[193px]' },
      { name: 'UI /UX Website', width: 'w-[162px] sm:w-[212px] ' },
      { name: 'Full Stack Website', width: 'w-[172px] sm:w-[212px] ' },
      { name: 'Website Designs', width: 'w-[200px] sm:w-[223px] ' },
      { name: 'Others', width: 'w-[300px] sm:w-[381.56px] ' },
    ];
   const handleClick = (name) => {
      setSelectedTerm(name)
   }

   useEffect(() => {
      if (projects.length === 0) {  // Check if the data is already present in Redux
         dispatch(addProjectStarted())
   
         const fetchProjects = async () => {
            try {
               const res = await fetch('/api/project/getProjects')
               const data = await res.json()
               data.forEach((project) => dispatch(addProjectSuccess(project)))
            } catch (error) {
               console.log(error)
               dispatch(addProjectFailure(error.message))
            }
         }
   
         fetchProjects()
      }
   }, [dispatch, projects.length])  // Dependencies are updated to include 'projects.length'
   

   const filteredProjects =
    selectedTerm === "All"
      ? projects
      : projects.filter((pro) => pro.category === selectedTerm);
 
  return (
    <div className='dark:text-white mt-[6rem] sm:mt-[8rem] flex flex-col gap-[4rem] sm:gap-[5rem]  items-center justify-center max-w-5xl mx-auto'>
          
          {filteredProjects.length > 3 && (
            <>
               <img 
                  src={patternProjectBlack} 
                  className="absolute top-0 left-0 z-[-1] dark:hidden object-cover w-full h-full sm:w-auto sm:h-auto" 
                  alt="" 
               />
               <img 
                  src={patternWhiteProjectPage} 
                  className="absolute top-0 left-0 z-[-1] hidden dark:block object-cover w-full h-full sm:w-auto sm:h-auto" 
                  alt="" 
               />
            </>
            )}

       <div className='font-forum scale-95 lg:scale-100 text-[17px] sm:text-[19px] w-full h-[162px] max-w-[850px] flex flex-wrap items-center justify-center gap-5 sm:p-0 px-2'>
           {categories.map((category)=> (
            <div key={category.name} 
                 className={`project-category h-[58px] sm:h-[65px] border border-black dark:border-white  rounded-full  ${category.width} 
                          flex items-center justify-center cursor-pointer ${selectedTerm === category.name && 'dark:bg-white dark:text-black bg-black text-white'}`} 
                 onClick={() => handleClick(category.name)}> 
              {category.name}
             </div>
 
           ))}
       </div>

       <div className="grid grid-cols-1 mt-[7rem] sm:mt-[4rem]  xl:grid-cols-2 gap-10  " style={{ gridAutoFlow: 'row dense' }}>
          {loading && <p className='text-blue-400'>Loading projects...</p>}
          {error && <p className='text-red-500'>Error: {error}</p>}
          
          {filteredProjects.map((item, index) => (
               <ProjectCard item={item} projectDetails={true} key={item.id || `${item.title}-${index}`} />
            ))}
        </div>  
    </div>  
  )
}

export default Projects