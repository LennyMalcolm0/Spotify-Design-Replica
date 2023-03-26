interface Props {
    heading: string,
    info: string,
    bgShapeSrc: string,
    randomShapeSrc: string,
    bgColor: string,
}
const Disciplines = ({heading, info, bgShapeSrc, randomShapeSrc, bgColor}: Props) => {
    return ( 
        <div className="Discipline transition-all duration-300">
            <div className={`h-[600px] w-full group relative border border-[#3f3f3f] px-[50px] py-[40px] bg-black hover:bg-${bgColor} text-white hover:text-black 
            overflow-hidden cursor-pointer md:bg-${bgColor} md:h-[550px] sm:h-[450px] md:px-[30px] md:py-[20px] `}>
                <div className="h-full relative flex flex-col justify-between z-[999]">
                    <div>
                        <div className="text-[52px] leading-[55px] md:text-[38px] md:leading-[42px] ">{heading}</div>
                        <div className="w-[85%] mt-[20px] md:mt-[10px] text-[20px] font-normal leading-[30px] md:text-[16px] ">{info}</div>
                    </div>
                    <div className="flex items-center group text-[14px] cursor-pointer">
                        <div className="mb-[5px] uppercase group-hover:underline">VIEW OPPURTUNITIES<i className="fa-sharp fa-regular fa-arrow-up-right"></i></div>
                        <div className="w-7 h-7 ml-[5px] rounded-full border-[1px] border-white border-solid
                            group-hover:bg-black group-hover:border-black flex items-center justify-center">
                            <i className="fa-solid fa-arrow-right text-[14px] text-white -rotate-45 "></i>
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