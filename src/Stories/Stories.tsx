import './Stories.css';
import NavBar from '../GeneralComponents/NavBar';
import PickCategory from '../GeneralComponents/PickCategory';
import { stories } from '../AppData/Data';
import ViewMore from '../GeneralComponents/ViewMore';
import Inbox from '../GeneralComponents/Inbox';
import StoriesComponent from '../GeneralComponents/StoriesComp';

const StoriesPage = () => {
    return ( 
        <div className="Stories">
            <NavBar logoUrl="Images\Spotify Logo Black.svg" color="black" activeLink="Stories" />

            <div className="top-bg-shape absolute left-[-5vw] sm:left-0">
                <img src="background-shapes\stories-top-bg.svg" alt="" className="" draggable="false" />
            </div>

            <div className="absolute inset-0 h-fit w-full">
                <PickCategory pageTextColor="text-black" />

                <div className="w-fit relative whitespace-nowrap text-[152px] md:text-[90px] sm:text-[64px] 
                text-black mt-[10px] leading-[162px] md:leading-[95px] sm:leading-[67px] sm:mt-0 ml-[20%] sm:translate-x-0 select-none">
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
                                <StoriesComponent imageSrc={item.imageSrc} theme={item.theme} listenTheme={item.listenTheme} heading={item.heading} info={item.info} />
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
        </div>
     );
}
 
export default StoriesPage;