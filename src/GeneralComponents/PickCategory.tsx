import { useState } from "react";
import './Components.css';

interface Props {
    textColor: string;
    bgColor: string;
    
}
const PickCategory = ({textColor, bgColor }: Props) => { 
    const [openCategory, setOpenCategory] = useState<boolean | undefined>();

    return ( 
        <div className={`relative text-${textColor}`}>
            <div className="w-full">
                <div className="flex items-center justify-center mt-[150px] text-[32px] md:text-[28px] sm:text-[24px] font-normal">
                    <div onClick={() => setOpenCategory(true)} className="flex cursor-pointer">
                        <div>Pick a category</div>
                        <i className="fa-solid fa-angle-down text-[25px] md:text-[20px] mt-[15px] sm:mt-[12px] sm ml-2"></i>
                    </div>
                </div>
                
                <div className={`${openCategory && "open-category"} ${openCategory === false && "close-category"} ${openCategory === undefined && "hidden"} 
                    w-full h-full fixed top-0 md:bottom-0 text-${textColor} z-[999] sm:z-[99999999] opacity-100`}
                >
                    <div className="popup-background w-full h-full bg-[#838282] opacity-30"></div>
                    <div className={`category-content h-[450px] md:h-[550px] sm:h-[500px] w-screen absolute top-0 left-0 right-0 
                        md:bottom-0 bg-${bgColor} flex items-center justify-center z-[999] `}
                    >
                        <div className="w-[800px] mx-auto">
                            <div className="flex items-center justify-center text-[32px] md:text-[26px] sm:text-[24px] font-normal mb-[10px]">
                                <div onClick={() => setOpenCategory(false)} className="flex cursor-pointer">
                                    <div>Pick a category</div>
                                    <i className="fa-solid fa-angle-up text-[25px] md:text-[18px] mt-[15px] md:mt-[14px] sm:mt-[12px] sm ml-2"></i>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap items-center justify-around md:flex-col text-[55px] md:text-[40px] sm:text-[32px] ">
                                <div className="cursor-pointer hover:opacity-[0.5] ">All Stories</div>
                                <div className="cursor-pointer hover:text-orange-300 ">Design</div>
                                <div className="cursor-pointer hover:text-blue-500 ">Inspiration</div>
                                <div className="cursor-pointer hover:text-pink-300 ">Noted</div>
                                <div className="cursor-pointer hover:text-blue-300 ">Process</div>
                                <div className="cursor-pointer hover:text-green-300 ">Listen</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whitespace-nowrap text-[152px] md:text-[90px] sm:text-[60px] ml-[50%] translate-x-[-350px] select-none">
                    <span className="cursor-pointer">All Stories</span>
                    <span className="cursor-pointer ml-[50px] opacity-20">Design</span>
                    <span className="cursor-pointer ml-[50px] opacity-20">Inspiration</span>
                    <span className="cursor-pointer ml-[50px] opacity-20">Noted</span>
                    <span className="cursor-pointer ml-[50px] opacity-20">Process</span>
                    <span className="cursor-pointer ml-[50px] opacity-20">Listen</span>
                </div>
            </div>
        </div>
     );
}
 
export default PickCategory;