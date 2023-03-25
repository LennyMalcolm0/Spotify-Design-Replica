interface Props {
    heading: string,
    info: string,
    bgShapeSrc: string,
    randomShapeSrc: string,
    bgColor: string,
}
const Disciplines = ({heading, info, bgShapeSrc, randomShapeSrc, bgColor}: Props) => {
    return ( 
        <div className="Discipline">
            <div className={`h-[600px] w-full group relative border border-[#3f3f3f] px-[50px] py-[40px] bg-black hover:bg-${bgColor} text-white hover:text-black overflow-hidden cursor-pointer`}>
                <div className="h-full relative flex flex-col justify-between z-[999]">
                    <div>
                        <div className="text-[52px] leading-[55px] ">{heading}</div>
                        <div className="w-[85%] pt-[20px] text-[20px] font-normal leading-[30px] ">{info}</div>
                    </div>
                    <div className="flex items-center group text-[14px] cursor-pointer">
                        <div className="mb-[5px] uppercase group-hover:underline">VIEW OPPURTUNITIES</div>
                        <div className="w-6 h-6 ml-[5px] rounded-full border-[1px] border-white border-solid transition-all duration-200
                            group-hover:bg-black group-hover:border-black flex items-center justify-center">
                            <img src="icons\up-right-arrow(white).svg" alt="" className="h-4" />
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 hidden group-hover:block ">
                    <img src={bgShapeSrc} alt="" className="h-[600px]" />
                </div>
                <div className="absolute bottom-[40px] right-[100px] hidden group-hover:block ">
                    <img src={randomShapeSrc} alt="" className="h-[300px]" />
                </div>
            </div>
        </div>
    );
}
export default Disciplines;