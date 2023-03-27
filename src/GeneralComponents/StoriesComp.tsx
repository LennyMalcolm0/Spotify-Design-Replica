import { Link } from "react-router-dom";

// interface OtherStoriesObject {
//     imageSrc: string;
//     theme: string;
//     heading: string;
//     info: string;
// }

// interface ListenStoriesObject {
//     imageSrc: string;
//     theme: string;
//     listenTheme: string[];
//     heading: string;
//     info: string;
// }

// export declare type StoryObject = OtherStoriesObject | ListenStoriesObject;

interface Props {
    imageSrc: string;
    theme?: string;
    listenTheme?: string[];
    heading: string;
    info: string;
}
const StoriesComponent = ({imageSrc, theme, listenTheme, heading, info}: Props) => {
    
    return ( 
        <div className="Stories-component">
            {theme ?
                listenTheme ?
                    <div className="story-card group h-fit cursor-pointer transition-all duration-200">
                        <div className="w-full relative">
                            <img src={imageSrc} alt="" className="w-full" />
                            <div className="w-[45px] h-[45px] group-hover:bg-white rounded-full border-2 
                            border-gray-400 border-opacity-40 border-solid text-[14px] absolute bottom-[25px] left-[25px] flex items-center justify-center ">
                                <i className="fa-solid fa-play"></i>
                            </div>
                        </div>
                        <div className="themes w-fit peer flex flex-wrap gap-x-2 mt-0.5 mb-1">
                            <Link to="/listen"><div className="w-fit py-px px-1.5 mt-2 bg-black text-[14px] whitespace-nowrap text-white hover:opacity-50 uppercase">{theme}</div></Link>
                            {listenTheme.map((theme, index) => (
                                <div key={index} className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">{theme}</div>
                            ))}
                        </div>
                        <div className="w-full text-[24px] sm:text-[18px] leading-6 group-hover:underline peer-hover:no-underline">{heading}</div>
                        <div className="w-full mt-2 text-[14px] font-normal leading-5">{info}</div>
                    </div> :
                    <div className="story-card group h-fit cursor-pointer">
                        <img src={imageSrc} alt="" className="w-full" />
                        <div className="peer w-fit py-px px-1.5 mt-2.5 mb-1 bg-black text-[14px] text-white hover:opacity-50 uppercase">{theme}</div>
                        <div className="w-full text-[24px] sm:text-[18px] leading-6 group-hover:underline peer-hover:no-underline">{heading}</div>
                        <div className="w-full mt-2 text-[14px] font-normal leading-5">{info}</div>
                    </div>
            :
                <div className="story-card group h-fit cursor-pointer transition-all duration-200">
                    <div className="w-full relative">
                        <img src={imageSrc} alt="" className="w-full" />
                        <div className="w-[45px] h-[45px] group-hover:bg-white rounded-full border-2 
                        border-gray-400 border-opacity-40 border-solid text-[14px] absolute bottom-[25px] left-[25px] flex items-center justify-center ">
                            <i className="fa-solid fa-play"></i>
                        </div>
                    </div>
                    <div className="themes w-fit peer flex flex-wrap gap-x-2 mt-0.5 mb-1">
                        {listenTheme?.map((theme, index) => (
                            <div key={index} className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">{theme}</div>
                        ))}
                    </div>
                    <div className="w-full text-[24px] text-white sm:text-[18px] leading-6 capitalize group-hover:underline peer-hover:no-underline">{heading}</div>
                    <div className="w-full mt-2 text-[14px] text-white font-normal leading-5 normal-case">{info}</div>
                </div>
            }
        </div>
     );
}
 
export default StoriesComponent;