import { useEffect } from 'react';
interface Props {
    heading: string,
    info: string,
    bgShapeSrc: string,
    randomShapeSrc: string,
    bgColorHover: string,
    bgColor1024: string,
}
const Disciplines = ({heading, info, bgShapeSrc, randomShapeSrc, bgColorHover, bgColor1024}: Props) => {
    // useEffect(() => {
    //     const discipline = document.querySelector(".Discipline") as HTMLElement,
    //     max1024 = window.matchMedia("(max-width: 1024px)");

    //     discipline.addEventListener("mouseover", () => {
    //         discipline.classList.add(`${bgColor}`);
    //     });
    //     discipline.addEventListener("mouseover", () => {
    //         discipline.classList.remove(`${bgColor}`);
    //     });
    //     function background() {
    //         if (max1024.matches) {
    //             discipline.classList.add(`${bgColor}`);
    //         }
    //     };
    //     background();
        
    //     window.addEventListener("resize", background)
    // }, []);
        
    return ( 
        <div className="Discipline ">
            <div className={`h-[600px] w-full group relative border border-[#3f3f3f] px-[50px] py-[40px] ${bgColorHover} text-white hover:text-black 
            overflow-hidden cursor-pointer ${bgColor1024} md:text-black md:h-[550px] sm:h-[450px] md:px-[30px] md:py-[20px] `}>
                <div className="h-full relative flex flex-col justify-between z-[999]">
                    <div>
                        <div className="text-[52px] leading-[55px] md:text-[38px] md:leading-[42px] ">{heading}</div>
                        <div className="w-[85%] mt-[20px] md:mt-[10px] text-[20px] font-normal leading-[30px] md:text-[16px] ">{info}</div>
                    </div>
                    <div className="flex items-center group text-[14px] cursor-pointer">
                        <div className="mb-[5px] uppercase group-hover:underline">VIEW OPPURTUNITIES<i className="fa-sharp fa-regular fa-arrow-up-right"></i></div>
                        <div className="w-7 h-7 ml-[5px] rounded-full border-[1px] border-white border-solid
                            group-hover:bg-black group-hover:border-black flex items-center justify-center md:border-black">
                            <i className="fa-solid fa-arrow-right text-[14px] text-white -rotate-45 md:text-black group-hover:text-white "></i>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 md:hidden ">
                    <img src={bgShapeSrc} alt="" className="h-[600px]" />
                </div>
                <div className="absolute bottom-[40px] right-[100px] opacity-0 group-hover:opacity-100 md:hidden ">
                    <img src={randomShapeSrc} alt="" className="h-[300px]" />
                </div>
            </div>
        </div>
    );
}
export default Disciplines;