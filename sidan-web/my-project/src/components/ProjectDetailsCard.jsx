import { useState } from "react";
import { rightArrowRedBlue } from "../assets"

 
const ProjectDetailsCard = ({ item }) => {
 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNextImage = () => {
        if (item?.imageUrls?.length) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % item.imageUrls.length);
        }
    }

    const handlePrevImage = () => {
        if (item?.imageUrls?.length) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + item.imageUrls.length) % item.imageUrls.length);
        }
    }

    const handleDotClick = (index) => {
        setCurrentIndex(index);
      };

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div className="projectDetails-card    md:w-full md:h-auto   pb-24    relative rounded-[35px] bg-white dark:bg-[#202028] shadow-even-md  mt-2 ">
        
        <div className="lg:h-[538px] w-full relative overflow-hidden">
            {item?.imageUrls?.length > 0 ? ( // Ensure item and item.imageUrls are defined
                <>
                    <div className="flex transition-transform duration-500 ease-in-out"
                         style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
                        
                         {item.imageUrls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                onClick={openModal} 
                                className="object-cover object-top cursor-pointer sm:h-full w-full rounded-tr-[35px] rounded-tl-[35px] flex-shrink-0"
                                alt={`Carousel ${index}`}
                            />
                         ))}
                    </div>


                    {item.imageUrls.length > 1 && (
                        <div
                            className="absolute top-1/2 right-3 sm:right-10 text-black cursor-pointer"
                            onClick={handleNextImage}
                        >
                            <img
                                src={rightArrowRedBlue}
                                className="w-[48px] h-[48px] sm:w-[55px] sm:h-[55px]"
                                alt="Next"
                            />
                        </div>
                    )}

                    {item.imageUrls.length > 1 && (
                        <div
                            className="absolute top-1/2 left-3 sm:left-10 rotate-180 text-black cursor-pointer"
                            onClick={handlePrevImage}
                        >
                            <img
                                src={rightArrowRedBlue}
                                className="w-[48px] h-[48px] sm:w-[55px] sm:h-[55px]"
                                alt="Previous"
                            />
                        </div>
                    )}
                </>
            ): (
                <p className="text-center text-gray-500 dark:text-gray-400">No images available</p>
            )}
        </div>

        {isModalOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-5xl ">
            <img
              src={item.imageUrls[currentIndex]}
              alt={`Fullscreen ${currentIndex}`}
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <button
              className="absolute top-4 right-4 bg-[#5f5e5ec4] text-white rounded-full h-10 w-10 text-lg"
              onClick={closeModal}
            >
              ✕
            </button>

            {item.imageUrls.length > 1 && (
                        <div
                            className="absolute top-1/2 left-3 sm:left-10 rotate-180 text-black cursor-pointer"
                            onClick={handlePrevImage}
                        >
                            <img
                                src={rightArrowRedBlue}
                                className="w-[48px] h-[48px] sm:w-[55px] sm:h-[55px]"
                                alt="Previous"
                            />
                        </div>
                    )}

            {item.imageUrls.length > 1 && (
                        <div
                            className="absolute top-1/2 right-3 sm:right-10 text-black cursor-pointer"
                            onClick={handleNextImage}
                        >
                            <img
                                src={rightArrowRedBlue}
                                className="w-[48px] h-[48px] sm:w-[55px] sm:h-[55px]"
                                alt="Next"
                            />
                        </div>
            )}

          </div>
        </div>
      )}

        {item?.imageUrls?.length > 1 && (
                <div className="relative border border-[#a9a8a81f]">
                     <div className="absolute top-0 -translate-y-2 sm:translate-y-0 left-1/2 transform  -translate-x-1/2  flex   gap-2 mt-2 ">
                        {item.imageUrls.map((_, index) => (
                            <div   key={index} onClick={() => handleDotClick(index)} className="cursor-pointer  h-3 flex justify-end items-end">
                                    <div
                                        className={`w-[30px] sm:w-[25px] h-[3px] sm:h-[5px] rounded-full  transition-color duration-300 
                                            ${ currentIndex === index
                                                ? " dark:bg-[#F1EDED] bg-black w-[55px] sm:w-[46px] "
                                                : "bg-grayDarkLine" }`}
                                
                                    ></div>
                            </div>
                        ))}
                    </div>
                 </div>
            )} 

     
        
       

        <div className="p-6 sm:p-12 pt-6 font-poppins">
        
            <div className="flex gap-3 pb-6 flex-wrap items-center justify-center md:justify-start md:items-start ">
            
                {item?.skills?.map((skill, index) => (
                    <div
                        key={index}
                        className="flex  text-[#2D2D2D] dark:text-[#DDDDE0] bg-[#E3E3E3] dark:bg-[#545463] text-[14px] justify-center items-center w-[117px] h-[43px] rounded-[10px] truncate"
                    >
                        {skill}
                    </div>
                ))}

         
            </div>

            <p className="text-[16px] sm:text-[17px] font-normal leading-[2] sm:leading-[2.4] tracking-[2px] md:tracking-[0.1em] text-black dark:text-white">
            {item?.description?.[0] || "No description available"}
            </p>


       {item?.description?.length > 2    &&(
            <div className="flex flex-col mt-[3rem] gap-6 ">
                <h2 className="text-[22px] sm:text-[24px]  font-medium tracking-widest"> Key Features </h2> 
                 {item.description.slice(1).map((desc, idx) => (
                    <div key={idx} className="flex gap-3 text-[15px]  sm:text-[16px] ">
                        ●   
                        <p key={idx} className="font-numans  tracking-[1.7px] leading-[170%]"> {desc}</p>
                    </div>   
                 ))}
            </div>
        )}

        </div>

    
        <div className="h-10  sm:h-auto ">
                <a href={item?.githubLink || "#"} target="_blank" className="flex justify-end items-center pb-6 pr-4 sm:p-0 gap-3  linkText cursor-pointer">
                        
                        <p className="font-forum absolute sm_static bottom-10 right-64 sm:text-[22px] hover:bg-lgLink hover:text-gradient border-b dark:border-[#ffffffa4]  border-black">Source Code</p>
                        <svg
                            className="absolute sm_static overflow-hidden rounded-full bottom-8 right-52 dark:hidden w-[40px] h-[40px]  sm:w-[48px] sm:h-[48px] "
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="black"
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
                        <svg
                            className="absolute sm_static overflow-hidden rounded-full bottom-8 right-52 hidden dark:block w-[40px] h-[40px]  sm:w-[48px] sm:h-[48px]"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="white"
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
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>

                </a>

                <a href={item?.liveLink || "#"} target="_blank" className="flex justify-end items-center  pr-4 sm:p-0 gap-3   linkText cursor-pointer">
                    
                    <p className="font-forum absolute sm_static bottom-10 right-20 sm:text-[22px] hover:bg-lgLink hover:text-gradient border-b dark:border-[#ffffffa4]   border-black">Live Website</p>
                    <svg
                        className="absolute sm_static overflow-hidden rounded-full bottom-8 right-7 dark:hidden w-[40px] h-[40px]  sm:w-[48px] sm:h-[48px]"
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
                        className="absolute sm_static overflow-hidden rounded-full bottom-8 right-7 hidden dark:block  w-[40px] h-[40px]  sm:w-[48px] sm:h-[48px]"
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

                </a>
        </div>
   </div>
  )
}

export default ProjectDetailsCard