import { Link } from "react-router-dom";

interface Props {
    h1Text?: string;
    h2Text?: string;
    link?: string;
    linkClass?: string;
    actionText: string;
    textColor1: string;
    textColor2: string;
    arrowDirection: string;
    compClass?: string;
}

const ViewMore = ({h1Text, h2Text, link, linkClass, actionText, textColor1, textColor2, arrowDirection, compClass}: Props) => {
    return ( 
        <div>
            <div className={`justify-between ${compClass}`}>
                <div className="text-[32px] sm:text-[22px] leading-[35px] sm:leading-[25px]">
                    <div>{h1Text}</div>
                    <div className="font-normal">{h2Text}</div>
                </div>

                {link ? 
                    <Link to={link} className={linkClass}>
                        <div className={`flex items-center group text-[14px] text-${textColor1}  cursor-pointer`}>
                            <div className="mb-[5px] uppercase group-hover:underline decoration-double">{actionText}</div>
                            <div className={`w-6 h-6 ml-[5px] rounded-full border-[1px] border-${textColor1} border-solid group-hover:bg-${textColor1} flex items-center justify-center`}>
                                <i className={`fa-solid fa-arrow-${arrowDirection} group-hover:text-${textColor2}`}></i>
                            </div>
                        </div>
                    </Link> :
                    <div className={`flex items-center group text-[14px] text-${textColor1}  cursor-pointer`}>
                        <div className="mb-[5px] uppercase group-hover:underline decoration-double">{actionText}</div>
                        <div className={`w-6 h-6 ml-[5px] rounded-full border-[1px] border-${textColor1} border-solid group-hover:bg-${textColor1} flex items-center justify-center`}>
                            <i className={`fa-solid fa-arrow-${arrowDirection} group-hover:text-${textColor2}`}></i>
                        </div>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default ViewMore;