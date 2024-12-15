import React from 'react'

const ExpertiseSectionCard = ({ details }) => {
  return (
    <div className="skill_card" key={details.skillName}> 
            <img src={details.imageWhite} className="hidden dark:block w-[50px] sm:w-[65px]  h-[50px] sm:h-[65px]" alt={details?.skillName} />  
            <img className="dark:hidden  w-[50px] sm:w-[65px]  h-[50px] sm:h-[65px] " src={details.imageDark} alt={details.skillName} /> 
           
           <p className="text-[#463F70] dark:text-white ">{details.skillName}</p> 
    </div>
  )
}

export default ExpertiseSectionCard