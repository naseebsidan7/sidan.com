 
const Header = ({firstTitle, secondTitle}) => {
  return (
    <div className="w-[302px] h-[59px]  font-poppins text-[16px]  sm:text-[20px]   rounded-[63px] text-[#66686E] dark:text-white flex items-center justify-center gap-3 tracking-widest bg-[#E6E6E6] dark:bg-[#2A2936]">
        
            <span > {firstTitle} </span>
            <span className="bg-linearGradient_text2 text-gradient"> {secondTitle} </span>
      
    </div>
  )
}

export default Header