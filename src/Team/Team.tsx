import NavBar from '../GeneralComponents/NavBar';
import ViewMore from '../GeneralComponents/ViewMore';
import { stories } from '../AppData/Data';
import Disciplines from './Disciplines';
import { disciplines } from '../AppData/Data';
import Inbox from '../GeneralComponents/Inbox';

const TeamsPage = () => {
    const teamStories = [];
    teamStories.push(stories[1]);
    teamStories.push(stories[4]);
    teamStories.push(stories[8]);
    teamStories.push(stories[11]);

    return ( 
        <div className="Teams bg-[black] h-full w-screen text-white">
            <NavBar logoUrl="Images\Spotify Logo White.svg" color="white" activeLink="Team" />

            <div className="w-full max-w-[1400px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] relative transition-all duration-300">
                <div className="absolute top-[30px] sm:top-[10px] left-[50px] md:left-0">
                    <img src="background-shapes/(Tools) Top-sec Red Shape.svg" alt="" className="lg:h-[300px] md:h-[250px] sm:h-[200px] " />
                </div>
                <div className="absolute top-[620px] md:top-[550px] right-[150px] lg:right-0 sm:right-[-20px] ">
                    <img src="background-shapes\(Tools) Top-sec Blue Shape.svg" alt="" className="-rotate-[20deg] lg:h-[200px] md:h-[150px] " />
                </div>

                <div className="relative">
                    <div className="text-[152px] md:text-[90px] sm:text-[64px] flex justify-center pt-[130px]">Team</div>

                    <div className="flex justify-center">
                        <div className="w-[730px] md:w-[70%] sm:w-[90%] text-center text-[30px] md:text-[26px] sm:text-[22px] ">
                            We're a cross-disciplinary team that loves to create great experiences and make meaningful connections between listeners and creators. 
                            Learn more about our design community below and browse the latest opportunities on our team.
                        </div>
                    </div>

                    <div className="flex justify-center mt-10">
                        <ViewMore text="Join the band" textColor1="white" textColor2="black" arrowDirection="down" />
                    </div>
                </div>

                <div className="text-[30px] mt-[100px]">Who we are</div>
                <div className="relative grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-16 mt-[10px] mb-[100px]">
                    {teamStories.map((item, index) => (
                        <div key={index}>
                            <div className="story-card group h-fit hover:cursor-pointer">
                                <img src={item.imageSrc} alt="" className="w-full" />
                                <div className="peer w-fit py-px px-1.5 mt-2.5 mb-1 bg-white text-[14px] text-black hover:opacity-50 uppercase">{item.theme}</div>
                                <div className="w-full text-[24px] sm:text-[18px] leading-6 group-hover:underline peer-hover:no-underline">{item.heading}</div>
                                <div className="w-full mt-2 text-[14px] font-normal leading-5 normal-case">{item.info}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-[60px] ">
                    <div></div>
                    <ViewMore text="View more stories" textColor1="white" textColor2="black" arrowDirection="down" />
                </div>

                <div className="text-[30px] mt-[100px]">Our Disciplines</div>
                <div className="relative grid grid-cols-2 sm:grid-cols-1 gap-6 mt-[20px]">
                    {disciplines.map((data, index) => (
                        <div key={index}>
                            <Disciplines heading={data.heading} info={data.info} bgShapeSrc={data.bgShapeSrc} randomShapeSrc={data.randomShapeSrc} bgColor={data.bgColor} />
                        </div>
                    ))}
                </div>

                <div className="text-[30px] mt-[100px]">Join the band</div>
                <div className="w-[700px] group flex justify-between mt-[40px] cursor-pointer">
                    <div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-white mr-1"></div>
                            <div className="text-[14px]">MIAMI</div>
                        </div>
                        <div className="text-[24px] group-hover:underline">Design Manager - Editorial, LatAm</div>
                    </div>
                    <div className="w-7 h-7 ml-[5px] rounded-full flex items-center justify-center bg-white opacity-0 group-hover:opacity-100">
                        <i className="fa-solid fa-arrow-up rotate-45 text-black "></i>
                    </div>
                </div>
                <div className="flex justify-between my-[100px]">
                    <div></div>
                    <div className="flex items-center group cursor-pointer">
                        <div className="text-[14px]">GO TO SPOTIFY JOBS</div>
                        <div className="w-[60px] h-[60px] ml-[10px] rounded-full border border-[#3f3f3f] flex items-center justify-center group-hover:bg-white">
                            <i className="fa-solid fa-arrow-up rotate-45 text-[18px] text-white group-hover:text-black "></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <Inbox />
        </div>
     );
}
 
export default TeamsPage;