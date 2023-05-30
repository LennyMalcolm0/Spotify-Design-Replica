import './Home.css';
import { stories, toolStories } from '../AppData/Data';
import NavBar from '../GeneralComponents/NavBar';
import ViewMore from '../GeneralComponents/ViewMore';
import Designers from './designersCarousel';
import Inbox from '../GeneralComponents/Inbox';
import StoriesComponent from '../GeneralComponents/StoriesComp';
import Footer from '../GeneralComponents/Footer';

const HomePage = () => {
    const homeStories = [];
    for (let i = 0; i < 4; i++) {
        homeStories.push(stories[i]);
    }

    const homeToolStories = [];
    for (let i = 0; i < 2; i++) {
        homeToolStories.push(toolStories[i]);
    }

    return ( 
        <div className="Home">
            <NavBar logoUrl="Images\Spotify Logo Black.svg" color="black" activeLink="Home" />

            <div className="absolute inset-0 h-fit w-screen overflow-hidden">
                <div className="Home-container pt-[100px] pb-[50px] bg-[#FFCC00] text-[14px] 2xl:flex flex-col items-center ">
                    <div className="random-stories 2xl:w-[1800px] px-[50px] md:px-[30px] sm:px-[15px] flex flex-row-reverse items-center justify-around lg:block ">
                        <div className="story-images flex items-center">
                            <div className="controls-position1 hidden lg:block sm:hidden ">
                                <div><img src="icons\forward.svg" alt="" /></div>
                                <div className="my-[20px]"><img src="icons\backward.svg" alt="" /></div>
                                <div><img src="icons\shuffle.svg" alt="" /></div>
                            </div>
                            <div className="animated-image lg:w-full lg:flex justify-around sm:px-[15px]">
                                <img src="Images\Stories(Others)\Others_1.svg" alt="" className="w-[500px] xl:w-[400px] sm:w-[90%] cursor-grab " />
                            </div>
                        </div>

                        <div className="story-text w-[500px] lg:w-full h-[500px] lg:h-fit xl:mt-[30px] lg:mt-[20px] ">
                            <div className="them w-fit mt-[10px] cursor-pointer hover:underline ">BEHIND THE SCENES</div>
                            <div className="info w-fit text-[64px] xl:text-[55px] sm:text-[42px] cursor-pointer hover:underline ">Making Moves: Designing Motion for 2022 Wrapped</div>
                        </div>
                        
                        <div className="controls-position2 xl:hidden ">
                            <div><img src="icons\forward.svg" alt="" /></div>
                            <div className="my-[20px]"><img src="icons\backward.svg" alt="" /></div>
                            <div><img src="icons\shuffle.svg" alt="" /></div>
                        </div>
                    </div>

                    <div className="controls-position3 hidden xl:flex lg:hidden sm:flex ml-[-5px] mt-[60px] sm:mt-[200px] px-[60px] sm:px-[15px] ">
                        <div><img src="icons\backward.svg" alt="" /></div>
                        <div className="mx-[20px]"><img src="icons\forward.svg" alt="" /></div>
                        <div><img src="icons\shuffle.svg" alt="" /></div>
                    </div>

                    <div className="timer-scroll 2xl:w-[1800px] flex items-center justify-between px-[60px] md:px-[30px] sm:px-[15px] mt-[20px] xl:m-0 lg:mt-[100px] sm:mt-[15px] ">
                        <div className="count-down flex items-center ml-[100px] xl:m-0 ">
                            <div className="start">01</div>
                            <div className="progress-bar h-[2px] w-[45px] relative mx-[10px]">
                                <div className="full"></div>
                                <div className="empty h-full w-full bg-[#9c9797] opacity-40 "></div>
                            </div>
                            <div className="end">15</div>
                        </div>

                        <div className="scroll-down group flex items-center cursor-pointer text-[14px]">
                            <span>SCROLL DOWN</span>
                            <div className="h-[60px] sm:h-[45px] w-[60px] sm:w-[45px] ml-[10px] border border-[#9c9797] border-opacity-40 
                            rounded-full flex items-center justify-center group-hover:bg-black ">
                                <i className="fa-solid fa-arrow-down text-[18px] group-hover:text-white "></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[2000px] sm:mt-[30px] mb-[30px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] ">
                    <ViewMore 
                        h1Text="New Releases" link="/stories" linkClass="sm:hidden" actionText="View all stories" 
                        textColor1="black" textColor2="white" arrowDirection="right" compClass="flex mt-[50px]"
                    />

                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 md:gap-y-8 mt-[30px]">
                        {homeStories.map((item, index) => (
                            <div key={index}>
                                <StoriesComponent imageSrc={item.imageSrc} theme={item.theme} listenTheme={item.listenTheme} heading={item.heading} info={item.info} />
                            </div>
                        ))}
                    </div>
                    
                    <ViewMore 
                        link="/stories" actionText="View all stories" textColor1="black" textColor2="white" 
                        arrowDirection="right" compClass="hidden sm:flex mt-[30px] mb-[60px]"
                    />
                    
                    <ViewMore 
                        h1Text="In the Spotlight" h2Text="Meet the humans who design Spotify" link="/stories" linkClass="sm:hidden" 
                        actionText="View all in the spotlights" textColor1="black" textColor2="white" arrowDirection="right" compClass="flex my-[50px] sm:my-0 sm:mb-[30px]"
                    />

                    <Designers />

                    <ViewMore 
                        link="/stories" actionText="View all in the spotlights" textColor1="black" textColor2="white" 
                        arrowDirection="right" compClass="my-[30px] hidden sm:flex"
                    />
                </div>
                
                <div className="mt-[80px] sm:mt-0">
                    <Inbox />
                </div>

                <div className="w-full max-w-[2000px] sm:mt-[30px] mb-[30px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] ">
                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 md:gap-y-8 mt-[60px] md:mt-[30px]">
                        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-8">
                            <div className="col-span-2 sm:col-span-1">
                                <ViewMore 
                                    h1Text="Tools" h2Text="Our day-to-day resources" link="/tools" linkClass="sm:hidden" 
                                    actionText="View all tools" textColor1="black" textColor2="white" arrowDirection="right" compClass="flex"
                                />
                            </div>

                            {homeToolStories.map((item, index) => (
                                <div key={index}>
                                    <StoriesComponent imageSrc={item.imageSrc} theme={item.theme} heading={item.heading} info={item.info} />
                                </div>
                            ))}

                            <ViewMore 
                                link="/tools" actionText="View all tools" textColor1="black" textColor2="white" 
                                arrowDirection="right" compClass="hidden sm:flex"
                            />
                        </div>

                        <div className="col-span-2">
                            <div className="w-[85%] mx-auto md:w-full">
                                <ViewMore 
                                    h1Text="Jobs" h2Text="Open roles at Spotify Design" link="/team" linkClass="sm:hidden" 
                                    actionText="View team" textColor1="black" textColor2="white" arrowDirection="right" compClass="flex sm:mb-[20px]"
                                />

                                <div className="w-full group flex justify-between mt-[40px] md:mt-[20px] cursor-pointer">
                                    <div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-black mr-1"></div>
                                            <div className="text-[14px]">MIAMI</div>
                                        </div>
                                        <div className="text-[24px] md:text-[20px] sm:text-[18px] group-hover:underline">Design Manager - Editorial, LatAm</div>
                                    </div>
                                    <div className="w-7 h-7 ml-[5px] rounded-full flex items-center justify-center bg-black opacity-0 group-hover:opacity-100 md:hidden">
                                        <i className="fa-solid fa-arrow-up rotate-45 text-white "></i>
                                    </div>
                                </div>

                                <ViewMore 
                                    link="/teams" actionText="View team" textColor1="black" textColor2="white" 
                                    arrowDirection="right" compClass="hidden sm:flex mt-[30px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer logoSrc="Images\Spotify Logo Black.svg" textColor="black" arrowHoverColor="white" bgImageSrc="background-shapes\home-bottom-bg.svg" />
            </div>
        </div>
     );
}
 
export default HomePage;