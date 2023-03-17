import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Components.css';

const PickCategory = ({ pageTextColor }: { pageTextColor: string }) => { 
    useEffect(() => {
        const openCategory = document.querySelector(".open-category") as HTMLElement,
        closeCategory = document.querySelector(".close-category") as HTMLElement,
        categoryContent = document.querySelector(".category-content") as HTMLElement,
        categoryPopup = document.querySelector(".category-popup") as HTMLElement,
        appBody = document.querySelector("body") as HTMLElement;

        openCategory.addEventListener("click", () => {
            categoryPopup.classList.remove("hidden");
            categoryContent.style.animation = "openCategory 0.8s ease 0s 1 normal forwards";
            appBody.style.overflowY = "hidden";
        })
        closeCategory.addEventListener("click", () => {
            categoryContent.style.animation = "closeCategory 0.8s ease 0s 1 normal forwards";
            setTimeout(() => {
                categoryPopup.classList.add("hidden");
                appBody.style.overflowY = "scroll";
            }, 800);
        })
    }, []);

    return ( 
        <div className={`Pick-category relative ${pageTextColor}`}>
            <div className="w-full h-full">
                <div className="flex items-center justify-center mt-[150px] text-[32px] font-normal">
                    <div className="open-category flex items-center cursor-pointer">
                        <div>Pick a category</div>
                        <i className="fa-solid fa-angle-down text-[25px] mt-[10px] ml-2"></i>
                    </div>
                </div>
                
                <div className="hidden category-popup w-full h-full fixed top-0 text-black">
                    <div className="popup-background w-full h-full bg-[#838282] opacity-20"></div>
                    <div className="category-content h-[450px] w-full absolute top-0 bg-white flex items-center justify-center z-[999] ">
                        <div className="w-[800px] mx-auto">
                            <div className="flex items-center justify-center text-[32px] font-normal mb-[10px]">
                                <div className="close-category flex cursor-pointer">
                                    <div>Pick a category</div>
                                    <i className="fa-solid fa-angle-up text-[25px] mt-[15px] ml-2"></i>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap items-center justify-around text-[55px] ">
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
            </div>

            <div className="w-fit whitespace-nowrap text-[152px] leading-[164px] tracking-tight mt-[10px] ml-[50%] translate-x-[-350px]">
                <span className="category cursor-pointer">All Stories</span>
                <span className="category cursor-pointer ml-[50px] opacity-40">Design</span>
                <span className="category cursor-pointer ml-[50px] opacity-40">Inspiration</span>
                <span className="category cursor-pointer ml-[50px] opacity-40">Noted</span>
                <span className="category cursor-pointer ml-[50px] opacity-40">Process</span>
                <span className="category cursor-pointer ml-[50px] opacity-40">Listen</span>
            </div>
        </div>
     );
}
 
export default PickCategory;