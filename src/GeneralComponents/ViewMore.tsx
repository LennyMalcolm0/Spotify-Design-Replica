interface Props {
    text: string;
    textColor1: string;
    textColor2: string;
    arrowDirection: string;
}

const ViewMore = ({text, textColor1, textColor2, arrowDirection}: Props) => {
    return ( 
        <div>
            <div className={`sm:hidden flex items-center group text-[14px] text-${textColor1} cursor-pointer`}>
                <div className="mb-[5px] uppercase group-hover:underline decoration-double">{text}</div>
                <div className={`w-6 h-6 ml-[5px] rounded-full border-[1px] border-${textColor1} border-solid transition-all duration-200 group-hover:bg-${textColor1} flex items-center justify-center`}>
                    <i className={`fa-solid fa-arrow-${arrowDirection} group-hover:text-${textColor2}`}></i>
                </div>
            </div>
        </div>
     );
}
 
export default ViewMore;