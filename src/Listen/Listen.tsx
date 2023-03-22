import NavBar from '../GeneralComponents/NavBar';
import PickCategory from '../GeneralComponents/PickCategory';
import { musicGenre, listenStories } from '../AppData/Data';
import ViewMore from '../GeneralComponents/ViewMore';
import Inbox from '../GeneralComponents/Inbox';

const ListenPage = () => {

    return ( 
        <div className="Listen">
            <NavBar logoUrl="Images\Spotify Logo White.svg" color="white" activeLink="Listen" />

            <div className="absolute inset-0 bg-black h-fit w-full">
                <PickCategory pageTextColor="text-white" />
                <div className="w-full text-center text-[32px] text-white mt-[60px]">Playlists, podcasts, and other audio goodness from our team.</div>
                <div className="w-full px-[60px]">
                    <div className="w-full max-w-[1400px] mx-auto sm:mr-[30px] flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-3 my-[20px]">
                        {musicGenre.map((genre, index) => (
                            <div key={index} className="px-[4px] sm:px-[8px] sm:p-[4px] border-2 border-solid border-[#CCF566] text-[#CCF566] text-[14px] whitespace-nowrap cursor-pointer">{genre}</div>
                        ))}
                    </div>
                </div>
                <div className="max-w-[1400px] w-full mt-[100px] sm:mt-[60px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16">
                    {listenStories.map((item, index) => (
                        <div key={index}>
                            <div className="story-card group h-fit hover:cursor-pointer">
                                <div className="w-full relative">
                                    <img src={item.imageSrc} alt="" className="w-full" />
                                    <div className="w-[45px] h-[45px] transition-all duration-200 group-hover:bg-white rounded-full border-2 border-gray-400 border-opacity-40 border-solid text-[14px] absolute bottom-[25px] left-[25px] flex items-center justify-center ">
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                </div>
                                <div className="themes w-fit peer flex flex-wrap gap-x-2 mt-0.5 mb-1">
                                    {item.listenTheme.map((theme, index) => (
                                        <div key={index} className="w-fit py-px px-1.5 mt-2 bg-[#CCF566] text-black text-[14px] whitespace-nowrap hover:opacity-50 uppercase">{theme}</div>
                                    ))}
                                </div>
                                <div className="w-full text-[24px] text-white sm:text-[18px] leading-6 capitalize group-hover:underline peer-hover:no-underline">{item.heading}</div>
                                <div className="w-full mt-2 text-[14px] text-white font-normal leading-5 normal-case">{item.info}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full max-w-[1400px] mx-auto mt-[60px] px-[60px] md:px-[30px] sm:px-[15px] flex justify-between">
                    <div></div>
                    <ViewMore text="View more stories" textColor1="white" textColor2="black" arrowDirection="down" />
                </div>
                
                <Inbox />
            </div>
        </div>
     );
}
 
export default ListenPage;