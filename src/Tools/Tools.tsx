import NavBar from '../GeneralComponents/NavBar';
import { toolStories } from '../AppData/Data';
import StoriesComponent from '../GeneralComponents/StoriesComp';
import Inbox from '../GeneralComponents/Inbox';
import Footer from '../GeneralComponents/Footer';

const ToolsPage = () => {
    return ( 
        <div className="Tools h-full ">
            <NavBar logoUrl="Images\Spotify Logo Black.svg" color="black" activeLink="Tools" />

            <div className="absolute inset-0 h-fit w-screen overflow-hidden bg-[#FEE819]">
                <div className="top-bg-shape absolute left-[-20px] sm:left-0">
                    <img src="background-shapes\Tools-top-bg.svg" alt="" className="h-full" draggable="false" />
                </div>
                
                <div className="relative">
                    <div className="text-[152px] md:text-[90px] sm:text-[64px] flex justify-center pt-[130px]">Tools</div>
                    <div className="text-center text-[30px] md:text-[26px] sm:text-[22px] mt-[30px] sm:mt-[15px] sm:px-[15px] ">The design resources we rely on.</div>
                </div>
                <div className="w-full max-w-[2000px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] mb-[100px] md:mb-[50px] ">
                    <div className="relative grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-16 md:gap-y-8 mt-[100px] md:mt-[60px]">
                        {toolStories.map((item, index) => (
                            <div key={index}>
                                <StoriesComponent 
                                    imageSrc={item.imageSrc} 
                                    theme={item.theme} 
                                    heading={item.heading} 
                                    info={item.info} 
                                />
                            </div>
                        ))}

                        <div className="w-full h-[400px] sm:h-[350px] group text-white bg-black px-[40px] py-[30px] md:px-[30px] md:py-[20px] cursor-pointer ">
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-[52px] leading-[55px] md:text-[42px] md:leading-[45px] sm:text-[32px] sm:leading-[34px] text-[#CDF567] ">Now Hiring</div>
                                    <div className="w-[85%] mt-[20px] md:mt-[10px] font-normal text-[20px] leading-[30px] md:text-[16px] md:leading-[26px] ">
                                        See our Team page for opportunities to join Spotify Design.
                                    </div>
                                </div>
                                <div className="flex items-center group text-[14px] md:mb-[5px] cursor-pointer">
                                    <div className="mb-[5px] uppercase group-hover:underline">JOIN THE BAND<i className="fa-sharp fa-regular fa-arrow-up-right"></i></div>
                                    <div className="w-7 h-7 ml-[5px] rounded-full border-[1px] border-white flex items-center justify-center group-hover:bg-white">
                                        <i className="fa-solid fa-arrow-right -rotate-45 text-[14px] text-white group-hover:text-black "></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[400px] sm:h-[350px] group border border-[#3f3f3f] px-[40px] py-[30px] md:px-[30px] md:py-[20px] cursor-pointer ">
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-[52px] leading-[55px] md:text-[42px] md:leading-[45px] sm:text-[32px] sm:leading-[34px] ">Want more of the Spotify Design approach?</div>
                                    <div className="w-[85%] mt-[20px] md:mt-[10px] text-[20px] font-normal leading-[30px] md:text-[16px] md:leading-[26px] ">
                                        Check out our stories in the Process category.
                                    </div>
                                </div>
                                <div className="flex items-center group text-[14px] md:mb-[5px] cursor-pointer">
                                    <div className="mb-[5px] uppercase group-hover:underline">VIEW ALL PROCESS STORIES<i className="fa-sharp fa-regular fa-arrow-up-right"></i></div>
                                    <div className="w-7 h-7 ml-[5px] rounded-full border-[1px] border-black flex items-center justify-center group-hover:bg-black">
                                        <i className="fa-solid fa-arrow-right -rotate-45 text-[14px] text-black group-hover:text-white "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Inbox />

                <Footer
                    logoSrc="Images\Spotify Logo Black.svg" 
                    textColor="black" 
                    arrowHoverColor="white" 
                    bgImageSrc="background-shapes\tools-bottom-bg.svg" 
                />
            </div>
        </div>
     );
}
 
export default ToolsPage;