import './Home.css';
import { Link } from 'react-router-dom';
import { stories } from '../AppData/Data';
import NavBar from '../GeneralComponents/NavBar';
import ViewMore from '../GeneralComponents/ViewMore';
import Designers from './designersCarousel';
import Inbox from '../GeneralComponents/Inbox';
import StoriesComponent from '../GeneralComponents/StoriesComp';

const HomePage = () => {
    const homeStories = [];
    for (let i = 0; i < 4; i++) {
        homeStories.push(stories[i]);
    }

    return ( 
        <div className="Home">
            <NavBar logoUrl="Images\Spotify Logo Black.svg" color="black" activeLink="Home" />

            <div className="Home-container">
                <div className="random-stories">
                    <div className="story-images">
                        <div className="controls-position1 controls">
                            <div><img src="icons\forward.svg" alt="" /></div>
                            <div><img src="icons\backward.svg" alt="" /></div>
                            <div><img src="icons\shuffle.svg" alt="" /></div>
                        </div>
                        <div className="animated-image"><img src="Images\Stories(Others)\Others_1.svg" alt="" /></div>
                    </div>
                    <div className="story-text w-[500px]">
                        <div className="theme">BEHIND THE SCENES</div>
                        <div className="info">Making Moves: Designing Motion for 2022 Wrapped</div>
                    </div>
                    <div className="controls-position2 controls">
                        <div><img src="icons\forward.svg" alt="" /></div>
                        <div><img src="icons\backward.svg" alt="" /></div>
                        <div><img src="icons\shuffle.svg" alt="" /></div>
                    </div>
                </div>

                <div className="controls-position3">
                    <div><img src="icons\backward.svg" alt="" /></div>
                    <div><img src="icons\forward.svg" alt="" /></div>
                    <div><img src="icons\shuffle.svg" alt="" /></div>
                </div>
                <div className="timer-scroll">
                    <div className="count-down">
                        <div className="start">01</div>
                        <div className="progress-bar">
                            <div className="full"></div>
                            <div className="empty"></div>
                        </div>
                        <div className="end">15</div>
                    </div>
                    <div className="scroll-down">
                        <span>SCROLL DOWN</span>
                        <div><img src="icons\scroll-down.svg" alt="" /></div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[2000px] sm:mt-[30px] mb-[30px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] ">
                <div className="flex items-center justify-between mt-[50px]">
                    <div className="text-[32px] sm:text-[24px]">New Releases</div>
                    <Link to="/stories" className="sm:hidden">
                        <ViewMore text="View all stories" textColor1="black" textColor2="white" arrowDirection="right" />
                    </Link>
                </div>

                <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 md:gap-y-8 mt-[30px]">
                    {homeStories.map((item, index) => (
                        <div key={index}>
                            <StoriesComponent imageSrc={item.imageSrc} theme={item.theme} listenTheme={item.listenTheme} heading={item.heading} info={item.info} />
                        </div>
                    ))}
                </div>

                <div className="items-center justify-between my-[30px] hidden sm:flex">
                    <div></div>
                    <Link to="/stories">
                        <ViewMore text="View all stories" textColor1="black" textColor2="white" arrowDirection="right" />
                    </Link>
                </div>

                <div className="flex items-center justify-between my-[50px] sm:my-0 sm:mb-[30px]">
                    <div className="text-[32px] sm:text-[22px] leading-[35px] sm:leading-[25px]">
                        <div>In the Spotlight</div>
                        <div className="font-normal">Meet the humans who design Spotify</div>
                    </div>

                    <Link to="/stories" className="sm:hidden">
                        <ViewMore text="View all in the spotlights" textColor1="black" textColor2="white" arrowDirection="right" />
                    </Link>
                </div>

                <Designers/>

                <div className="items-center justify-between my-[30px] hidden sm:flex">
                    <div></div>
                    <Link to="/stories">
                        <ViewMore text="View all in the spotlights" textColor1="black" textColor2="white" arrowDirection="right" />
                    </Link>
                </div>
            </div>
            
            <div className="mt-[80px] sm:mt-0">
                <Inbox />
            </div>
        </div>
     );
}
 
export default HomePage;