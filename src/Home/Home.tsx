import './Home.css';
import { Link } from 'react-router-dom';
import { stories } from '../StoriesData/Data';

const HomePage = () => {
    const homeStories = [];
    for (let i = 0; i < 4; i++) {
        homeStories.push(stories[i]);
    }

    return ( 
        <div className="Home">
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

            <div className="w-full max-w-[1400px] mt-[50px] sm:mt-[30px] mb-[30px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] flex items-center justify-between">
                <div className="text-[32px] sm:text-[24px]">New Releases</div>
                <Link to="/stories">
                    <div className="sm:hidden flex items-center group text-[14px] cursor-pointer">
                        <div className="mb-[5px] uppercase group-hover:underline decoration-double">View all stories</div>
                        <div className="w-6 h-6 ml-[5px] rounded-full border-[1px] border-black border-solid transition-all duration-200 group-hover:bg-black flex items-center justify-center">
                            <i className="fa-solid fa-arrow-right group-hover:text-white"></i>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="max-w-[1400px] relative w-full mx-auto px-[60px] md:px-[30px] sm:px-[15px] grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16">
                {homeStories.map((item, index) => (
                    <div key={index}>
                        {item.listenTheme ?
                            <div className="story-card group h-fit hover:cursor-pointer">
                                <div className="w-full relative">
                                    <img src={item.imageSrc} alt="" className="w-full" />
                                    <div className="w-[45px] h-[45px] transition-all duration-200 group-hover:bg-white rounded-full border-2 border-gray-400 border-opacity-40 border-solid text-[14px] absolute bottom-[25px] left-[25px] flex items-center justify-center ">
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
                                <div className="w-full mt-2 text-[14px] text-black font-normal leading-5 tracking-tight">{item.info}</div>
                            </div> :

                            <div className="story-card group h-fit hover:cursor-pointer">
                                <img src={item.imageSrc} alt="" className="w-full" />
                                <div className="peer w-fit py-px px-1.5 mt-2.5 mb-1 bg-black text-[14px] text-white hover:opacity-50 uppercase">{item.theme}</div>
                                <div className="w-full text-[24px] sm:text-[18px] leading-6 group-hover:underline peer-hover:no-underline">{item.heading}</div>
                                <div className="w-full mt-2 text-[14px] font-normal leading-5 tracking-tight">{item.info}</div>
                            </div>
                        }
                    </div>
                ))}
            </div>

            <div className="w-full max-w-[1400px] mt-[50px] sm:mt-[30px] mb-[30px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] flex items-center justify-between">
                <div className="text-[32px] sm:text-[24px] leading-[35px]">
                    <div>In the Spotlight</div>
                    <div className="font-normal">Meet the humans who design Spotify</div>
                </div>
                <Link to="/stories">
                    <div className="sm:hidden flex items-center group text-[14px] cursor-pointer">
                        <div className="mb-[5px] uppercase group-hover:underline decoration-double">View all in the spotlight</div>
                        <div className="w-6 h-6 ml-[5px] rounded-full border-[1px] border-black border-solid transition-all duration-200 group-hover:bg-black flex items-center justify-center">
                            <i className="fa-solid fa-arrow-right group-hover:text-white"></i>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default HomePage;


// var uniqueInOrder=function(iterable){
//     let charArrray,
//     charRoom = {},
//     output = [];

//     if (Array.isArray(iterable)) {
//         charArrray = iterable;
//     } else {
//         charArrray = Array.from(iterable);
//     };

//     charArrray.forEach(value => {
//         charRoom[value] ? charRoom[value]++ : charRoom[value] = 1;
//     });

//     for (let item in charRoom) {
//         output.push(item);
//     }

//     return output;
// }