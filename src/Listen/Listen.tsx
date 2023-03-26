import NavBar from '../GeneralComponents/NavBar';
import PickCategory from '../GeneralComponents/PickCategory';
import { musicGenre, listenStories } from '../AppData/Data';
import ViewMore from '../GeneralComponents/ViewMore';
import Inbox from '../GeneralComponents/Inbox';
import StoriesComponent from '../GeneralComponents/StoriesComp';

const ListenPage = () => {

    return ( 
        <div className="Listen">
            <NavBar logoUrl="Images\Spotify Logo White.svg" color="white" activeLink="Listen" />

            <div className="absolute inset-0 bg-black h-fit w-full">
                <PickCategory pageTextColor="text-white" />
                <div className="w-fit whitespace-nowrap text-[152px] md:text-[90px] sm:text-[64px] text-white mt-[10px] leading-[162px] md:leading-[95px] sm:leading-[67px] sm:mt-0 ml-[20%] sm:translate-x-0 select-none">
                    <span className="category cursor-pointer">All Stories</span>
                    <span className="category cursor-pointer ml-[50px] opacity-20">Design</span>
                    <span className="category cursor-pointer ml-[50px] opacity-20">Inspiration</span>
                    <span className="category cursor-pointer ml-[50px] opacity-20">Noted</span>
                    <span className="category cursor-pointer ml-[50px] opacity-20">Process</span>
                    <span className="category cursor-pointer ml-[50px] opacity-20">Listen</span>
                </div>

                <div className="w-full text-center text-[32px] md:text-[28px] sm:text-[24px] text-white mt-[60px] sm:mt-[20px] px-[60px] md:px-[30px] sm:px-[15px]">Playlists, podcasts, and other audio goodness from our team.</div>
                <div className="w-full px-[60px] overflow-hidden">
                    <div className="w-full max-w-[1400px] mx-auto sm:mr-[30px] flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-3 my-[20px]">
                        {musicGenre.map((genre, index) => (
                            <div key={index} className="px-[4px] sm:px-[8px] sm:p-[4px] border-2 border-solid border-[#CCF566] text-[#CCF566] text-[14px] whitespace-nowrap cursor-pointer">{genre}</div>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-[1400px] mx-auto px-[60px] md:px-[30px] sm:px-[15px]">
                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 mt-[100px] sm:mt-[60px]">
                        {listenStories.map((item, index) => (
                            <div key={index}>
                                <StoriesComponent imageSrc={item.imageSrc} listenTheme={item.listenTheme} heading={item.heading} info={item.info} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-[60px]">
                        <div></div>
                        <ViewMore text="View more stories" textColor1="white" textColor2="black" arrowDirection="down" />
                    </div>
                </div>
                
                <Inbox />
            </div>
        </div>
     );
}
 
export default ListenPage;