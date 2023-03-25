import NavBar from '../GeneralComponents/NavBar';
import ViewMore from '../GeneralComponents/ViewMore';
import { useEffect } from 'react';
import { stories } from '../AppData/Data';
import StoriesComponent from '../GeneralComponents/StoriesComp';
import Disciplines from './Disciplines';

const TeamsPage = () => {
    const teamStories = [];
    teamStories.push(stories[1]);
    teamStories.push(stories[4]);
    teamStories.push(stories[8]);
    teamStories.push(stories[11]);

    return ( 
        <div className="Teams bg-[black] h-full w-screen text-white">
            <NavBar logoUrl="Images\Spotify Logo White.svg" color="white" activeLink="Team" />

            <div className="w-full max-w-[1400px] mx-auto px-[60px] md:px-[30px] sm:px-[15px] relative">
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
                        {/* <div className="blue-line absolute top-[130px] left-[360px] "><img src="background-shapes\(Tools) Text blue line.svg" alt="" /></div> */}
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
                <div className="relative grid grid-cols-2 sm:grid-cols-1 gap-6 mt-[20px] mb-[100px]">
                    <Disciplines />
                    <Disciplines />
                    <Disciplines />
                    <Disciplines />
                </div>
            </div>
        </div>
     );
}
 
export default TeamsPage;