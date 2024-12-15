
import Header from "./Header"
import ProjectCard from "./ProjectCard"
 
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"


const SelectedProject = () => {
     const { projects, loading, error }  = useSelector((state) => state.projects)
     const dispatch = useDispatch();
  
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
       

     return (
          <div className="dark:text-white mt-[10rem] sm:mt-[13rem] flex flex-col gap-[4rem] sm:gap-[5rem]  items-center justify-center max-w-5xl mx-auto">
               <Header firstTitle='Selected' secondTitle='Projects' />

               <div className="flex flex-col justify-center items-center xl:flex-row gap-10  ">
                    {/* <ProjectCard /> */}

                   {projects.slice(0,2).map((item) => (
                   
                      <ProjectCard item={item} key={item.title} />
                   )) }
 
               </div>
          </div>
     )
}

export default SelectedProject
