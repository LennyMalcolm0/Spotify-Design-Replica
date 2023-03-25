import './Stories.css';
import NavBar from '../GeneralComponents/NavBar';
import PickCategory from '../GeneralComponents/PickCategory';
import { Link } from 'react-router-dom';
import { stories } from '../AppData/Data';
import ViewMore from '../GeneralComponents/ViewMore';
import Inbox from '../GeneralComponents/Inbox';

const StoriesPage = () => {
    return ( 
        <div className="Stories">
            <NavBar logoUrl="Images\Spotify Logo Black.svg" color="black" activeLink="Stories" />

            <div className="top-bg-shape absolute left-[-5vw] sm:left-0">
                <img src="background-shapes\stories-top-bg.svg" alt="" className="" draggable="false" />
            </div>

            <PickCategory pageTextColor="text-black" />

            <div className="w-fit relative whitespace-nowrap text-[152px] md:text-[90px] sm:text-[64px] text-black mt-[10px] leading-[162px] md:leading-[95px] sm:leading-[67px] sm:mt-0 ml-[20%] sm:translate-x-0 select-none">
                <span className="category cursor-pointer">All Stories</span>
                <span className="category cursor-pointer ml-[50px] opacity-20">Design</span>
                <span className="category cursor-pointer ml-[50px] opacity-20">Inspiration</span>
                <span className="category cursor-pointer ml-[50px] opacity-20">Noted</span>
                <span className="category cursor-pointer ml-[50px] opacity-20">Process</span>
                <span className="category cursor-pointer ml-[50px] opacity-20">Listen</span>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] ">
                <div className="relative grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 mt-[100px]">
                    {stories.map((item, index) => (
                        <div key={index}>
                            {item.listenTheme ?
                                <div className="story-card group h-fit hover:cursor-pointer">
                                    <div className="w-full relative">
                                        <img src={item.imageSrc} alt="" className="w-full" />
                                        <div className="w-[45px] h-[45px] transition-all duration-200 group-hover:bg-white rounded-full border-2 border-gray-400 border-opacity-20 border-solid text-[14px] absolute bottom-[25px] left-[25px] flex items-center justify-center ">
                                            <i className="fa-solid fa-play"></i>
                                        </div>
                                    </div>
                                    <div className="themes w-fit peer flex flex-wrap gap-x-2 mt-0.5 mb-1">
                                        <Link to="/listen"><div className="w-fit py-px px-1.5 mt-2 bg-black text-[14px] whitespace-nowrap text-white hover:opacity-50 uppercase">Listen</div></Link>
                                        {item.listenTheme.map((theme, index) => (
                                            <div key={index} className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">{theme}</div>
                                        ))}
                                    </div>
                                    <div className="w-full text-[24px] text-black sm:text-[18px] leading-6 group-hover:underline peer-hover:no-underline">{item.heading}</div>
                                    <div className="w-full mt-2 text-[14px] text-black font-normal leading-5 normal-case">{item.info}</div>
                                </div> :

                                <div className="story-card group h-fit hover:cursor-pointer">
                                    <img src={item.imageSrc} alt="" className="w-full" />
                                    <div className="peer w-fit py-px px-1.5 mt-2.5 mb-1 bg-black text-[14px] text-white hover:opacity-50 uppercase">{item.theme}</div>
                                    <div className="w-full text-[24px] sm:text-[18px] leading-6 group-hover:underline peer-hover:no-underline">{item.heading}</div>
                                    <div className="w-full mt-2 text-[14px] font-normal leading-5 normal-case">{item.info}</div>
                                </div>
                            }
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-[60px] mb-[100px]">
                    <div></div>
                    <ViewMore text="View more stories" textColor1="black" textColor2="white" arrowDirection="down" />
                </div>
            </div>
            
            <Inbox />
        </div>
     );
}
 
export default StoriesPage;