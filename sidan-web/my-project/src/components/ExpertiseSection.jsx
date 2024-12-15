import { apiDark, apiWhite, bootstrapDark, bootstrapWhite, cssDark, cssWhite, expressDark, expressWhite, figmaDark, figmaWhite, gitDark, githubDark, githubWhite, gitWhite, htmlDark, htmlWhite, jsDark, jsWhite, mongodbDark, mongodbWhite, muiDark, muiWhite, nodejsDark, nodejsWhite, npmDark, npmWhite, reactDark, reactWhite, reduxDark, reduxWhite, tailwindcssDark, tailwindcssWhite } from "../assets"
import { expertise } from "../constants"
import ExpertiseSectionCard from "./ExpertiseSectionCard"
import Header from "./Header"

 
const ExpertiseSection = () => {
  return (
    <div  className="dark:text-white mt-[8rem] sm:mt-[12rem] flex flex-col gap-[4rem] sm:gap-[5rem]  items-center justify-center">
                <Header firstTitle='My' secondTitle='Expertise' />
                
                <div  className=" max-w-5xl w-full mx-auto grid grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4  
                     gap-x-[100px] sm:gap-x-[210px] gap-y-[96px] p-[50px] sm:p-[90px]  rounded-[35px] bg-white dark:bg-[#202028] shadow-even-md place-items-center">
                
                    {
                         expertise.map((item) => (
                               <ExpertiseSectionCard details={item} key={item.skillName+item.id}  />
                         ))
                    }

                </div>
      </div>
  )
}

export default ExpertiseSection