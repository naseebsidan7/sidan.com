import { useState } from "react";
import { Link } from "react-router-dom"
 
const ProjectCard = ({item, projectDetails}) => {

    const handleAnchorClick = (e) => {
        e.stopPropagation();
      };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    
  return (
          <Link key={item.title} onClick={() => window.scrollTo(0, 0)}  to={projectDetails? `/project/${item.index}` :`/projects`} className="project-card  group  sm:w-[459px] sm:h-[634px]  md:w-[556px] md:h-[654px]      relative rounded-[35px] bg-white dark:bg-[#202028] shadow-even-md ">
          <div className="h-[279px] w-full">
              <img src={item.imageUrls[0]} className=" object-cover rounded-tr-[35px] h-full w-full  rounded-tl-[35px] " alt="restuarant" />
          </div>

          <div className="p-6 sm:p-8 pt-6 font-poppins">
              <h3 className="pb-6 text-[20px] sm:text-[23px]  md:text-[26px] text-black dark:text-white  truncate tracking-wider font-normal md:font-medium">{item.title}</h3>

              <div className="flex gap-3 pb-6">
                  {item.skills.slice(0, 3).map((skill, index) => (
                    <div
                      key={index}
                      className="text-[#2D2D2D] dark:text-[#DDDDE0] bg-[#E3E3E3] dark:bg-[#545463] text-[14px] flex justify-center items-center w-[117px] h-[43px] rounded-[10px] truncate sm:hidden"
                    >
                      {skill}
                    </div>
                  ))}
                  
                  {item.skills.slice(0, 4).map((skill, index) => (
                    <div
                      key={index}
                      className="hidden sm:flex text-[#2D2D2D] dark:text-[#DDDDE0] bg-[#E3E3E3] dark:bg-[#545463] text-[14px] justify-center items-center w-[117px] h-[43px] rounded-[10px] truncate"
                    >
                      {skill}
                    </div>
                  ))}
              </div>

              <p className="text-[16px] font-normal leading-[2] sm:leading-[2.4] line-clamp-3 tracking-[2px] md:tracking-[0.1em] text-black dark:text-white">
                {item.description[0]} 
              </p>
          </div>

          <p className={`${!projectDetails && 'sm-seeAllProject'} absolute bottom-10 right-20 mr-1  border-b dark:border-[#a3a3a3] opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-500 text-lg tracking-wider font-forum dark:text-[#e3e2e2]`} >{projectDetails ? 'See project details' : 'See all projects'}</p>

         {projectDetails  &&(
         
            <a href={item.liveLink} target="_blank"  onClick={handleAnchorClick}  onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave} rel="noopener noreferrer" className="flex items-center justify-center absolute bottom-8 left-8 z-0">
                <img className="w-[45px] h-[45px]"
                     src={isHovered ? "../src/assets/gif/globe.gif" : "../src/assets/gif/globepreview.png"}
                     alt="globe" />
                <p className="sm-border sm:border-opacity-0 sm:hover:border-b dark:border-[#a3a3a3] text-xl tracking-wider font-forum bg-linearGradient_text3 dark:bg-linearGradient_text2 text-gradient">Live website</p>
            </a>//

         )}

         <svg
              className="absolute overflow-hidden rounded-full bottom-7 right-7 dark:hidden"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
                  d="M24 46.5C36.4264 46.5 46.5 36.4264 46.5 24C46.5 11.5736 36.4264 1.5 24 1.5C11.5736 1.5 1.5 11.5736 1.5 24C1.5 36.4264 11.5736 46.5 24 46.5Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <g id="arrow_grp">
                  <path
                      d="M29 29V19M29 19H19M29 19L19 29"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
              </g>
          </svg>

          <svg
              className="absolute overflow-hidden rounded-full bottom-7 right-7 hidden dark:block"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
                  d="M24 46.5C36.4264 46.5 46.5 36.4264 46.5 24C46.5 11.5736 36.4264 1.5 24 1.5C11.5736 1.5 1.5 11.5736 1.5 24C1.5 36.4264 11.5736 46.5 24 46.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              />
              <g id="arrow_grp">
                  <path
                      d="M29 29V19M29 19H19M29 19L19 29"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
              </g>
          </svg>


         </Link>
  )
}

export default ProjectCard